import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// const baseURL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3"

class GifListContainer extends Component {

    state = {
        gifs: [],
    }


    render() {
        return(
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    getGifs = (userSearch = "cat") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url}) ) })
        })
    }

    componentDidMount() {
        this.getGifs()
    }

}

export default GifListContainer;