const express = require("express");
const r = express.Router();
const p = require("../pool");


// 增加文章
r.post('/addArticle', (req, res) => {
    console.log("测试接口调用...")
    let obj = req.body;
    console.log("请求的参数", obj)
    let {
        articleTitle,
        articleType,
        articleIntroduce,
        articleTypeCode,
        articleContent,
        createDate,
        articleAuthorId
    } = obj
    if (articleTypeCode == 1) {
        articleType = "技术类"
    } else if (articleTypeCode == 2) {
        articleType = "生活类"
    }
    let sql = "INSERT INTO blog_articles(articleTitle,articleIntroduce,articleType,articleTypeCode,articleContent,createDate,articleAuthorId) VALUES (?,?,?,?,?,?,?)";
    p.query(sql, [articleTitle, articleIntroduce, articleType, articleTypeCode, articleContent, createDate, articleAuthorId], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 1) {
            res.send({ code: 200, msg: "success" })
        } else {
            res.send({ code: 10000, msg: "error" })
        }
        console.log(result)
    })
}
)
//指定文章id调用
r.get('/getArticleDetails', (req, res) => {
    console.log("调用文章详情接口...")
    let { articleId } = req.query;
    let sql = "SELECT * FROM blog_articles WHERE articleId=?"
    p.query(sql, [articleId], (err, result) => {
        if (err) throw err;
        if (result.length >= 1) {
            res.send({
                code: 200,
                data: result[0]
            })
        }
    })
})

// 调用所有文章
r.get('/getArticleList', (req, res) => {
    console.log("调用文章列表接口...")
    let obj = req.query;
    let total;
    let getTotal = "SELECT COUNT(articleId) AS total FROM blog_articles";
    p.query(getTotal, [], (err, result) => {
        if (err) throw err;
        total = result[0].total
    })
    //获得计算分页所需数据
    let { pageNum, pageSize } = obj;
    start = (Number(pageNum) - 1) * pageSize;
    pageSize = Number(pageSize)
    let sql = 'SELECT * FROM blog_articles limit ?,?';
    p.query(sql, [start, pageSize], (err, result) => {
        if (err) throw err;
        res.send({
            code: 200,
            total: total,
            data: result
        })
    })
})


// 插入一条景点评论
r.post('/commentAdd', (req, res) => {
    let obj = req.body;
    let sql = "INSERT lv_comment(place_id,type_id,user,user_pic,level,content,date,star) VALUES(?,?,?,?,?,?,?,?)"
    // let sql="INSERT lv_comment(place_id,type_id,user,user_pic,level,content,date,star) VALUES(?)"
    p.query(sql, [obj.place_id, obj.type_id, obj.user, obj.user_pic, obj.level, obj.content, obj.date, obj.star], (err, result) => {
        console.log("result")
        res.send(result)
        if (err) throw err;
        if (result.affectedRows == 1) {
            // res.send({code:200,msg:"success"})
        } else {
            // res.send({code:10000,msg:"fail"})
        }
    })
})













module.exports = r;