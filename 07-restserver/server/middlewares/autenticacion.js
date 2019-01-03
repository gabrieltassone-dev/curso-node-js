const jwt = require('jsonwebtoken')

let verificaToken = (req, res, next) => {

    let token = req.get('token')

    // console.log(token);

    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {

        if (err) {
            console.log(err);
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            })
        }

        req.usuario = decoded.usuario

        next()
    })
}

let verificaRole = (req, res, next) => {

    let usuario = req.usuario

    if (usuario.role === "ADMIN_ROLE") {

        next()

    } else {

        // console.log(usuario.role);
        return res.json({
            ok: false,
            err: {
                message: "El usuario no es administrador"
            }
        })
    }
}

module.exports = {
    verificaToken,
    verificaRole
}