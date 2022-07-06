class Artist {
  constructor (artist) {
    this._id = null
    this._name = artist.name
    this._lastName = artist.genre
    this._img = artist.img
  }

  setId (id) {
    this._id = id
  }
}

export default Artist
