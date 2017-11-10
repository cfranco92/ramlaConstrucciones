const app = require('./app');
const config = require('./config');

app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Aplicación propiedad de DCapricho 2017")
    console.log("Ramla Pro. Software 2017");
});
