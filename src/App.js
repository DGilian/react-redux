import React, { Component } from 'react';
import { connect } from 'react-redux';
import {printHelloWorld} from './actions/printHelloAction'
import './App.css';

class App extends Component {
  printHelloWorld = () => {
    console.log('methode class call')
    this.props.hello();
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div className="App">
        <button onClick={this.printHelloWorld}> click </button>
        {this.props.message}
      </div>
    );
  }
}

const mapActionsToProps = {
  hello: printHelloWorld
}

const mapStateToProps=(state) => {
  console.log(`mapStateToProps => ${JSON.stringify(state.data)}`)
  return {message:state.data.message}
}

export default connect(mapStateToProps, mapActionsToProps)(App);
