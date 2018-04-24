/* eslint-disable */
import { actionTypes } from './action-types';

export const createPlaylistActionCreator = (playlistName, playlistSongs) => ({
  type: actionTypes.CREATE_PLAYLIST,
  playlistName: playlistName,
  playlistSongs: playlistSongs
});

export const addSongToPlaylistActionCreator = (playlistName, songToAdd) => ({
  type: actionTypes.UPDATE_PLAYLIST,
  playlistName: playlistName,
  playlistSongs: songToAdd
})