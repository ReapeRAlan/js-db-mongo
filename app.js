const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/utma';

mongoose.connect(url_bd)
    .then(() => {
        console.log('Conexión exitosa');
        insertarAlumno();
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

const alumnoEsquema = new mongoose.Schema({
    name: String,
    apepat: String,
    apemat: String,
    numerotel: Number
});

const Alumno = mongoose.model('Alumno', alumnoEsquema);

function insertarAlumno() {
    Alumno.create({
            name: 'Juan',
            apepat: 'Sedillo',
            apemat: 'Sanchez',
            numerotel: 4495574545
        })
        .then(doc => {
            console.log('Alumno insertado:', doc);
        })
        .catch(err => {
            console.error('Error al insertar alumno:', err);
        });
}