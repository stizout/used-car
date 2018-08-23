import React from 'react';
import './SelectRecall.css'
import axios from 'axios';
import {setCarInfo} from '../ducks/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class SelectRecall extends React.Component {
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
            <div className="recall-car-container">
                    <div className="recall-info">
                        <p>Car: {this.state.displayMake} {this.state.displayModel} {this.state.displayYear}</p>
                        <Link to="/recalls"><button onClick={() => this.props.setCarInfo({...this.state})}>Get Recalls</button></Link>
                    </div>
                <div className="recall-car-info-container">
                    <div className="recall-make">
                        {this.state.makes ?
                        <div className="recall-make-selector-container">
                        {this.state.makes.map((car) => {
                            return (
                                <div key={car.id} >
                                    <button onClick={() => this.selectMake(car.id, car.name)}>{car.name}</button>
                                </div>
                            )
                        })}
                        </div>: null}
                    </div>
                    <div className="recall-model">
                        {this.state.models ?
                            <div className="recall-model-selector-container">
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
                    <div className="recall-year">
                        <div className="recall-year-selector-container">
                            <button className="li"onClick={() => this.selectYear('2011')}>2011</button>
                            <button className="li" onClick={() => this.selectYear('2012')}>2012</button>
                            <button className="li" onClick={() => this.selectYear('2013')}>2013</button>
                            <button className="li" onClick={() => this.selectYear('2014')}>2014</button>
                            <button className="li" onClick={() => this.selectYear('2015')}>2015</button>
                            <button className="li" onClick={() => this.selectYear('2016')}>2016</button>
                            <button className="li" onClick={() => this.selectYear('2017')}>2017</button>
                            <button className="li" onClick={() => this.selectYear('2018')}>2018</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(SelectRecall)