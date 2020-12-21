import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'
import * as GiIcons from 'react-icons/gi'

const NavbarData=[{
    title:'Home',
    path: '/',
    icon:<AiIcons.AiOutlineHome/>,
    cName:'nav-text'
},
{
    title:'Pro. Objective',
    path: '/objective',
    icon:<BsIcons.BsBriefcase/>,
    cName:'nav-text'
},
{
    title:'Activities',
    path: '/activities',
    icon:<FiIcons.FiActivity/>,
    cName:'nav-text'
},
{
    title:'Qualifications',
    path: '/qualifications',
    icon:<BsIcons.BsBook/>,
    cName:'nav-text'
},
{
    title:'Skills',
    path: '/skills',
    icon:<GiIcons.GiSkills/>,
    cName:'nav-text'
},
{
    title:'Projects',
    path: '/projects',
    icon:<AiIcons.AiOutlineFundProjectionScreen/>,
    cName:'nav-text'
},
{
    title:'Awards',
    path: '/awards',
    icon:<BsIcons.BsAward/>,
    cName:'nav-text'
},
]

export default NavbarData
