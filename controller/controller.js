require('dotenv').config()
const request = require('request')

const getHey = (req, res) => {
    res.send(`<h1>THE SERVER IS RUNNING!!!</h1>`);
};

const getUser = (req, res) => {
    res.send(`<h1>The name of the user is Anshuman Baruah!</h1>`)
};

const authToken = (req, res) => {
    let client_id = process.env.client_id;
    let client_secret = process.env.client_secret;
}


const getPlaylist = (req, res) => {
    
};


module.exports = { getHey, getUser , authToken, getPlaylist };