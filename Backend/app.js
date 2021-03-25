const client = require('./db');
const app = require('./server');
const fs = require('fs');

app.get('/', (req, res) => {
    client.query("SELECT * FROM products", (err, res2) => {
        if (err) {
            throw err
        }
        res.status(200).json(res2.rows);

    })
})

app.get('/categories', (req, res) => {
    client.query("SELECT * FROM categories", (err, res2) => {
        if (err) {
            throw err
        }
        res.status(200).json(res2.rows);
    })
})


const product = async(id) => {
    const result = await client.query(`SELECT product_name, price, img_path FROM products WHERE id = ${id}`)
    return result.rows
}

app.get('/image/:id', async(req,res) => {
    const product_id= req.params.id
    const product_info = await product(product_id)
    fs.readFile(product_info[0].img_path, (err, data) =>{
        if(err){
            throw err
        }
        res.writeHead(200, {'Content-Type': 'image/jpg'})
        res.end(data);
    })
})



