-- Tabla Usuario
CREATE TABLE Usuario (
  id_usuario SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  direccion VARCHAR(200),
  foto VARCHAR(200),
  telefono VARCHAR(20),
  contraseña VARCHAR(20) NOT NULL
    CHECK (contraseña REGEXP '^(?=.*[0-9])(?=.*[!@#$%^&*])')
);

-- Tabla Favoritos
CREATE TABLE Favoritos (
  id_favorito SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES Usuario(id_usuario),
  artista VARCHAR(100) NOT NULL,
  fecha DATE,
  sala VARCHAR(100),
  precio DECIMAL(10, 2),
  url_imagen VARCHAR(200),
  url_evento VARCHAR(200)
);
