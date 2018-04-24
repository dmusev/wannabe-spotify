import { actionTypes } from '../actions/action-types';

export default function playlistReducer(state = [], { type, playlistName, playlistSongs }) {
  if (type === actionTypes.CREATE_PLAYLIST) {
    return [...state, { playlistName, playlistSongs }];
  }

  if (type === actionTypes.UPDATE_PLAYLIST) {
    const playlistToUpdate = state.find(p => p.playlistName === playlistName);
    playlistToUpdate.playlistSongs.push(playlistSongs);

    const restPlaylists = state.filter(p => p.playlistName !== playlistToUpdate.playlistName);
    return [...restPlaylists, playlistToUpdate];
  }
  return state;
}