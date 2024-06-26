import React, { Component } from 'react'

//CSS Imports
import './Patient_Tab.css'

//Images
import horizontalOptionsLogo from '../../Assets/horizontalOptionsLogo.png'

class Patient_Tab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {profile_picture, name, gender, age} = this.props.patient
        
        return (
            <div className='Patient_Tabs'>
                <div className='Patient_Tabs-content'>
                    <img src={profile_picture} alt={`${name} profile picture`}/>
                    <div className='Patient_Tabs-content-details'>
                        <h4>{name}</h4>
                        <p>{gender}, {age}</p>
                    </div>
                </div>
                <div className='Patient_Tabs-tools'>
                    <button><img src={horizontalOptionsLogo} /></button>
                </div>
            </div>
        )
    }
}

export default Patient_Tab