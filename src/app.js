import express from 'express';
import v1Router from './router/v1.router.js';
import v2Router from './router/v2.router.js';
//Khởi tạo app Express
const app = express();
app.use(express.static("public"));



app.use((req, res, next)=>{
    console.log(">>> App-lrevel Middleware 01");
    next();
});


//Khai báo route

//Khai báo route cho path: /v1/posts = GET
app.use("/", v1Router);
//Cách 2: Khai báo route
// app.route("/v2/posts").get((req, res) => { 
//     res.end("Danh sách posts");
// }).post((req, res) => { 
//     res.end("Tao post");
// });
app.use("/",v2Router);

app.get("/test", (req,res, next)=>{
    console.log("Middleware 01");
    next();

},(req,res)=>{
    console.log("Handler");
    res.end("handler");
});

//Cách 3: Khai báo router
const v3router = express.Router();
v3router.get("/v3/posts", (req, res) => {
    res.end("Dánh sach posts");

});
//Khai báo route cho path: /v1/posts = POST
v3router.post("/v3/posts", (req, res) => {
    res.end("Tao posts");

});

app.use("/", v3router); // sinh ra path: /v3/posts

app.listen(3000, () => {
    console.log(">>>App is running port 3000");
});