class PlayListController {
  constructor (servicesPlayList, playlist) {
    this._service = servicesPlayList
    this._entity = playlist
  }

  createNewPlayList (playlist) {
    const newPlayList = new this._entity(playlist)
    const response = this._service.save('playlist', newPlayList)
    return response
  }

  getAllPlayList () {
    const response = this._service.getAllTable('playlist')
    return response
  }

  updatePlayList (playlist) {
    const newPlayList = new this._entity(playlist)
    newPlayList.setId(playlist.id)
    const response = this._service.updateTable('playlist', newPlayList)
    return response
  }
}

export default PlayListController
