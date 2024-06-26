import React, { Component } from 'react'

//Imported Components
import Patient_Tab from './Patient_Tab'

//CSS Imports
import './PatientsSearch.css'

//Images
import searchLogo from '../../Assets/searchLogo.png'

class PatientsSearch extends Component {
    render() {
        const {patients} = this.props
        return (
            <div className='PatientsSearch'>
                <div className='PatientsSearch-title'>
                    <h2>Patients</h2>
                    <button><img src={searchLogo} /></button>
                </div>
                <div className='PatientsSearch-patients'>
                    {patients.map((patient, idx) => (
                        <Patient_Tab patient={patient} key={`${idx}`}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default PatientsSearch