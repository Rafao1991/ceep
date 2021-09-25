import './assets/index.css';
import './assets/App.css';
import NoteList from './components/noteList/NoteList';
import CreateNote from './components/createNote/CreateNote';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newState = {
      notes: [...this.state.notes, { title, text }]
    }
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <CreateNote createNote={this.createNote.bind(this)} />
        <NoteList noteList={this.state.notes} />
      </section>
    );
  }
}

export default App;
