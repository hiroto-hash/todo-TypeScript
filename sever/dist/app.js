"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
// CORSの許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// body-parserに基づいた着信リクエストの解析
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// GetとPostのルーティング
const router = express_1.default.Router();
router.get('/api/get', (req, res) => {
    res.send(req.query);
});
router.post('/api/post', (req, res) => {
    res.send(req.body);
});
app.use(router);
module.exports = app;
