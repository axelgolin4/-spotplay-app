class SongRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.get('/', this.handleGetSong.bind(this))
    this._router.get('/one', this.handleGetOneSong.bind(this))
    this._router.put('/', this.handleUpdateSong.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
  }

  handlePostSong (req, res) {
    const song = req.body
    const result = this._ctrl.createNewSong(song)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetSong (req, res) {
    const result = this._ctrl.getAllSong()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleGetOneSong (req, res) {
    const song = req.body
    const result = this._ctrl.getOneSong(song)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleUpdateSong (req, res) {
    const song = req.body
    const result = this._ctrl.updateSong(song)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeleteSong (req, res) {
    const song = req.body
    const result = this._ctrl.deleteSong(song)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default SongRouter
