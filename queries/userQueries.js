const users_queries = {
    getUser: `SELECT * FROM Usuario`,
    createUser: `INSERT INTO Usuario
    (nombre, email, contraseña, direccion, telefono, foto )
    VALUES ($1, $2, $3, $4, $5, $6);`,
    updateUser: `UPDATE Usuario
    SET nombre = $1, email = $2, contraseña = $3, direccion = $4, telefono = $5, foto = $6
    WHERE nombre = $1 AND email = $2 AND contraseña = $3 AND direccion = $4 AND telefono = $5 AND foto = $6;`,
    deleteUser: `DELETE FROM Usuario as a
    WHERE a.email = $1;`,
    getAllFavs: `SELECT * FROM Favoritos`,
    deleteFav: `DELETE FROM Favoritos as a
    WHERE a.artista = $1;`,
    createFav: ` INSERT INTO favoritos (id_usuario, artista, fecha, sala, genero, ubicacion,  precio, url_imagen, url_evento)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`



}
module.exports = users_queries;