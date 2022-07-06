export default class PlayList {
  constructor (playlist) {
    this._id = null
    this._name = playlist.name
    this._cover = playlist.cover
  }

  setId (id) {
    this._id = id
  }
}
