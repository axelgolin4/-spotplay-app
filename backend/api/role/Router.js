class AlbumRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostAlbum.bind(this))
    this._router.get('/', this.handleGetAllAlbum.bind(this))
    this._router.put('/', this.handleUpdateAlbum.bind(this))
    this._router.delete('/', this.handleDeleteAlbum.bind(this))
  }

  handlePostAlbum (req, res) {
    const album = req.body
    console.log(album)
    const result = this._ctrl.createNewAlbum(album)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetAllAlbum (req, res) {
    const result = this._ctrl.getAllAlbum()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleUpdateAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.updateAlbum(album)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeleteAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.deleteAlbum(album)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default AlbumRouter
