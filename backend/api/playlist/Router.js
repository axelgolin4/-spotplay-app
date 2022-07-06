class PlayListRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router()
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostPlayList.bind(this))
    this._router.get('/', this.handleGetLists.bind(this))
    this._router.put('/', this.handleUpdatePlayList.bind(this))
    // this._router.delete('/', this.handleDeleteSong.bind(this))
  }

  handlePostPlayList (req, res) {
    const playlist = req.body
    console.log(playlist)
    const result = this._ctrl.createNewPlayList(playlist)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetLists (req, res) {
    const result = this._ctrl.getAllPlayList()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleUpdatePlayList (req, res) {
    const playlist = req.body
    const result = this._ctrl.updatePlayList(playlist)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default PlayListRouter
