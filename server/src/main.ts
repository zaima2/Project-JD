import Express from "express";
import server from "../configure/server";
import {json} from "body-parser";
import "./mysql/init"

//import routers

import Register from "./routes/signup";

//import routers

const app = Express();
app.use(json());
app.use("/api/signup",Register);
app.listen(server.port,()=>{
    console.log(`${server.port} is listening`);
})