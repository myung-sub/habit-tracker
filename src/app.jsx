import React, { Component } from 'react'
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding2', count: 0},
    ]
  }

  handleIncreament = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...item, count: item.count + 1};
      }
      return item;
    })
    this.setState({habits});
  }

  handleDecreament = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return {...item, count: count < 0 ? 0 : count};
      }
      return item;
    })
    this.setState({habits});
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }

  handleAdd = (name) => {
    console.log(`handleAdd : ${name}`);
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count > 0) {
        return {...item, count: 0};
      }
      return item;
    })
    this.setState({habits});
  }

  render() {
    console.log('App');
    return (
      <>
        <Navbar totalCount={this.state.habits.reduce((prev, item) => prev + item.count, 0)}/>
        <Habits 
          habits={this.state.habits}
          onIncreament={this.handleIncreament}
          onDecreament={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;