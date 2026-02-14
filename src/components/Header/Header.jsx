import React from 'react'
import ProfilePic from "../../assets/profilepic.JPG";
import './Header.css'
import RightArrow from "../../assets/right-up.png"


const Header = () => {
  return (
    <div className='header'>
        <img src={ProfilePic} alt="profile-pic" />
        <h2>Hi! I'm Mohit Urkade</h2>
        <h1>Frontend web developer</h1>
        <h1>based in india</h1>
        <p>I am frontend developer from maharashtra with 2 years of experiance </p>
        <p>companies like Microsoft . Tesla and Apple</p>

        <div className='buttons'>
            <button> View My Work </button>
            <button>Let's Connect <img src={RightArrow} alt="" /></button>

        </div>
    </div>
  )
}

export default Header