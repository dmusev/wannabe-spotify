
/* eslint-disable */
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import { addSongToPlaylistActionCreator } from '../actions/action-creators';
import { connect } from 'react-redux';

class SearchEngineResults extends Component {
  constructor(props) {
    super(props);
    this.sortSongs = this.sortSongs.bind(this);
    this.playlistSelect = this.playlistSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);

    this.state = {
      selectedSong: {},
      visible: false,
      selectPlaylist: ''
    }
  }

  openModal(song) {
    this.setState({
      visible: true,
      selectedSong: song
    });
    }
 
  closeModal() {
    this.setState({
      visible: false
    });
  }

  sortSongs(result) {
    return result.map((song, idx) => {
      return(
        <li key={idx}>
          <img src={song.image}/>
          <div>
            <span className='info-span'> Author: {song.artist} </span>
            <span className='info-span'> Title: {song.title} </span>
          </div>
          <div className="main-buttons">
            <button className='btn btn-secondary'> Play </button>
            <button className='btn btn-primary' onClick={() => this.openModal(song)}> Add </button>
          </div>
        </li>
      );
    });
  }
  
  getPlaylistsElements(playlists) {
    return playlists.map((playlist, idx) => {
      return(
        <option key={ idx } value={ playlist.playlistName }>{ playlist.playlistName }</option>
      );
    });
  }
  

  playlistSelect(e) {
    this.setState({selectPlaylist: e.target.value});
  }
  
  addSongToPlaylist(e) {
    e.preventDefault()
    this.props.addSong(this.state.selectPlaylist, this.state.selectedSong);
    this.closeModal()
  }

  render() {
    let songsList = this.sortSongs(this.props.songResults);
    let playlists = this.getPlaylistsElements(this.props.playlists)

    return (
      <section className="search-results container">
        <div className="row justify-center">
          <div className="col-12">
            <ul>{ songsList }</ul>
          </div>
        </div>
        <Modal visible={this.state.visible} width="300" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <form className='search-modal-form' onSubmit={this.addSongToPlaylist}>
              <div className="form-group">
                <span> Playlist: </span>
                <select 
                  value={this.state.selectPlaylist} 
                  onChange={this.playlistSelect} 
                >
                  <option> Select Playlist </option>
                  { playlists }
                </select>
              </div>
              <button className="btn btn-primary">
                Add
              </button>
            </form>
        </Modal>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSong(playlistName, playlistSong) {
      const action = addSongToPlaylistActionCreator(playlistName, playlistSong);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEngineResults);
