import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <li><Link to='/perfil'><img src="../../../src/assets/user.png" className="user-icon"></img></Link></li>
    </ul>
    </nav>
  );
};

export default NavBar;

