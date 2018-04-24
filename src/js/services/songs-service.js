/* eslint-disable */
import songs from '../data/songs'

// This is fakery of a service just to imitate search form
// Should implement a fetch request here..
export function getSongsByName(songName) {
  return songs.filter(song => ((song.title.toLowerCase()).includes(songName.toLowerCase())))
}
