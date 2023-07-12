
const getHome = (req, res) => {
    res.status(200).send("Has mandado un GET de la home")
}

const signUp = (req, res) => {
    res.status(200).send("Has mandado un GET de signUp")
}

const login = (req, res) => {
    res.status(200).send("Has mandado un GET de login")
}

const favorites = (req, res) => {
    res.status(200).send("Has mandado un GET de favoritos")
}

const profile = (req, res) => {
    res.status(200).send("Has mandado un GET de profile")
}

const getEvents = (req, res) => {
    res.status(200).send("Has mandado un GET a Events")
}

const getDetails = (req, res) => {
    res.status(200).send("Has mandado un GET a Details")
}

const getSearch = (req, res) => {
    res.status(200).send("Has mandado un GET de Search")
}

const getFavorites = (req, res) => {
    res.status(200).send("Has mandado un GET de favoritos")
}

const postFavorites = (req, res) => {
    res.status(200).send("Has mandado un POST a favoritos")
}
const deleteFavorites = (req, res) => {
    res.status(200).send("Has mandado un DELETE A favoritos")
}


module.exports = {
    getHome,
    signUp,
    login,
    favorites,
    profile,
    getEvents,
    getDetails,
    getSearch,
    getFavorites,
    postFavorites,
    deleteFavorites
}