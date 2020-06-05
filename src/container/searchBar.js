import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    };

    inputFromUser = (e) => {
        this.setState({
            term: e.target.value
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };


    renderFormSearchBar () {
        return (
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input type='text' value={this.state.term} onChange={this.inputFromUser}/>
                </div>
            </form>
        );
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                {this.renderFormSearchBar()}
            </div>
        );
    };
};

export default SearchBar;