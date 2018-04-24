/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistsView from '../playlist/PlaylistsView'

function Sidebar(props) {
  return (
    <aside className="site-sidebar">
      <nav className="side-nav">
        <ul>
          <li><Link to="/create-playlist">Create Playlist</Link></li>
        </ul>
      </nav>
      <hr />
      <section>
        <h4>Your Playlists:</h4>
        <PlaylistsView />
      </section>
      
    </aside>
  );
}

export default Sidebar;
