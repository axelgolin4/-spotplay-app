class Genre {
  constructor (genre) {
    this._id = null
    this._name = genre.name
  }

  setId (id) {
    this._id = id
  }
}

export default Genre
