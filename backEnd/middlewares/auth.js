//Importar jsonwebtoken
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const headerAuth = req.get('Authorization');
    //Chequear el header de autorización
    if (!headerAuth){
        const error = new Error('Autentificacion no valida');
        error.statusCode = 401;
        throw error; 
    }
    const token = headerAuth.split(' ')[1];
    let decodedToken;
    try {
      //Decodificando el token
      decodedToken = jwt.verify(token, 'Beatifulspringinshorts');
    } catch (err) {
      //No se encuentra el token
      err.statusCode = 500;
      throw err;
    }
    //El token no esta autentificado
    if (!decodedToken) {
      
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
    }

    req.userId = decodedToken.userId;
    next();
}
