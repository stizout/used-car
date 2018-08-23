// THIS DATABASE CAN BE FOUND AT HEROKU > DEV MOUNTAIN PROJECTS > WHITE;

import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import Routes from './Routes';
import {withRouter, Link} from 'react-router-dom';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home',

    }
  }

  handleItemClick = (e, {name}) => {
    this.setState((prevState) => {prevState.activeItem = name})
  }

  menuUpdate = (input) => {
    console.log(input)
    this.setState({
      activeItem: input
    })
  }
  render() {

    const {activeItem} = this.state
    const styles = {
      background: '#25262A',
      marginTop: 0,
      marginBottom: '-1px',
      height: 70,
      color: 'white'
    }
    return (
      <div className="background-style">
        <Menu tabular style={styles}>
        <div className="header-logo">
        <h1 className="brand"><i className="fas fa-car"></i> Used Car Check</h1>
        </div>
          <Menu.Item name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} as={Link} to='/'/>
          <Menu.Item name="Complaints" active={activeItem === 'Complaints'} onClick={this.handleItemClick} as={Link} to='/select'/>
          <Menu.Item name="Recalls" active={activeItem === 'Recalls'} onClick={this.handleItemClick} as={Link} to='/selectRecall'/>
          <Menu.Item name="Contact" active={activeItem === 'Contact'} onClick={this.handleItemClick} as={Link} to='/contact'/>
          <p className="support">Support: complaintscar@gmail.com</p>
        </Menu>
        
        <Routes menuUpdate={this.menuUpdate}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
