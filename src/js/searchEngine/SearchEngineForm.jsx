import React, { Component } from 'react';
import { getSongsByName } from '../services/songs-service';
import SearchEngineResults from './SearchEngineResults';

class SearchEngineForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.displayResults = this.displayResults.bind(this);

    this.state = {
      song: "",
      songs: []
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  displayResults(e) {
    e.preventDefault();
    const { song } = this.state;
    const availableSongs = getSongsByName(song);

    this.setState({ songs: availableSongs });
  }

  render() {
    const { song } = this.state;

    return (
      <section className="search-view container">
        <div className="row justify-center">
          <div className="col-12">
            <form onSubmit={this.displayResults}>
              <div className="form-group">
                <span> Search by name: </span>
                <input
                  type="text"
                  id="song"
                  value={song}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <SearchEngineResults songResults={this.state.songs} />
        </div>
      </section>
    );
  }
}

export default SearchEngineForm;