import React, { Component } from 'react';
import Habit from './habit'

class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncreament(habit);
  }

  handleDecreament = (habit) => {
    this.props.onDecreament(habit);
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  }

  render() {
    return (
      <ul>
        {
          this.props.habits.map(habit => (
            <Habit 
              key={habit.id} 
              habit={habit} 
              onIncreament={this.handleIncreament}
              onDecreament={this.handleDecreament}
              onDelete={this.handleDelete}
            />
          ))
        }
      </ul>
    );
  }
}

export default Habits;