import React, { Component } from "react";
import "./CreateNote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "";
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.props.categories.subscribe(this._onCategoriesChange.bind(this));
  }

  _onCategoriesChange(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="create-note" onSubmit={this._createNote.bind(this)}>
        <select
          className="create-note_input"
          onChange={this._handleCategory.bind(this)}
        >
          <option>none</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
        <input
          className="create-note_input"
          type="text"
          placeholder="Title"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          className="create-note_input"
          rows={15}
          placeholder="Write a note here"
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
