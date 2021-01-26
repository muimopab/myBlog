const express = require("express");
const r = express.Router();
const p = require("../pool");


// 增加文章
r.post('/addArticle', (req, res) => {
	console.log("测试接口调用...")
	let obj = req.body;
	console.log("请求的参数", obj)
	let sql = "INSERT INTO blog_articles(articlesTitle,articlesType,articlesTypeCode,articlesContent,createDate,articlesAuthorId) VALUES (?,?,?,?,?,?)";
	if (obj.articlesTypeCode == 1) {
		obj.articlesType = "技术类"
	}
	p.query(sql, [obj.articlesTitle, obj.articlesType, obj.articlesTypeCode, obj.articlesContent, obj.createDate, obj.articlesAuthorId], (err, result) => {
		if (err) throw err;
		if(result.affectedRows===1){
			res.send({code:200,msg:"success"})
		}else{
			res.send({code:10000,msg:"error"})
		}
		console.log(result)
	})
})

// 调用所有文章
r.get('/getArticleList',(req,res)=>{
	console.log("调用文章列表接口...")
	let obj=req.query;
	let {pageNum,pageSize}=obj;
	pageNum=Number(pageNum);
	pageSize=Number(pageSize)
	let sql='SELECT * FROM blog_articles limit ?,?';
	p.query(sql,[pageNum,pageSize],(err,result)=>{
		if(err) throw err;
		res.send({
			code:200,
			data:result
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