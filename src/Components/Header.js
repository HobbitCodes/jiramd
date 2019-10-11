import React, {Component} from 'react'

class Header extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {
            menu_class: 'site-header__nav main-menu',
            hamburger_class: 'hamburger',
        };
    }

    onClick(e) {
        e.preventDefault();
        this.setState({menu_class: (this.state.menu_class === 'site-header__nav main-menu') ? 'site-header__nav site-header__nav--active main-menu' : 'site-header__nav main-menu'});
        this.setState({hamburger_class: (this.state.hamburger_class === 'hamburger') ? 'hamburger hamburger--active' : 'hamburger'});
    }

    render() {
        return (
            <header className="site-header">
                <div className={this.state.hamburger_class} onClick={this.onClick}>
                    <span className="hamburger__top"></span>
                    <span className="hamburger__middle"></span>
                    <span className="hamburger__bottom"></span>
                </div>
                <div className={this.state.menu_class}>
                    <ul>
                        <li><a>Get Started</a></li>
                        <li><a href="https://github.com/HobbitCodes" target="_blank" rel="noopener noreferrer">View repo</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;