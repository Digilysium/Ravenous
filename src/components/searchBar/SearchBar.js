import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ""
			, location: ""
			, sortBy: sortByOptions.best_match
		};
		this.handleTermChange = this.handleTermChange.bind(this);
    	this.handleLocationChange = this.handleLocationChange.bind(this);
    	this.handleSearch = this.handleSearch.bind(this);
	}

	getSortByClass = (sortByOption) => {
		return this.state.sortBy === sortByOption ? 'active' : "";
	}

	handleSortByChange = (sortByOption) => {
		this.setState({
			sortBy: sortByOption
		})
	}

	handleTermChange = (event) => {
		this.setState({
			term: event.target.value
		})
	}

	handleLocationChange = (event) => {
		this.setState({
			location: event.target.value
		})
	}

	handleSearch = (event) => {
		this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
		event.preventDefault();
	}

	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return (
				<li 
					className={this.getSortByClass(sortByOptionValue)}
					onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
					key='sortByOptionValue'
				>
					{sortByOption}
				</li>
				);
		});
	}

	render() {
		return (
			<div class="SearchBar">
 				<div class="SearchBar-sort-options">
    				<ul>
    					{this.renderSortByOptions()}
    				</ul>
				</div>
				<div class="SearchBar-fields">
				    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
    				<input onChange={this.handleLocationChange} placeholder="Where?" />
				</div>
				<div class="SearchBar-submit">
				    <a onClick={this.handleSearch} >Let's Go</a>
				</div>
			</div>
		)
	}
}

export default SearchBar;