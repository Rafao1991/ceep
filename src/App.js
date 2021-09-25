import NoteList from './components/noteList/NoteList';
import CreateNote from './components/createNote/CreateNote';
import React, { Component } from 'react';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    this.setState({
      notes: [...this.state.notes, { title, text }]
    });
  }

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({
      notes: notes
    });
  }

  render() {
    return (
      <section className="content">
        <CreateNote createNote={this.createNote.bind(this)} />
        <NoteList noteList={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
      </section>
    );
  }
}

export default App;
