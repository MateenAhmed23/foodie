import React,{Component} from 'react'

import '../css/nav.css'

import Link from './Link'

const MenuItems = [
    {
        title: "Search",
        url: "/foodie/",
        cName: "nav-links"
    },
    {
        title: "Add New",
        url: "/foodie/AddNew",
        cName: "nav-links"
    },
    // {
    //     title: "",
    //     url: "#",
    //     cName: "nav-links"
    // },
    {
        title: "Contact",
        url: "/foodie/contact",
        cName: "nav-links"
    }
    // },
    // {
    //     title: "Sign-Up",
    //     url: "#",
    //     cName: "nav-links-mobile"
    // }
]
class Navbar extends Component{

    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="Navbar-Items">
                <h1 className="navbar-logo">Foodie <i className="fas fa-hamburger"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index} onClick={this.handleClick}><Link className={item.cName} href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
