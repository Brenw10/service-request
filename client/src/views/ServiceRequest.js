import React, { Component } from 'react';
import Table from 'rc-table';
import AddressField from '../components/AddressField';
import AddressTypeField from '../components/AddressTypeField';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/fontawesome-free-solid'
import { AwesomeButton } from 'react-awesome-button';
import GoogleMaps from '../components/GoogleMaps';
import 'react-awesome-button/dist/styles.css';
import 'rc-table/assets/index.css';
import '../styles/ServiceRequest.css';
import 'react-awesome-button/dist/themes/theme-one.css';

export default class ServiceRequest extends Component {
    constructor() {
        super();
        this.state = {
            headers: [
                { title: 'Ordem', render: this.renderOrder, width: '5%' },
                { title: 'Rua', dataIndex: 'street', key: 'street', render: this.renderStreet, width: '45%' },
                { title: 'O que fazer?', dataIndex: 'type', key: 'type', render: this.renderType, width: '40%' },
                { title: 'Ações', render: this.renderActions.bind(this), width: '10%', className: 'actions' }
            ],
            data: []
        };
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
    }
    renderStreet() {
        return <AddressField />;
    }
    renderType() {
        return <AddressTypeField />;
    }
    renderOrder(value, object, index) {
        return <div>{++index}º</div>;
    }
    renderActions(value, object, index) {
        return (
            <AwesomeButton size="icon" type="secondary" action={() => this.removeRow(index)}>
                <FontAwesomeIcon icon={faTrash} />
            </AwesomeButton>
        );
    }
    renderTableFooter() {
        return (
            <AwesomeButton size="small" type="primary" action={this.addRow.bind(this)}>
                <FontAwesomeIcon icon={faPlus} />
            </AwesomeButton>
        );
    }
    render() {
        return (
            <div>
                <Table columns={this.state.headers}
                    data={this.state.data} footer={this.renderTableFooter.bind(this)} />
                <GoogleMaps />
            </div>
        );
    }
}
