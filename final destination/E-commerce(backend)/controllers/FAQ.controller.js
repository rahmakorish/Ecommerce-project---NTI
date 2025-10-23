const FAQ = require('../models/FAQ.model');

//create new question on dashboard by admin => authorize in route **
exports.createQuestion = async(req, res)=>{
    try{
    //get the data
    const {question, answer} = req.body;
    //get the qs array
    let existingQuestions = await FAQ.findOne();
    //first question
    if(!existingQuestions){
        existingQuestions = new FAQ({myQuestion:[{question,answer}]})
    } 
    //insert it into existing Qs array
    existingQuestions.myQuestion.push({question,answer})
    await existingQuestions.save();
    return res.status(200).json({message:'question created successfully', data:existingQuestions})}
    catch(err){
        res.status(500).json({message:`${err.message}`})
    }
}

//retrive all questions to display 
exports.getQuestion = async(req,res)=>{
    try{
    const faqs = await FAQ.find();
    const allQuestions = faqs.flatMap(faq => faq.myQuestion);
    return res.status(200).json({ data: allQuestions})
}
    catch(err){
    return res.status(500).json({message:`${err.message}`})
    }
}

