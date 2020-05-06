import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort"
class SearchSortControl extends Component {
  render() {
    return (
      <div>
        <Search onSearch ={this.props.onSearch}/>
        <Sort  onSort ={this.props.onSort}/>
      </div>
    );
  }
}
export default SearchSortControl;
