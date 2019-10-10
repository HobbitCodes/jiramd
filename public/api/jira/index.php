<?php
require '../../../vendor/autoload.php';

use JiraRestApi\Configuration\ArrayConfiguration;
use JiraRestApi\Issue\IssueService;
use JiraRestApi\Issue\IssueField;
use JiraRestApi\JiraException;

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

if (empty($_POST['jira_host']) || empty($_POST['jira_user']) || empty($_POST['jira_password'])) die();

if ($_POST) {
    new JiraMd($_POST, $_FILES);

    echo json_encode([
        "sent" => true
    ]);
} else {
    echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

class JiraMd {

    protected $iss;

    public function __construct($post, $files)
    {
        $this->iss = new IssueService(new ArrayConfiguration(
            [
                'jiraHost' => $post['jira_host'],
                'jiraUser' => $post['jira_user'],
                'jiraPassword' => $post['jira_password'],
            ]
        ));

        foreach ($files as $file) {
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);

            if ($extension == 'md') {
                $result = [];
                $file = explode("====", file_get_contents($file['tmp_name']));

                $epic = $file[0];
                unset($file[0]);

                $epicKey = $this->createEpic($epic, $post['project_key']);


                foreach ($file as $content) {
                    $example = [];
                    $issues = array_filter(array_map("trim", explode("___", $content)));
                    foreach ($issues as $issue) {
                        $subTasks = array_filter(array_map("trim", explode("##", $issue)));
                        $issueContent = array_filter(array_map("trim", explode("----", $subTasks[0])));

                        unset($subTasks[0]);

                        $issue = $this->createIssue($issueContent, $epicKey, $post['project_key']);

                        foreach ($subTasks as $subTask) {
                            $this->createSubTask($subTask, $issue, $post['project_key']);
                        }
                    }
                    $result[] = $example;
                }
            }
        }
    }


    /**
     * @param $data
     * @param $projectKey
     * @return string
     * @throws JsonMapper_Exception
     */
    public function createEpic($data, $projectKey)
    {
        try {
            $issueField = new IssueField();

            $issueField->getIssueType();

            $issueField->setProjectKey($projectKey)
                ->setSummary($data)
                ->setIssueType("Epic")
                ->setDescription($data)
                ->addCustomField('customfield_10006', $data);

            // Todo: Add in a jql to search for the Epic first - if exists pass back the key
            $ret = $this->iss->create($issueField);

            return $ret->key;
        } catch (JiraException $e) {
            echo "<pre>";
            print_r($data);
            echo "</pre>";
            print("Error Occured! " . $e->getMessage());
        }
    }

    /**
     * @param $data
     * @param $epic
     * @param $projectKey
     * @return string
     * @throws JsonMapper_Exception
     */
    public function createIssue($data, $epic, $projectKey)
    {
        try {
            $issueField = new IssueField();

            $issueField->getIssueType();

            $issueField->setProjectKey($projectKey)
                ->setSummary($data[0])
                ->setIssueType("Story")
                ->setDescription($data[1])
                ->addCustomField('customfield_10004', $epic) // Used to assign epics
            ;

            $ret = $this->iss->create($issueField);

            return $ret;
        } catch (JiraException $e) {
            echo "<pre>";
            print_r($data[0]);
            echo "</pre>";
            print("Error Occured! " . $e->getMessage());
        }
    }

    /**
     * @param $data
     * @param $parent
     * @param $projectKey
     * @return string
     * @throws JsonMapper_Exception
     */
    public function createSubTask($data, $parent, $projectKey)
    {
        try {
            $issueField = new IssueField();

            $issueField->getIssueType();

            $dataContent = explode('***', $data);

            $issueField->setProjectKey($projectKey)
                ->setSummary($dataContent[0])
                ->setIssueType('Sub-task')
                ->setDescription($dataContent[1])
                ->setParent($parent);

            $ret = $this->iss->create($issueField);

            return $ret->key;
        } catch (JiraException $e) {
            echo "<pre>";
            print_r($data[0]);
            echo "</pre>";
            print("Error Occured! " . $e->getMessage());
        }
    }
}