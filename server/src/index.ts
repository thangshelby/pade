import express, { Express} from "express";
import route from "./routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const morgan = require("morgan");

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());


app.use(morgan("combined"));
route(app);


app.get;  

app.listen(port, () => {
});
