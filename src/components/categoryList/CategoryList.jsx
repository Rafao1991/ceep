import React, { Component } from "react";
import "./CategoryList.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };

    this._onCategoriesChange = this._onCategoriesChange.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._onCategoriesChange);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._onCategoriesChange);
  }

  _onCategoriesChange(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInput(event) {
    event.stopPropagation();
    if (event.key === "Enter") {
      const value = event.target.value.toLowerCase();
      if (!this.state.categories.includes(value)) {
        this.props.categories.addCategory(value);
      }
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className="category-list_item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="category-list_input"
          placeholder="Add a category"
          onKeyUp={this._handleInput.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
