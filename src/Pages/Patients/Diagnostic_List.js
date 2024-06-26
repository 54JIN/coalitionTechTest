import React, { Component } from 'react'

//CSS Imports
import './Diagnostic_List.css'

class Diagnostic_List extends Component {
    render() {
        const { patient } = this.props
        if(patient) {
            return (
                <div className='Diagnostic_List'>
                    <h4>Diagnostic List</h4>
                    <div className='Diagnostic_List-title'>
                        <h6 className='Diagnostic_List-problem'>Problem/Diaggnosis</h6>
                        <h6 className='Diagnostic_List-descr'>Description</h6>
                        <h6 className='Diagnostic_List-status'>Status</h6>
                    </div>
                    <div className='Diagnostic_List-contnet'>
                        {patient.diagnostic_list.map((diagnosis, idx) => (
                            <div className='Diagnostic_List-content-detail' key={`${idx}-${diagnosis.name}`}>
                                <p className='Diagnostic_List-problem'>{diagnosis.name}</p>
                                <p className='Diagnostic_List-descr'>{diagnosis.description}</p>
                                <p className='Diagnostic_List-status'>{diagnosis.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Diagnostic_List