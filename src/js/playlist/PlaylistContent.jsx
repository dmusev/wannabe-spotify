/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

class PlaylistsContent extends Component {
  constructor(props) {
    super(props);
    this.getSongsForPlaylist = this.getSongsForPlaylist.bind(this);

    this.state = {
      playlistContentToDisplay: [],
      playlistName: ''
    }
  }

  componentDidMount() {
    const params = queryString.parse(window.location.search);

    if (params.playlistName) {
      this.setState({playlistName: params.playlistName})
      this.getSongsForPlaylist(params.playlistName);
    } else {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps){
    const params = queryString.parse(nextProps.location.search);
    if (params.playlistName) {
      this.setState({playlistName: params.playlistName})
      this.getSongsForPlaylist(params.playlistName);
    } else {
      this.props.history.push("/");
    }
  }

  getSongsForPlaylist(playlistName) {
    let playlistObject = []
    playlistObject = this.props.playlists.filter(playlist => playlist.playlistName == playlistName)
    this.setState({
      playlistContentToDisplay: playlistObject.length > 0 ? playlistObject[0].playlistSongs : []
    })
  }

  sortSongs(results) {
    return results.map((song, idx) => {
      return(
        <li key={idx}>
          <img src={song.image}/>
          <div>
            <span className='info-span'> Author: {song.artist} </span>
            <span className='info-span'> Title: {song.title} </span>
          </div>
          <div className="main-buttons">
            <button className='btn btn-secondary'> Play </button>
          </div>
        </li>
      );
    });
  }

  render() {
    const { playlistContentToDisplay } = this.state
    let songsList = this.sortSongs(playlistContentToDisplay);

    return (
      <div>
        <section className="search-results container">
          <div className="row justify-center">
            <div className="col-12">
              <ul>{ songsList }</ul>
            </div>
          </div>
        </section>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  };
}

export default connect(mapStateToProps, null)(PlaylistsContent);