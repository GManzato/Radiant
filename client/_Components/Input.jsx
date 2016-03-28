import React from 'react';

import {HOC} from 'formsy-react';

class CstmInput extends React.Component {
  changeValue(event) {
      this.props.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  }
  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'form-group' + (this.props.className || ' ') +
      (this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : '');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.props.getErrorMessage();


    return (
      <div className="{className}">
          <label htmlFor="{this.props.name}">{this.props.title}</label>
          <input 
            type={this.props.type || 'text'} 
            className="form-control"
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.changeValue.bind(this)}
            value={this.props.getValue()}
            checked={this.props.type === 'checkbox' && this.props.getValue() ? 'checked' : null}
          />
          <span className='validation-error'>{errorMessage}</span>
      </div>
    )
  }
} 

export default HOC(CstmInput);