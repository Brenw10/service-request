import React, { Component } from 'react';
import RequestTable from '../components/RequestTable';
import Roadmap from '../components/Roadmap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from '../components/Menu';
import '../styles/ServiceRequest.css';

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
        <Menu />
        <Grid container>
          <Grid item sm={6}>
            <Paper elevation={0}>
              <RequestTable onChange={this.onAddressesChange.bind(this)} />
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <Paper className='absolute roadmap-paper' elevation={1}>
              <Roadmap locations={this.state.locations} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
