import express from 'express'
import logger from 'morgan'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
router.get('/api/get', (req: express.Request, res: express.Response) => {
  res.send(req.query)
})
router.post('/api/post', (req: express.Request, res: express.Response) => {
  res.send(req.body)
})
app.use(router)

module.exports = app;