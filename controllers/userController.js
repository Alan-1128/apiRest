const {response, request} = require('express')


const userGet = (req, res=response) => {

    res.json({
        msg: 'get API'
    })
} 

const userPost = (req=request, res=response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API',
        nombre
    })
}

const userPut = (req=request, res=response) => {

    const id = req.params.id;

    res.status(500).json({
        msg: 'put API'
    })
}

const userDelete = (req, res=response) => {

    const id = req.params.id;

    res.json({
        msg: 'delete API'
    })
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}