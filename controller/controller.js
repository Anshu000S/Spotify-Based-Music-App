const getHey = (req,res)=>{
    res.send(`<h1>THE SERVER IS RUNNING!!!</h1>`);
};

const getUser = (req,res)=>{
    res.send(`<h1>The name of the user is Anshuman Baruah!</h1>`)
};

module.exports = {getHey, getUser};