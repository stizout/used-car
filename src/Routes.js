import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SelectCar from './components/SelectCar';
import SelectRecall from './components/SelectRecall';
import ContactUs from './components/ContactUs';
import Complaints from './components/complaints';
import Recalls from './components/recalls';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={() => <Home menuUpdate={this.props.menuUpdate} />}/>
                <Route path='/select' render={() => <SelectCar />}/>
                <Route path='/selectRecall' render={() => <SelectRecall menuUpdate={this.props.menuUpdate}/>}/>
                <Route path='/contact' component={ContactUs}/>
                <Route path="/complaints" component={Complaints}/>
                <Route path="/recalls" component={Recalls}/>
            </Switch>
        )
    }
}
export default Routes