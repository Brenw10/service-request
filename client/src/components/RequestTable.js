import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import AddressField from '../components/AddressField';
import AddressTypeField from '../components/AddressTypeField';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { geocodeByAddress } from 'react-places-autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../styles/RequestTable.css';

export default class RequestTable extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  async setAddress(data, address) {
    const results = await geocodeByAddress(address);
    data.address = address;
    data.result = results[0];
    this.onChange();
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
    this.onChange();
  }
  isRowCompleted(row) {
    const hasAddress = row.address && row.result;
    return row && hasAddress;
  }
  onChange() {
    const locations = this.state.data.filter(this.isRowCompleted);
    this.props.onChange(locations);
  }
  renderTableBody() {
    return this.state.data.map((value, index) =>
      <TableRow key={index}>
        <TableCell>
          {index + 1}º
        </TableCell>
        <TableCell>
          <AddressField onChange={address => this.setAddress(value, address)} value={value.address} />
        </TableCell>
        <TableCell>
          <AddressTypeField />
        </TableCell>
        <TableCell>
          <Tooltip id="tooltip-bottom" title="Pagamento nessa etapa" placement="bottom">
            <Checkbox
              color="primary"
            />
          </Tooltip>
        </TableCell>
        <TableCell>
          <IconButton aria-label="delete" onClick={() => this.removeRow(index)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
  renderTableHeader() {
    return (
      <TableRow>
        <TableCell>Ordem</TableCell>
        <TableCell>Rua</TableCell>
        <TableCell>Tipo</TableCell>
        <TableCell>Pagamento</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    );
  }
  renderHeader() {
    return (
      <Toolbar className='toolbar'>
        <Typography variant="title">
          Solicitar Serviço
        </Typography>
        <Typography variant="subheading">
          Etapas
        </Typography>
      </Toolbar>
    );
  }
  renderTableFooter() {
    return (
      <TableRow>
        <TableCell colSpan={5}>
          <IconButton color="primary" aria-label="add" onClick={this.addRow.bind(this)}>
            <AddIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
  render() {
    return (
      <div className='request-table-container'>
        {this.renderHeader()}
        <Divider inset />
        <Table className='request-table'>
          <TableHead>
            {this.renderTableHeader()}
          </TableHead>
          <TableBody>
            {this.renderTableBody()}
          </TableBody>
          <TableFooter>
            {this.renderTableFooter()}
          </TableFooter>
        </Table>
      </div>
    );
  }
}
