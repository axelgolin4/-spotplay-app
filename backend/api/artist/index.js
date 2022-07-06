import expres from 'express'
import ArtistRouter from './Router.js'
import ArtistController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Artist from '../../entity/Artist.js'

export const ArtistModule = () => {
  const serviceArtist = new DataJson()
  const artistController = new ArtistController(serviceArtist, Artist)
  const artistRouter = new ArtistRouter(expres.Router, artistController, response, HttpCode)
  return artistRouter._router
}
