import React from 'react'
import './Header.css';
import Autosuggest from 'react-autosuggest'
import {Countries} from './Countries'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Countries.filter(c =>
    c.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

    // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // when a suggestion is selected, send the suggestion to App.js
  onSuggestionSelected = (event, { suggestion })=> {
    this.props.handlerFromParent(suggestion)
  }

  render(){
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'start typing a country name',
      value,
      onChange: this.onChange
    };    


    return (
      <section className="header">
        <h1>CRUISIN<i className="fas fa-plane-departure"></i>
        </h1>
        <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        />
      </section>
    )
  }

}


export default Header