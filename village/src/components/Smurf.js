import React from 'react';
import { Link } from 'react-router-dom';

import { SmurfCard, Button, ButtonContainer } from './styles';

const Smurf = props => {

  const goBack = () => {
    props.history.goBack()
  }

  const clickHandler = event => {
    event.preventDefault();
    props.deleteSmurf(props.smurf.id);
  }
  return (
    <SmurfCard>
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
      <ButtonContainer>
        <Button onClick={clickHandler}>Delete</Button>
        <Link to='/update-form'><Button>Update</Button></Link>
      </ButtonContainer>
      <h4 onClick={goBack}>Go Back</h4>
    </SmurfCard>
  );
};

export default Smurf;
