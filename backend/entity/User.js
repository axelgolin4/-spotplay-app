export class User {
  constructor (user) {
    this._id = null
    this._username = user.username
    this._email = user.email
    this._password = user.password
  }

  encryptPassword (password, hashPassword) {
    this._password = hashPassword(password)
  }
}

// pediente de cambios
export class ReadUser extends User {
  constructor (readuser) {
    super(readuser)
    this._isEditor = readuser.isEditor
  }
}

export class EditorUser extends User {
  constructor (editorUser) {
    super(editorUser)
    this._isEditor = editorUser.isEditor
  }
}
