import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DELIVERY_TYPE } from '../constants';

export default class AddressField extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: 'GET_PACKAGE'
    };
  }
  renderItems() {
    return DELIVERY_TYPE.map((type, index) => <MenuItem key={index} value={type.value}>{type.label}</MenuItem>);
  }
  render() {
    return (
      <Select
        className='full-width'
        onChange={event => this.setState({ selectedOption: event.target.value })}
        value={this.state.selectedOption} >
        {this.renderItems()}
      </Select>
    );
  }
}
