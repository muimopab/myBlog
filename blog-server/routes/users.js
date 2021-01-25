const express=require("express");
const r=express.Router();
const p=require("../pool");

r.post('/login',(req,res)=>{
	console.log('调用了登录接口');
	let obj=req.body;
	console.log(obj);
	let sql='select * from lv_user where uname=? and upassword=?';
	p.query(sql,[obj.uname,obj.upassword],(err,result)=>{
		if(err) throw err;
		if(result.length==0){
			res.send("0")
		}else{
			// console.log(result[0].id)
			res.send(`${result[0].id}`)
		}
	})
})
r.get('/check_user',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_user where id= ?'
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
r.post('/regist',(req,res)=>{
	console.log('调用了注册接口...')
	let obj=req.body
	console.log(obj)
	if(obj.uname==undefined && obj.upassword==undefined){
		let sql='select phone from lv_user where phone= ?'
		p.query(sql,[obj.phone],(err,result)=>{
			if(result.length!=0){
				res.send("1")
			}else{
				console.log(result.length)
				res.send("0")
			}
		})
	}else{
		let sql='select uname from lv_user where uname= ?'
		p.query(sql,[obj.uname],(err,result)=>{
			console.log(result)
			if(result.length!=0){
				res.send("1")
			}else{
				let phone=Number(obj.phone)
				let sql='INSERT lv_user(uname,upassword,phone) VALUES(?,MD5(?),?)';
				p.query(sql,[obj.uname,obj.upassword,obj.phone],(err,result)=>{
					if(err) throw err;
					if(result.affectedRows==1){
						res.send("注册成功")
						console.log("注册成功")
					}else{
						res.send("注册失败")
					}
				})
			}
		})
	}
	
})








module.exports=r;