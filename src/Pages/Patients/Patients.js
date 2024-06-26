import React, { Component } from 'react'

//Imported Components
import PatientsSearch from './PatientsSearch'
import Diagnosis_History from './Diagnosis_History'
import Diagnostic_List from './Diagnostic_List'
import Patient_Profile from './Patient_Profile'
import Lab_Results from './Lab_Results'

//CSS Imports
import './Patients.css'

class Patients extends Component {
    render() {
        const {patients} = this.props
        return (
            <div className='Patients'>
                <div className='Patients-left'>
                    <PatientsSearch patients={patients}/>
                </div>
                <div className='Patients-middle'>
                    <Diagnosis_History patient={ patients ? patients[3] : null } />
                    <Diagnostic_List patient={ patients ? patients[3] : null }/>
                </div>
                <div className='Patients-right'>
                    <Patient_Profile patient={ patients ? patients[3] : null } />
                    <Lab_Results patient={ patients ? patients[3] : null } />
                </div>
            </div>
        )
    }
}

export default Patients