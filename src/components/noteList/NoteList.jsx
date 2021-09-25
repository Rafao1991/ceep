import React, { Component } from "react";
import Note from "../note/Note";
import "./NoteList.css";

class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.noteList.map((note, index) => {
          return (
            <li className="note-list_items" key={index}>
              <Note title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;