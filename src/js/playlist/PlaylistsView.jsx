/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PlaylistsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playlists } = this.props;
    let safeUrlName = '';
    const playlistsItems = playlists.map((playlist, idx) => {
        safeUrlName = playlist.playlistName.split(" ").join("-");
        return(
          <li key={idx}>
            <Link to={`/playlist-content/?playlistName=${safeUrlName}`}>{playlist.playlistName}</Link>
          </li>
        );
    });

    return (
      <div>
        <ul>{ playlistsItems }</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  };
}

export default connect(mapStateToProps, null)(PlaylistsView);