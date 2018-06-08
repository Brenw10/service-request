import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default class AddressField extends Component {
    constructor() {
        super();
        this.state = {
            address: null
        };
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
                onSelect={address => this.setState({ address })}
            >
            </PlacesAutocomplete>
        );
    }
}
