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


const product = async (id) => {
    const result = await client.query(`SELECT product_name, price, img_path FROM products WHERE id = ${id}`)
    return result.rows
}

app.get('/image/:id', async (req, res) => {
    const product_id = req.params.id
    const products = await product(product_id);
    if (products.length !== 1) {
        return res.json({ success: false, message: 'product not found' })
    }
    const product_info = products[0];
    console.log(product_info);
    res.set('Content-Type', 'image/jpg')
    fs.createReadStream(product_info.img_path).pipe(res);
})

const category = async (id) => {
    const result = await client.query(`SELECT category_name, category_icon FROM categories WHERE id = ${id}`)
    return result.rows
}

app.get('/categories/icon/:id' , async (req, res) => {
    const category_id = req.params.id
    const categories = await category(category_id);

    if(categories.length !== 1){
        return res.json({success: false, message: 'category not found'})
    }

    const category_info = categories[0];
    console.log(category_info);
    res.set('Content-Type', 'image/png')
    fs.createReadStream(category_info.category_icon).pipe(res);
})



