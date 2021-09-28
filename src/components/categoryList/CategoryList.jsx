import React, { Component } from "react";
import "./CategoryList.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.props.categoryList.subscribe(this._onCategoriesChange.bind(this));
  }

  _onCategoriesChange(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInput(event) {
    event.stopPropagation();
    if (event.key === "Enter") {
      const value = event.target.value.toLowerCase();
      if (!this.props.categoryList.getCategories().includes(value)) {
        this.props.categoryList.addCategory(value);
      }
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.props.categoryList.getCategories().map((category, index) => {
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
