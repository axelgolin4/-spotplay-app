class GenreController {
  constructor (serviceGenre, genre) {
    this._service = serviceGenre
    this._entity = genre
  }

  getAllGenre () {
    const response = this._service.getAllTable('genre')
    return response
  }

  createNewGenre (genre) {
    const newGenre = new this._entity(genre)
    const response = this._service.save('genre', newGenre)
    return response
  }

  updateGenre (genre) {
    const updateGenre = new this._entity(genre)
    updateGenre.setId(genre.id)
    const response = this._service.updateTable('genre', updateGenre)
    return response
  }

  deleteGenre (genre) {
    const response = this._service.deleteItemTable('genre', '_id', genre.id)
    return response
  }
}

export default GenreController
