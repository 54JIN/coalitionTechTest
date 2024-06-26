import React, { Component } from "react";

//CSS Imports
import './Lab_Results.css'

//Images
import downloadLogo from '../../Assets/downloadLogo.png'

class Lab_Results extends Component {
    render() {
        const { patient } = this.props
        if(patient) {
            return(
                <div className="Lab_Results">
                    <h4>Lab Results</h4>
                    <div className="Lab_Results-wrapper">
                        {patient.lab_results.map((result, idx) => (
                            <div className="Lab_Results-content" key={`${idx}-${result}`}>
                                <p>{result}</p>
                                <button><img src={downloadLogo} alt="download file button" /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Lab_Results;