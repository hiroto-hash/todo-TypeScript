import { createSocket } from 'dgram';
import express from 'express'
import logger from 'morgan'
import { sql } from './sqlConnection';

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
  sql.query('SELECT * FROM test_table', (err, results) => {
    if (err) {
      console.log('sql error');
    }
    console.log(results);
  })
})
router.post('/api/post', (req: express.Request, res: express.Response) => {
  res.send(req.body)
  sql.query('INSERT INTO test_table SET ?', req.body, (err, results) => {
    if (err) {
      console.log('sql error');
    }
    console.log(results);
  })
})
app.use(router)

module.exports = app;