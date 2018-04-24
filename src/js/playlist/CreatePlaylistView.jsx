import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylistActionCreator } from '../actions/action-creators';

class CreatePlaylistView extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);

    this.state = {
      name: ""
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  addPlaylist(e) {
    e.preventDefault();
    const { name } = this.state;

    this.props.savePlaylist(name);
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <section className="create-playlist-view container">
        <div className="row justify-center">
          <div className="col-12">
            <form onSubmit={this.addPlaylist}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    savePlaylist(playlistName) {
      const action = createPlaylistActionCreator(playlistName, []);
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(CreatePlaylistView);