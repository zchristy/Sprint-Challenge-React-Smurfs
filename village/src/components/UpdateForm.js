import React, { Component } from 'react';

import { Form, Button, UpdateFormContainer } from './styles';


class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurf: []
    }
  }

  changeHandler = event => {
    let value = event.target.value;
    const name = event.target.name;

    if(name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [name]: value
      }
    }));
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state.smurf)
  }

  goBack = () => {
    this.props.history.goBack()
  }

  componentDidMount() {
    this.setState({
      smurf: this.props.smurf
    })
  }
  render() {
    return (
      <UpdateFormContainer>
        <h2> Update Your Friend </h2>
        <Form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            name='name'
            value={this.state.smurf.name}
            placeholder="name"
          />
          <input
            onChange={this.changeHandler}
            name='age'
            value={this.state.smurf.age}
            placeholder="age"
          />
          <input
            onChange={this.changeHandler}
            name='email'
            value={this.state.smurf.height}
            placeholder="email"
          />
          <Button>Submit</Button>
          <h4 onClick={this.goBack}>Go Back</h4>
        </Form>
      </UpdateFormContainer>
    );
  }

}

export default UpdateForm;
