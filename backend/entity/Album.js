export default class Album {
  constructor (album) {
    this._id = null
    this._name = album.username
    this._date = album.date
    this._cover = album.cover
  }

  setId (id) {
    this._id = id
  }
}
