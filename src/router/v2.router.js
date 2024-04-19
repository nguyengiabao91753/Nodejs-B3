import express from 'express';

const router = express.Router();
router.get("/v2/posts", (req, res) => {
    res.end("Dánh sach posts");

});
//Khai báo route cho path: /v2/posts = POST
router.post("/v2/posts", (req, res) => {
    res.end("Tao posts");

});
//Khai báo route cho path: /v2/posts/:id = GET
router.get("/v2/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Lay posts" + id);

});

//Khai báo route cho path: /v2/posts/:id = PUT
router.get("/v2/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Cap nhat posts" + id);

});


//Khai báo route cho path: /v2/posts/:id = DELETE
router.delete("/v2/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Xoa posts " + id);

});

export default router;