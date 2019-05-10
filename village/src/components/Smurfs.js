import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';
import { SmurfsContainer, SmurfContainer, SmurfCard } from './styles'

class Smurfs extends Component {

  clickHandler = smurf => {
    console.log(smurf)
    this.props.selectedSmurf(smurf);
  }

  render() {
    return (
      <SmurfsContainer>
        <h1>Smurf Village</h1>
        <SmurfContainer>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfCard key={smurf.id}>
                <Link to={`/smurf/${smurf.id}`}><h3 onClick={() => this.clickHandler(smurf)}>{smurf.name}</h3></Link>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
              </SmurfCard>
            );
          })}
        </SmurfContainer>
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
