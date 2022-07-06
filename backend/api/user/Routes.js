export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._checkUser = createUserValidation
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/singup', this._checkUser, this.handleSingUp.bind(this))
  }

  handleSingUp (req, res) {
    const result = this._ctrl.createNewUser(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.succes(req, res, result, this._httpCode.OK)
  }
}
