import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

const baseUrl = 'https://rallycoding.herokuapp.com/api/music_albums';
const initialState = {
    list: []
};

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }
    componentWillMount() {
        axios(baseUrl).then(response => {
            this.setState({
                list: response.data
            });
        });
    }
    renderList() {
        return this.state.list.map(album => (
                  <AlbumDetail key={album.url} album={album} />
               )
        );
    }
    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}

export default AlbumList;

