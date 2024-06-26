import React, { Component } from 'react'
import { defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

//CSS Imports
import './Diagnosis_History.css'

//Images
import respiratoryLogo from '../../Assets/respiratoryLogo.png'
import temperatureLogo from '../../Assets/temperatureLogo.png'
import heartLogo from '../../Assets/heartLogo.png'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = "black";

class Diagnosis_History extends Component {
    render() {
        const { patient } = this.props
        if(patient) {
            return (
                <div className='Diagnosis_History'>
                    <h4>Diagnosis History</h4>
                    <div className='Diagnosis_History-graph'>
                        <Line 
                            data={{
                                labels: patient.diagnosis_history.reverse().map((data) => `${data.month}, ${data.year}` ),
                                datasets: [
                                    {
                                        label: 'Systolic',
                                        data: patient.diagnosis_history.reverse().map((data) => data.blood_pressure.systolic.value),
                                        backgroundColor: "#E66FD2",
                                        borderColor: "#E66FD2"
                                    },
                                    {
                                        label: 'Diastolic',
                                        data: patient.diagnosis_history.reverse().map((data) => data.blood_pressure.diastolic.value),
                                        backgroundColor: "#8C6FE6",
                                        borderColor: "#8C6FE6"
                                    }
                                ]
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.5,
                                    }
                                },
                                plugins: {
                                    title: {
                                        text: "Blood Pressure",
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                        align: 'start',
                                        labels: {
                                            font: {
                                                weight: 'bold'
                                            },
                                            usePointStyle: true,
                                            padding: 30,
                                        },
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className='Diagnosis_History-rate-wrapper'>
                        <div className='Diagnosis_History-rate respiratory-rate'>
                            <img src={respiratoryLogo} alt="respiratory icon" />
                            <div className='Diagnosis_History-rate-details'>
                                <p>Respiratory Rate</p>
                                <h4>{patient.diagnosis_history[0].respiratory_rate.value} bpm</h4>
                            </div>
                            <p>{patient.diagnosis_history[0].respiratory_rate.levels}</p>
                        </div>
                        <div className='Diagnosis_History-rate temperature-degrees'>
                            <img src={temperatureLogo} alt="temperature icon" />
                            <div className='Diagnosis_History-rate-details'>
                                <p>Temperature</p>
                                <h4>{patient.diagnosis_history[0].temperature.value}° F</h4>
                            </div>
                            <p>{patient.diagnosis_history[0].temperature.levels}</p>
                        </div>
                        <div className='Diagnosis_History-rate heart-rate'>
                            <img src={heartLogo} alt="heart icon" />
                            <div className='Diagnosis_History-rate-details heart-rate'>
                                <p>Heart Rate</p>
                                <h4>{patient.diagnosis_history[0].heart_rate.value} bpm</h4>
                            </div>
                            <p>{patient.diagnosis_history[0].heart_rate.levels}</p>
                        </div>
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

export default Diagnosis_History