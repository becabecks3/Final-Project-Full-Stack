const users_queries = {
    getAllUsers: `SELECT *
    FROM public.Usuario;`,
    createUser: `INSERT INTO users(name, email, password)
        VALUES ($1, $2, $3);`,
    updateUser: `UPDATE users
        SET name=$1, email=$4, password=$3
        WHERE email = $2;`,
    deleteUser: `DELETE FROM users as a
        WHERE a.email = $1;`,
    loggedTrue: `UPDATE users
    SET login = true
    WHERE email=$1;`,
    loggedFalse: `UPDATE users
    SET login = false
    WHERE email=$1` 
}
module.exports = users_queries;