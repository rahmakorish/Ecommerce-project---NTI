const FAQ = require('../models/FAQ.model');

//create new question on dashboard by admin => authorize in route **
exports.createQuestion = async(req, res)=>{
    try{
    //get the data
    const {question, answer} = req.body;
    const newQuestion = await FAQ.create({question, answer})
    return res.status(200).json({message:newQuestion})
}
    catch(err){
        res.status(500).json({message:`${err.message}`})
    }
}

//retrive all questions to display 
exports.getQuestion = async(req,res)=>{
    try{
    const faqs = await FAQ.find();   
    return res.status(200).json(faqs)
}
    catch(err){
    return res.status(500).json({message:`${err.message}`})
    }
}

