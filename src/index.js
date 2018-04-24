/* eslint-disable */
import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import SearchEngineForm from './js/searchEngine/SearchEngineForm';
import CreatePlaylistView from './js/playlist/CreatePlaylistView';
import playlistReducer from './js/reducers/playlist-reducer';
import PlaylistContent from './js/playlist/PlaylistContent';

const AppState = {
  /* Reducers and state go here */
  playlists: playlistReducer
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState),applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <div className="row no-gutters main-content-wrapper">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9">
                {/* Routes go here */}
                <Route path="/search-engine" component={SearchEngineForm} exact />
                <Route path="/create-playlist" component={CreatePlaylistView} exact />
                <Route path="/playlist-content" component={PlaylistContent} exact />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
