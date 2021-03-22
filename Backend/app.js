const client = require('./db');
const app = require('./server');

app.get('/', (req, res) => {
    client.query("SELECT * FROM products", (err,res2) => {
        if(err){
            throw err
        }
        res.status(200).json(res2.rows);
        
    })
})