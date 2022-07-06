class GenreRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostGenre.bind(this))
    this._router.get('/', this.handleGetAllGenre.bind(this))
    this._router.put('/', this.handleUpdateGenre.bind(this))
    this._router.delete('/', this.handleDeleteGenre.bind(this))
  }

  handlePostGenre (req, res) {
    const genre = req.body
    console.log(genre)
    const result = this._ctrl.createNewGenre(genre)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetAllGenre (req, res) {
    const result = this._ctrl.getAllGenre()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleUpdateGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.updateGenre(genre)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeleteGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.deleteGenre(genre)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default GenreRouter
