const users_queries = {
    createUser: `INSERT INTO Usuario
    (nombre, email, contraseña, direccion, telefono, foto )
    VALUES ($1, $2, $3, $4, $5, $6);`,
    updateUser: `UPDATE Usuario
    SET nombre = $1, email = $2, contraseña = $3, direccion = $4, telefono = $5, foto = $6
    WHERE nombre = $1 AND email = $2 AND contraseña = $3 AND direccion = $4 AND telefono = $5 AND foto = $6;`,
    deleteUser: `DELETE FROM Usuario as a
        WHERE a.email = $1;`
}
module.exports = users_queries;