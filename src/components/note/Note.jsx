import React, { Component } from "react";
import { ReactComponent as Delete } from "../../assets/img/delete.svg";
import "./Note.css";

class Note extends Component {
  _delete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    return (
      <section className="note">
        <header className="note_header">
          <h3 className="note_title">Title: {this.props.title}</h3>
          <h4 className="note_title">Category: {this.props.category}</h4>
          <Delete onClick={this._delete.bind(this)} />
        </header>
        <p className="note_text">Text: {this.props.text}</p>
      </section>
    );
  }
}

export default Note;
