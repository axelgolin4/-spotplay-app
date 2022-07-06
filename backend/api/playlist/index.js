import express from 'express'
import PlayList from '../../entity/PlayList.js'
import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'
import { DataJson } from '../../store/DataJson.js'
import PlayListController from './Controller.js'
import PlayListRouter from './Router.js'

export const PlayListModule = () => {
  const servicePlayList = new DataJson()
  const playListController = new PlayListController(servicePlayList, PlayList)
  const playListRouter = new PlayListRouter(express.Router, playListController, response, HttpCode)
  return playListRouter._router
}
