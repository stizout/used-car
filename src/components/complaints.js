import React from 'react';
import './complaints.css'
import axios from 'axios';
import {connect} from 'react-redux';


class Complaints extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            data: [],
        }
    }
    componentDidMount() {
        let make = this.props.carInfo.displayMake
        let model = this.props.carInfo.displayModel
        let year = this.props.carInfo.displayYear
        let url = `https://one.nhtsa.gov/webapi/api/Complaints/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`

        axios.post('/select/complaint', {url} ).then(res => {
            this.setState({
                message: res.data.Message,
                data: res.data.Results
            })
        })
    }


    render() {
        console.log(this.state.data)
        
        // let goodCar = function() {
        //     if(this.state.data.length < 15) {
        //         return <h1>This is a great Car!</h1>
        //     } else if(this.state.data.length >= 15 && this.state.data.length < 50) {
        //         return <h1>Beware... This car should spell trouble</h1>
        //     } else if (this.state.data.length >= 50) {
        //         return <h1>Run Forrest RUN!!!!!!!</h1>
        //     }
        // }

        return (
            <div>
                <div className="complaints-container">
                    {this.state.data ? 
                        <div>
                            <h1 className="complaints-header">
                                Complaints for: {this.props.carInfo.displayYear} <i className="fas fa-greater-than"></i>
                                {this.props.carInfo.displayMake} <i className="fas fa-greater-than"></i>
                                {this.props.carInfo.displayModel} 
                            </h1>
                            <h1 className="complaints-subheader">Number of Complaints: {this.state.data.length}</h1>
                            {/* {goodCar()} */}
                        </div>
                    : null}
                    {this.state.data ?
                        <div className="single-complaint-container">

                            {this.state.data.map((complaint, index) => {
                                return (
                                    <div key={index} className="single-complaint">
                                        <div className="single-complaint-header">
                                            <h1>Complaint: {index + 1}</h1>
                                        </div>
                                        <h3>{complaint.Component}</h3>
                                        <p className='show'>{complaint.Summary}</p>
                                    </div>
                                )
                            })}
                        </div>
                    : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carInfo: state.carInfo
    }
}

export default connect(mapStateToProps)(Complaints);