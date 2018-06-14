import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class AddressField extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { value: 'GET_PACKAGE', label: 'Pegar pacote' },
        { value: 'LEAVE_PACKAGE', label: 'Deixar pacote' },
      ],
      selectedOption: { value: 'GET_PACKAGE', label: 'Pegar pacote' }
    };
  }
  render() {
    return <Select
      value={this.state.selectedOption}
      onChange={selectedOption => this.setState({ selectedOption })}
      options={this.state.options}
    />;
  }
}
