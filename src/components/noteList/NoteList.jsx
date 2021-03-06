import React, { Component } from "react";
import Note from "../note";
import "./NoteList.css";

class NoteList extends Component {
  constructor() {
    super();
    this.state = { notes: [] };

    this._onNotesChange = this._onNotesChange.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._onNotesChange);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._onNotesChange);
  }

  _onNotesChange(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
          return (
            <li className="note-list_items" key={index}>
              <Note
                index={index}
                title={note.title}
                text={note.text}
                category={note.category}
                deleteNote={this.props.deleteNote}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
