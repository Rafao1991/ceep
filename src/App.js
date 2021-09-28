import NoteList from './components/noteList';
import CreateNote from './components/createNote';
import CategoryList from './components/categoryList';
import React, { Component } from 'react';
import './assets/index.css';
import './assets/App.css';
import Notes from './data/Notes';
import Categories from './data/Categories';

class App extends Component {

  constructor() {
    super();
    this.notes = new Notes();
    this.categories = new Categories();
  }

  render() {
    return (
      <section className="content">
        <CreateNote
          categories={this.categories}
          notes={this.notes}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className="content-main">
          <CategoryList categoryList={this.categories} />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
