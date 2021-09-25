import React, { Component } from "react";
import "./CreateNote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="create-note" onSubmit={this._createNote.bind(this)}>
        <input
          className="create-note_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          className="create-note_input"
          rows={15}
          placeholder="Escreva sua nota"
          onChange={this._handleText.bind(this)}
        />
        <button className="create-note_input create-note_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default CreateNote;
