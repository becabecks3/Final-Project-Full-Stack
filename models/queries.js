const pool = require('../utils/db_pgsql');
const queries = require('../queries/userQueries');

//POST
const createUser = async (newUser) => {
    const { nombre, email, contraseña, direccion, telefono, foto } = newUser;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser,[
            nombre, 
            email, 
            contraseña, 
            direccion, 
            telefono, 
            foto])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// PRUEBA
// const newUser = {
//     nombre: 'Rebeca',
//     email: 'rebecae@example.com',
//     contraseña: 'secreta',
//     direccion: '15 de Agosto',
//     telefono: '666-666-666',
//     foto: 'https://example.com/avatar.jpg',
//   };
  
//   createUser(newUser)
//     .then((rowCount) => {
//       console.log(`Se creó el usuario correctamente. Filas afectadas: ${rowCount}`);
//     })
//     .catch((err) => {
//       console.error('Error al crear el usuario:', err);
//     });


  //PUT
const updateUser = async (user) => {
    const { nombre, email, contraseña, direccion, telefono, foto, new_email, new_direccion, new_telefono, new_foto, new_contraseña } = user;
    let client, result;
    try {
        client = await pool.connect();
        const updates = []; 
        if (new_email) {
            updates.push(`email = '${new_email}'`);
        }
        if (new_direccion) {
            updates.push(`direccion = '${new_direccion}'`);
        }
        if (new_telefono) {
            updates.push(`telefono = '${new_telefono}'`);
        }
        if (new_foto) {
            updates.push(`foto = '${new_foto}'`);
        }
        if (new_contraseña) {
            updates.push(`contraseña = '${new_contraseña}'`);
        }
        const query = `
        UPDATE Usuario
        SET ${updates.join(', ')}
        WHERE nombre = $1 AND email = $2 AND contraseña = $3 AND direccion = $4 AND telefono = $5 AND foto = $6
      `;
    const data = await client.query(query, [nombre, email, contraseña, direccion, telefono, foto]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// // PRUEBA
// const update = {
//     nombre: 'Rebeca',
//     email: 'rebecae@example.com',
//     contraseña: 'secreta',
//     direccion: '15 de Agosto',
//     telefono: '666-666-666',
//     foto: 'https://example.com/avatar.jpg',
//     new_email: 'newemail@example.com'
//   };
  
//   updateUser(update)
//     .then((rowCount) => {
//       console.log(`Se actualizó el usuario correctamente. Filas afectadas: ${rowCount}`);
//     })
//     .catch((err) => {
//       console.error('Error al crear el usuario:', err);
//     });


//DELETE
const deleteUser = async (user) => {
    const { email } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUser,[email])
        result = data.rowCount
        console.log(email);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//PRUEBA
// const userToDelete = {
//     email: 'newemail@example.com'
//   };
  
// deleteUser(userToDelete)
//         .then((rowCount) => {
//     console.log(`Se eliminó el usuario correctamente. Filas afectadas: ${rowCount}`);
// })
// .catch((err) => {
//     console.error('Error al eliminar el usuario:', err);
// });

const user_queries = {
    createUser,
    updateUser,
    deleteUser,
}

module.exports = user_queries;
