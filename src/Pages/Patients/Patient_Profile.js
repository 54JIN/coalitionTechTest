import React, {Component} from "react";

//CSS Imports
import './Patient_Profile.css'

//Images
import birthLogo from '../../Assets/birthLogo.png'
import femaleLogo from '../../Assets/femaleLogo.png'
import phoneLogo from '../../Assets/phoneLogo.png'
import insuranceLogo from '../../Assets/insuranceLogo.png'

class Patient_Profile extends Component {
    render() {
        if(this.props.patient){
            const { profile_picture, name, gender, date_of_birth, phone_number, emergency_contact, insurance_type } = this.props.patient   
            let dob = new Date(date_of_birth)
            let options = { year: 'numeric', month: 'long', day: 'numeric' }

            dob = dob.toLocaleDateString('en-US', options)
            
            return (
                <div className="Patient_Profile">
                    <div className="Patient_Profile-name">
                        <img src={profile_picture} alt={`${name} profile picture`}/>
                        <h2>{name}</h2>
                    </div>
                    <div className="Patient_Profile-Information">
                        <div className="Patient_Profile-content">
                            <img src={birthLogo} alt="birth icon"/>
                            <div className="Patient_Profile-content-details">
                                <p>Date of Birth</p>
                                <h4>{dob}</h4>
                            </div>
                        </div>
                        <div className="Patient_Profile-content">
                            <img src={femaleLogo} alt="female icon" />
                            <div className="Patient_Profile-content-details">
                                <p>Gender</p>
                                <h4>{gender}</h4>
                            </div>
                        </div>
                        <div className="Patient_Profile-content">
                            <img src={phoneLogo} alt="phone icon" />
                            <div className="Patient_Profile-content-details">
                                <p>Contact Info.</p>
                                <h4>{phone_number}</h4>
                            </div>
                        </div>
                        <div className="Patient_Profile-content">
                            <img src={phoneLogo} alt="phone icon" />
                            <div className="Patient_Profile-content-details">
                                <p>Emergency Contacts</p>
                                <h4>{emergency_contact}</h4>
                            </div>
                        </div>
                        <div className="Patient_Profile-content">
                            <img src={insuranceLogo} alt="insurance incon" />
                            <div className="Patient_Profile-content-details">
                                <p>Insurance Provider</p>
                                <h4>{insurance_type}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="Patient_Profile-tools">
                        <button>Show All Information</button>
                    </div>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default Patient_Profile