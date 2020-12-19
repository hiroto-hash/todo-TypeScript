import { createSocket } from 'dgram';
import express from 'express'
import logger from 'morgan'
import { sql } from './sqlConnection';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

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

// Swagger
const options = {
  swaggerDefinition: {
    info: {
      title: "express app",
      version: "1.0.0"
    }
  },
  apis: ["./controller/*.ts"]
};
// swggerのリンク先
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

const router: express.Router = express.Router();
/**
 * @swagger
 * /api/get:
 *   get:
 *     tags:
 *       - item
 *     summary: 一覧取得
 *     description:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: タイトル
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: 自分のid
 *      - name: name
 *        description: 名前
 *        in: query
 */
router.get('/api/get', (req: express.Request, res: express.Response) => {
  res.send(req.query)
  sql.query('SELECT * FROM test_table', (err, results) => {
    if (err) {
      console.log('sql error');
    }
    console.log(results);
  })
})

/**
 * @swagger
 * /api/post:
 *   post:
 *     description: 新規登録
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: タイトル
 */
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