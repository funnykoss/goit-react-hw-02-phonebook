import React, { Component } from 'react';
import PhoneBook from './Components/PhoneBook/PhoneBook.jsx';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <PhoneBook />
      </>
    );
  }
}
