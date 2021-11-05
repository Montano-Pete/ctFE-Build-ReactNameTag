import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
  state = {
    greetingText: '',
    nameText: '',
  };

  greetingChangeHandler = (event) => {
    this.setState({ greetingText: event.target.value });
  };

  nameChangeHandler = (event) => {
    this.setState({ nameText: event.target.value });
  };

  render() {
    const { greetingText, nameText } = this.state;
    return (
      <>
        <Controls
          greetingChange={this.greetingChangeHandler}
          nameChange={this.nameChangeHandler}
        />
        <Display name={nameText} greeting={greetingText} />
      </>
    );
  }
}
