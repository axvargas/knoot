var express = require('express');
// var request = require("request");

var Anuncio = require("../models/anuncios")

var router = express.Router();

router.get('/', async (req, res, next) => {
    const anuncios = await Anuncio.find()
    res.send(anuncios)
});


router.get('/categoria/:categoria', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find({ categoria: req.params.categoria }).orFail();
        res.send(anuncios)
    } catch {
        res.status(404)
        res.send({ error: "La Categoria no existe" })
    }
});

router.get('/fecha_inicio/:fecha_inicio', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find({ fecha_inicio: req.params.fecha_inicio }).orFail();
        res.send(anuncios)
    } catch {
        res.status(404)
        res.send({ error: "No hay anuncios con esa fecha" })
    }
});
/*
router.get('/fecha_inicio/:fecha_inicio', async (req, res, next) => {
    
    try {
        Anuncio=[]
        const anuncios = await Anuncio.find();
        console.log(anuncios)
        anuncios.forEach((e)=>{
            const mes=e.fecha_inicio.split("-")[1]
            console.log(e)
            if(mes==req.params.fecha_inicio ){
                Anuncio.add(e)
                console.log(e)
            }
        })
        
        res.send(Anuncio)
    } catch {
        res.status(404)
        res.send({ error: "No hay anuncios con esa fecha" })
    }
});*/


               
module.exports = router;