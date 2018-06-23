import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import '../styles/AddressField.css';

export default class AddressField extends Component {
  constructor() {
    super();
    this.state = {
      address: ''
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ address: props.value });
  }
  onChangeAddress(address) {
    this.props.onChange(address);
  }
  renderAddressInput({ getInputProps, suggestions, getSuggestionItemProps }) {
    return (
      <div>
        <input
          {...getInputProps({
            placeholder: 'Procurar lugares...',
            className: 'location-search-input'
          })}
        />
        <div className="autocomplete-dropdown-container">
          {suggestions.map(suggestion => {
            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div {...getSuggestionItemProps(suggestion, { className, style })}>
                <span>{suggestion.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        children={this.renderAddressInput.bind(this)}
        onChange={address => this.setState({ address })}
        onSelect={this.onChangeAddress.bind(this)}
      >
      </PlacesAutocomplete>
    );
  }
}