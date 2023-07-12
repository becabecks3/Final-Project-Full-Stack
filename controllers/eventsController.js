const modelQueries = require('../models/queries');


const getUser = async (req, res) => {
    let user = await modelQueries.getUser(req.body);
    res.status(200).json(user)
}

const getFavorites = async (req, res) => {
    let fav = await modelQueries.getFavs(req.query.id_usuario);
    res.status(200).json(fav); 
}

const postFavorites = async (req, res) => {
    const newFav = req.body; 
    const response = await modelQueries.createFav(newFav);
    res.status(201).json({
        "message": `Favorito añadido: ${newFav.artista}`
    });
}
const deleteFavorites = async (req, res) => {
    const dataFav = req.body;
    const response = await modelQueries.deleteFav(dataFav);
    res.status(200).json({
        "message": `Faorito borrado ${response.artista}`
    });
}


module.exports = {
    getFavorites,
    postFavorites,
    deleteFavorites,
    getUser
}