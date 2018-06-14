import React, { Component } from 'react';
import '../styles/ServiceRequest.css';
import RequestTable from '../components/RequestTable';
import Roadmap from '../components/Roadmap';

export default class ServiceRequest extends Component {
  constructor() {
    super();
    this.state = {
      addresses: [],
      locations: []
    };
  }
  onAddressesChange(addresses) {
    const locations = addresses.map(address => address.result.geometry.location);
    this.setState({ addresses, locations });
  }
  render() {
    return (
      <div>
        <RequestTable onChange={this.onAddressesChange.bind(this)} />
        <Roadmap locations={this.state.locations} />
      </div>
    );
  }
}
