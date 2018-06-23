import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <AppBar position="static" className='menu'>
        <Toolbar>
          <Typography variant="title" color="inherit" className='flex-1'>
            Central Courier
          </Typography>
          <Link to='/admin'>
            <Button color="inherit">Administração</Button>
          </Link>
          <Link to='/service-request'>
            <Button color="inherit">Fazer Pedido</Button>
          </Link>
          <Link to='/tracking'>
            <Button color="inherit">Rastreamento dos Pedidos</Button>
          </Link>
          <Link to='/'>
            <Button color="inherit">Sair</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}