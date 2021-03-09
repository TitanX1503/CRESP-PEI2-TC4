const express = require ('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    //res.send('Hello World!')

    //TODO: Logica para revisar fecha
    let message = "PENDIENTE DE CONFIRMAR";
    let currentDate = new Date();
    
    let targetdayofthemonth = 9;
    let targetmonth = 9;
    let currentdayofthemonth = currentDate.getDate();
    let currentmonth = currentDate.getMonth();

    if(currentmonth === targetmonth && currentdayofthemonth ===targetdayofthemonth)
    {
      message = "JÁ"
    } else
    {
      message = "EKKI GERA"
    }

    res.render("pages/index", {
        message
    });
  })

  app.use (express.static ("public"));
  
  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })