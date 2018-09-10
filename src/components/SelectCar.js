import React from 'react';
import './selectCar.css'
import axios from 'axios';
import {setCarInfo} from '../ducks/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
class SelectCar extends React.Component {
    constructor() {
        super();
        this.state = {
            makes: [],
            models: [],
            displayModel: '',
            displayMake: '',
            displayYear: '',
        }
    }

    componentDidMount() {
        (function () {
            window.scrollTo(0,0)
        })
        axios.get('/selectCar').then(res => {
            this.setState({
                makes: res.data
            })
        })
    }

    selectMake(id, name) {
        axios.get(`/selectModel/${id}`).then(res => {
            this.setState({
                models: res.data,
                displayMake: name
            })
        })
    }

    selectModel(name) {
        this.setState({displayModel: name})
    }

    selectYear(year) {
        this.setState({displayYear: year})
    }
    render() {
        return (
            <div className="complaint-select-car-container">
                    <div className="complaint-selected-info">
                        <p>Car: {this.state.displayMake} {this.state.displayModel} {this.state.displayYear}</p>
                        <Link to="/complaints"><button onClick={() => this.props.setCarInfo({...this.state})}>Get Complaints</button></Link>
                    </div>
                <div className="complaint-car-info-container">
                    <div className="complaint-make">
                        {this.state.makes ?
                        <div className="complaint-make-selector-container">
                        {this.state.makes.map((car) => {
                            return (
                                <div key={car.id} >
                                    <button onClick={() => this.selectMake(car.id, car.name)}>{car.name}</button>
                                </div>
                            )
                        })}
                        </div>: null}
                    </div>
                    <div className="complaint-model">
                        {this.state.models ?
                            <div className="complaint-model-selector-container">
                                {this.state.models.map((model) => {
                                    return (
                                        <div key={model.id}>
                                            <button onClick={() => this.selectModel(model.name)}>{model.name}</button>
                                        </div>
                                    )
                                })}
                            </div>
                            : <div>Please Select Make First</div>}
                    </div>
                    <div className="complaint-year">
                        <div className="complaint-year-selector-container">
                            <button className="complaint-li"onClick={() => this.selectYear('2011')}>2011</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2012')}>2012</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2013')}>2013</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2014')}>2014</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2015')}>2015</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2016')}>2016</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2017')}>2017</button>
                            <button className="complaint-li" onClick={() => this.selectYear('2018')}>2018</button>
                        </div>
                    </div>
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

const mapDispatchToProps = {
    setCarInfo
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectCar)


