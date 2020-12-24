import React, { Component } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import NavbarData from './NavbarData'
import './Navbar.css'
import pic from '../img/shanto.jpg'
import { IconContext } from 'react-icons'



class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            sidebar: false
        }
        this.showSidebar = this.showSidebar.bind(this)
    }

    showSidebar() {
        this.setState({ sidebar: !this.state.sidebar })
        console.log('workikng')
    }

    render() {
        return (<>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className='navbar' style={{position:'fixed',top:'0',width:'100%',overflow:'hidden'}}>
                    <Link to='#' className='menu-bars' >
                        <FaIcons.FaBars onClick={this.showSidebar}  />
                    </Link>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items>' onClick={this.showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        <div className='imgdiv'><img src={pic} className='pic' />
                        </div>

                        <div>
                            <h2 className='name'>Hasibul Hasan</h2>
                        </div>
                        {
                            NavbarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>)
    }
}

export default Navbar