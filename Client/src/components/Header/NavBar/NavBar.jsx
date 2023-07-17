import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'

const NavBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
       
          const response = await fetch("/api/user");
          const data = await response.json();
          console.log(data)
          const nombre = data[0].nombre;
          setUserName(nombre);
        }
        
        catch (error) {console.error("Error al obtener el nombre del usuario:", error);
      }
         
    };

    fetchUserName();
  }, []);

  return (
    <nav className="nav-container">
      <img src="../../../src/assets/ondas.png" className="logo"></img>
      <ul>
        <li>
          {userName.length && userName ? `Hola, ${userName}` : "Inicio de sesión"}
        </li>
        <li><Link to='/perfil'><Avatar alt="Remy Sharp" className="user-icon" src="../../../src/assets/foto.png" /></Link></li>
    </ul>
    </nav>
  );
};

export default NavBar;

