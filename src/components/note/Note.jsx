import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  render() {
    return (
        <section className="note">
          <header className="note_header">
            <h3 className="note_title">{this.props.title}</h3>
          </header>
          <p className="note_text">{this.props.text}</p>
        </section>
    );
  }
}

export default Note;
