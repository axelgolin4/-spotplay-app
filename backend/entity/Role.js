export default class Role {
  constructor (role) {
    this._id = null
    this._name = role.name
    this._description = role.description
    this._editor = role.editor
  }

  setId (id) {
    this._id = id
  }
}
