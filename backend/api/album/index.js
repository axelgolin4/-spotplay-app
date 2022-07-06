import expres from 'express'
import AlbumRouter from './Router.js'
import AlbumController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Album from '../../entity/Album.js'

export const AlbumModule = () => {
  const serviceAlbum = new DataJson()
  const albumController = new AlbumController(serviceAlbum, Album)
  const albumRouter = new AlbumRouter(expres.Router, albumController, response, HttpCode)
  return albumRouter._router
}
