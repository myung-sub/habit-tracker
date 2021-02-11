import React, { PureComponent } from 'react';

class HabitAddform extends PureComponent {
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = ''
  }

  render() {
    console.log('HabitAddform');
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef} 
          type="text" 
          className="add-input" 
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddform;