import dotenv from "dotenv";
import methodOverride from "method-override";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from 'express-session';
import fs from "fs";
import globalRouter from "./routers/globalRouter";
import routes from "./routers";

const app = express();

app.use(helmet()); // security부분
dotenv.config();
app.use(methodOverride()); // PUT, DELETE를 지원 안 하는 클라이언트를 위해
app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음
app.use(bodyParser.urlencoded({ extended: true })); // qs모듈로 쿼리스트링 파싱
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser()); // cookie 정보
app.use(bodyParser.json()); // body 값
app.use(bodyParser.urlencoded({ extended: true })); // body 값
app.use(morgan("dev")); // log부분

app.use(routes.home, globalRouter);

export default app;