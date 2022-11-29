// import React, { useState } from 'react'
import './Header.css'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { MdOutlineGroups } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  // const [toggle, setToggle] = useState(true)
  // const handleToggle = () => setToggle(!toggle)
  return (
    <div className='Header_container'>
      <div className='head'>
        <AiFillFacebook fontSize="50px" color='blue' />
        <BsSearch fontSize="40px" color='white' />
      </div>

      <div className='Header_wrapper'>
        <div className='Nav_contain'>
          <AiFillHome fontSize="40px" color='white' />
          <MdOutlineGroups fontSize="40px" color='white' />
          <MdOutlineOndemandVideo fontSize="40px" color='white' />
          <TbBuildingStore fontSize="40px" color='white' />
        </div>
      </div>
      <div className='Nav_burger'>
        <div className='plus'><AiOutlinePlusCircle fontSize="40px" /></div>
        <div className='messenger'><RiMessengerLine fontSize="40px" /></div>
        <div className='notify'> <IoMdNotificationsOutline fontSize="40px" /></div>
      </div>
    </div>
  )
}

export default Header