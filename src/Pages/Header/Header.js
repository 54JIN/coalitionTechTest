import React, { Component } from 'react'

//CSS Imports
import './Header.css'

//Images
import logo from '../../Assets/TestLogo.svg'
import homeLogo from '../../Assets/homeLogo.png'
import patientsLogo from '../../Assets/patientsLogo.png'
import calendarLogo from '../../Assets/calendarLogo.png'
import chatLogo from '../../Assets/chatLogo.png'
import cardLogo from '../../Assets/cardLogo.png'
import profilePic from '../../Assets/womendoctor.png'
import settingsLogo from '../../Assets/settingsLogo.png'
import optionsLogo from '../../Assets/optionsLogo.png'

class Header extends Component {
       render() {
        return(
            <div className='Header'>
                <div className='Header-left'>
                    <button><img src={logo} alt="Tech.Care Logo Button" /></button>
                </div>
                <div className='Header-middle'>
                    <button><div className='Header-middle-content'>
                        <img src={homeLogo} alt="Overview Button" /> 
                        <p>Overview</p>
                    </div></button>
                    <button><div className='Header-middle-content Link-Active'>
                        <img src={patientsLogo} alt="Patients Button" /> 
                        <p>Patients</p>
                    </div></button>
                    <button><div className='Header-middle-content'>
                        <img src={calendarLogo} alt="Schedule Button" /> 
                        <p>Schedule</p>
                    </div></button>
                    <button><div className='Header-middle-content'>
                        <img src={chatLogo} alt="Message Button" /> 
                        <p>Message</p>
                    </div></button>
                    <button><div className='Header-middle-content'>
                        <img src={cardLogo} alt="Transactions Button" /> 
                        <p>Transactions</p>
                    </div></button>
                </div>
                <div className='Header-right'>
                    <div className='Header-right-detail'>
                        <img src={profilePic} alt="Profile Picture" />
                        <div className='Header-right-detail-content'>
                            <h4>Dr. Jose Simmons</h4>
                            <p>General Practitioner</p>
                        </div>
                    </div>
                    <div className='Header-right-tools'>
                        <button><img src={settingsLogo} alt="Settings Button" /></button>
                        <button><img src={optionsLogo} alt="Ellipses Button" /></button>
                    </div>
                </div>
            </div>
        )
       }
}

export default Header;