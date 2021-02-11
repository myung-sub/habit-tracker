import React, { Component } from 'react';
import Habit from './habit'
import HabitAddform from './habitAddform'


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

  handleAdd = name => {
    this.props.onAdd(name);
  }

  handleReset = () => {
    this.props.onReset();
  }

  render() {
    console.log('Habits');
    return (
      <>
        <HabitAddform onAdd={this.handleAdd}/>
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
      <button className="habit-reset" onClick={this.handleReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;