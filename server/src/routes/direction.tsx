const Express = require('express')
import { getDirections } from "../controllers/directionController"


const directionRouter= Express.Router()
directionRouter.post('/directions',getDirections);




module.exports= directionRouter