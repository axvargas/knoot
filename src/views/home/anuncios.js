import React from 'react';
import MediaCard from "../../components/card";
import { Grid } from '@material-ui/core';
import useStyles from '../styles';



const Anuncios = () => {

    const classes = useStyles();
  
    const posts = [
        {
            "nombre": "Postula al Hackathon BDP", 
            "descripcion": `Una de las necesidades identificadas de los millennials corresponde 
            a la obtención de su primer vehículo, buscando así el sentimiento de movilidad y libertad. 
            Bajo esta premisa, nace la primera Hackathon del Banco del Pacífico en el que te invita a 
            desarrollar un prototipo tecnológico funcional que apoye a la necesidad de obtener un crédito
             automotriz para el segmento millennial del país.`,
             "habilidad":
             [{ 
                 "id":1,
                 "nombre":"Tecnologia"
             }],
             "banner":"https://static1.squarespace.com/static/55d9fb0ee4b0dfd798034243/t/5b7f1530352f533673edfd08/1535055161385/HACKATON+BDP.jpg?format=1500w",
            "fecha_inicio":"2020-02-01",
            "fecha_termino":"2020-03-12",
            "vacantes": 40,
            "likes": 87, 
            "categoria":2,
        },
         {
            "nombre": "Convocatorias laborales abiertas para personal técnico a nivel Nacional", 
            "descripcion": `Mas de 13000 Ofertas laborales y convocatorias abiertas a nivel Nacional para personal de nivel Técnico.
            Las personas interesadas en estas convocatorias laborales, por favor ingresar al siguiente link y ubicar la convocatoria que mas se adapte a sus requerimientos.`,
            "habilidad": 
            [{ 
                "id":2,
                "nombre":"Fisica"
            },
            { 
                "id":3,
                "nombre":"Quimica"
            },
            { 
                "id":4,
                "nombre":"Computacion"
            },
            { 
                "id":5,
                "nombre":"industrial"
            }],
            "banner":"https://vacantesyempleosya.com/wp-content/uploads/2017/02/Convocatorias-y-Ofertas-laborales-tecnicos.jpg",
            "fecha_inicio":"2020-02-01",
            "fecha_termino":"2020-03-12",
            "vacantes": 13903,
            "likes": 567,  
            "categoria":1,
           
        },
         {
            "nombre": "Leviathan Space Industries", 
            "descripcion": `Preparense para el lanzamiento oficial de @ActInSpace en #Guayaquil!  
             Podran utilizar tecnologia espacial para resolver grandes desafios en una hackathon 
             de 24 horas compitiendo en simultaneo contra 100 ciudades. 
            https://actinspace.org 1/3 #AIS2020`,
            "habilidad": 
             [{ 
                "id":1,
                "nombre":"Tecnologia"
            }],
            "banner":"https://pbs.twimg.com/media/EOBE8c9WAAIuTPZ.jpg:large",
            "fecha_inicio":"2020-02-01",
            "fecha_termino":"2020-03-12",
            "vacantes": 60,
            "likes": 45, 
            "categoria":2,
        },
         {
            "nombre": "Convocatoria Gad Municipal", 
            "descripcion": `Guayaquil sueña en grande
            para seguir avanzando con más
            obras y servicios para el progreso
            y bienestar de cada familia guayaquileña
            Teléfonos: (593 4) 2594800`,
            "habilidad": 
            [{ 
                "id":5,
                "nombre":"Nutricion"
            },
            { 
                "id":3,
                "nombre":"Quimica"
            },
            { 
                "id":6,
                "nombre":"Biologia"
            }],
            "banner":"https://www.giron.gob.ec/wp-content/uploads/2020/06/91854370_2681296098758333_5351148244267171840_o-960x600.jpg",
            "fecha_inicio":"2020-02-01",
            "fecha_termino":"2020-03-12",
            "vacantes": 10,
            "likes": 23, 
            "categoria":1,
        }
    ]

    
    return (
        <Grid container spacing={2}>
        
            {
                posts.map((post, i) => {
                    var habilidades="";
                    post.habilidad.map(item => habilidades+=item.nombre+" " )
                    habilidades = habilidades.substring(0, habilidades.length - 1);
                    return (
                        
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <MediaCard key={i} title={post.nombre} description={post.descripcion} banner={post.banner}
                                vacantes={post.vacantes} likes={post.likes} tags={habilidades}  fecha_inicio={post.fecha_inicio}
                                fecha_termino={post.fecha_termino}
                            />
                        </Grid>
                     
                    )
                })
                
            }

        </Grid>
    );
}

export default Anuncios;
