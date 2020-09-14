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


router.get('/popular_tags', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.aggregate([
            {$unwind: "$categoria"},
            {$group: {
                _id: "$categoria",
                cantidad: { $sum: 1}
            }}]).sort({cantidad:-1}).limit(5).exec()
        res.send(anuncios)
    } 
    catch {
        res.status(404)
        res.send({ error: "Error" })
    }
});


router.get('/numero_anuncios', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.aggregate([
            {$group: {
                _id: {year:{$year: "$fecha_inicio"}, month:{$month: "$fecha_inicio"}},
                cantidad: { $sum: 1}
            }}]).sort({year:'desc' }).limit(6).exec()
        res.send(anuncios)
    } 
    catch {
        res.status(404)
        res.send({ error: "Error" })
    }
});

router.get('/numero_vacantes', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.aggregate([
            {$group: {
                _id: {year:{$year: "$fecha_inicio"}, month:{$month: "$fecha_inicio"}},
                suma: { $sum: "$vacantes"}
            }}]).sort({_id: {year:'desc' }}).limit(6).exec()
        res.send(anuncios)
    } 
    catch {
        res.status(404)
        res.send({ error: "Error" })
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