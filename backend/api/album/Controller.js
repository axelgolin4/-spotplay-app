class AlbumController {
  constructor (serviceAlbum, album) {
    this._service = serviceAlbum
    this._entity = album
  }

  async getAllAlbum () {
    const response = this._service.getAllTable('album')
    return response
  }

  async createNewAlbum (album) {
    const newAlbum = new this._entity(album)
    const response = this._service.save('album', newAlbum)
    return response
  }

  async updateAlbum (album) {
    const updateAlbum = new this._entity(album)
    updateAlbum.setId(album.id)
    const response = this._service.updateTable('album', updateAlbum)
    return response
  }

  async deleteAlbum (album) {
    const response = this._service.deleteItemTable('album', '_id', album.id)
    return response
  }
}

export default AlbumController
