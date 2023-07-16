import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // const getName = async () => {
    //   const response = await fetch("/api/user").then(res => console.log(res.json()))
    //   console.log(response);
    // }
    // getName();
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
    <nav>
      <ul>
        <li>
          {userName.length && userName ? `Hola, ${userName}` : "Inicio de sesión"}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

