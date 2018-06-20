import React, { Component } from 'react';
import '../styles/ServiceRequest.css';
import RequestTable from '../components/RequestTable';
import Roadmap from '../components/Roadmap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
      <Grid className='full-height' container spacing={16}>
        <Grid item sm={6}>
          <RequestTable onChange={this.onAddressesChange.bind(this)} />
        </Grid>
        <Grid item sm={6}>
          <Paper className='full-height' elevation={4}>
            <Roadmap locations={this.state.locations} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
