import expres from 'express'
import GenreRouter from './Router.js'
import GenreController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Genre from '../../entity/Genre.js'

export const GenreModule = () => {
  const serviceGenre = new DataJson()
  const genreController = new GenreController(serviceGenre, Genre)
  const genreRouter = new GenreRouter(expres.Router, genreController, response, HttpCode)
  return genreRouter._router
}
