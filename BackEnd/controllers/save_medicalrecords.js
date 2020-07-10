var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.save_records=function(req,res){
	if(req.session.user_id){
		//user_id from session
	connection.query("insert into medical_records (patient_id,doctor,doctor_id,department_name,symptoms,medication_prescribed) values (?,?,?,?,?,?)",[req.body.user_id,req.body.doctor,req.session.user_id,req.body.dept,req.body.symptoms,req.body.prescribed],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: 'Medical Record Saved.'});
		}
	});
}
else{
	res.json({
		status:false,
		message:'Please login'
	});
}
}