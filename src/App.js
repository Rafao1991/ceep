import NoteList from './components/noteList';
import CreateNote from './components/createNote';
import CategoryList from './components/categoryList';
import React, { Component } from 'react';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
    };
  }

  createNote(title, text, category) {
    this.setState({
      notes: [...this.state.notes, { title, text, category }]
    });
  }

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({
      notes: notes
    });
  }

  addCategory(category) {
    this.setState({
      categories: [...this.state.categories, category]
    });
  }

  render() {
    return (
      <section className="content">
        <CreateNote
          categoryList={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className="content-main">
          <CategoryList
            categoryList={this.state.categories}
            addCategory={this.addCategory.bind(this)}
          />
          <NoteList
            noteList={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
