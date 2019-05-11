import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, withRouter } from 'react-router-dom';

import { AppContainer, NavContainer, Nav } from './components/styles'
import SmurfForm from './components/SmurfForm';
import UpdateForm from './components/UpdateForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      clickedSmurf: {
        id: '',
        name: '',
        age: '',
        height: ''
      }
    };
  }

  selectedSmurf = clickedSmurfData => {
    const clickedSmurf = {
      id: clickedSmurfData.id,
      name: clickedSmurfData.name,
      age: clickedSmurfData.age,
      height: clickedSmurfData.height
    }
    this.setState({
      clickedSmurf: clickedSmurf
    })
  }

  addSmurf = smurf => {
    console.log(smurf)
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res)
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateSmurf = smurf => {

    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    })

  }

  deleteSmurf = smurf => {
    console.log(smurf)

    axios.delete(`http://localhost:3333/smurfs/${smurf}`)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    });

  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppContainer>
        <NavContainer>
          <Nav>
            <NavLink to='/'><h4>Home</h4></NavLink>
            <NavLink to='/form'><h4>Add Smurf</h4></NavLink>
          </Nav>
        </NavContainer>

        <Route
          exact
          path='/'
          render= {(props) => (
            <Smurfs {...props}
              smurfs={this.state.smurfs}
              smurf={this.state.clickedSmurf}
              selectedSmurf={this.selectedSmurf} />
          )}
        />

        <Route
          exact
          path='/smurf/:id'
          render= {(props) => (
            <Smurf {...props}
              smurf={this.state.clickedSmurf}
              selectedSmurf={this.selectedSmurf}
              deleteSmurf={this.deleteSmurf}/>
            )}
        />
          <Route
            exact
            path='/form'
            render= {(props) => (
              <SmurfForm {...props} addSmurf={this.addSmurf} />
            )}
          />

          <Route
            exact
            path='/update-form'
            render= {(props) => (
              <UpdateForm {...props} smurf={this.state.clickedSmurf} updateSmurf={this.updateSmurf} />
            )}
          />

      </AppContainer>
    );
  }
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
