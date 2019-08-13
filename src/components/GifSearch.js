import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        userSearch:'',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.userSearch)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label>
                <input type="text" value={this.state.userSearch} onChange={event => this.setState({userSearch: event.target.value})}/>
                <button type="submit" >Find Gifs</button>  
            </form>
        );
    }
}

export default GifSearch;