import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import AddressField from '../components/AddressField';
import AddressTypeField from '../components/AddressTypeField';
import { AwesomeButton } from 'react-awesome-button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { geocodeByAddress } from 'react-places-autocomplete';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-one.css';
import '../styles/RequestTable.css';

export default class RequestTable extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  async setAddress(data, address){
    const results = await geocodeByAddress(address);
    data.address = address;
    data.result = results[0];
    this.props.onChange(this.state.data);
  }
  addRow() {
    const { data } = this.state;
    data.push({});
    this.setState({ data });
  }
  removeRow(index) {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({ data });
    this.props.onChange(this.state.data);
  }
  render() {
    return (
      <Table className='request-table'>
        <TableHead>
          <TableRow>
            <TableCell>Ordem</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>O que fazer?</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.state.data.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    {index + 1}º
                  </TableCell>
                  <TableCell>
                    <AddressField onChange={address => this.setAddress(value, address)} />
                  </TableCell>
                  <TableCell>
                    <AddressTypeField />
                  </TableCell>
                  <TableCell>
                    <AwesomeButton size="icon" type="secondary" action={() => this.removeRow(index)}>
                      <DeleteIcon />
                    </AwesomeButton>
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <AwesomeButton size="small" type="primary" action={this.addRow.bind(this)}>
                <AddIcon />
              </AwesomeButton>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}
