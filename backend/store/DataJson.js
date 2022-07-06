import fs from 'fs'

export class DataJson {
  constructor () {
    this._dataPath = './store/db.json'
    this.setTables()
  }

  setTables () {
    const tables = {
      album: [],
      artist: [],
      genre: [],
      playlist: [],
      role: [],
      song: [],
      user: []
    }
    const items = this.readJsonFile()
    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf-8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  save (table, data) {
    const items = this.readJsonFile()
    data._id = this.generetePK(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'Create New Item'
  }

  getAllTable (table) {
    const items = this.readJsonFile()
    return items[table] || []
  }

  updateTable (table, data) {
    console.log('Datajson LOG')
    const items = this.readJsonFile()
    const elementIndex = items[table].findIndex(obj => obj._id === data._id)
    items[table][elementIndex] = data
    this.writeJsonFile(items)
    return 'Update Item'
  }

  deleteItemTable (table, atribute, id) {
    const items = this.readJsonFile()
    items[table] = items[table].filter((item) => item[atribute] !== id)
    this.writeJsonFile(items)
    return 'Item Deleted'
  }

  generetePK (table) {
    const lastItem = this.getAllTable(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
  }

  findByAtribute (table, atribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[atribute] === value)
    if (item) {
      return item
    }
    return null
  }
}
