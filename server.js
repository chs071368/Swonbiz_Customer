const fs = require('fs');
const express= require('express') ;
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql= require('mysql');

const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest:'./upload'})
// app.get('/api/hello', (req, res)=>{
//     res.send({message:'Hello Express'});
// });

app.get('/api/customers', (req, res)=>{
    connection.query("SELECT * FROM CUSTOMER", 
    (err, rows, fields) =>{res.send(rows);
    });
});

app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res)=>{
    let sql= 'INSERT INTO CUSTOMER VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    let image = '/image/' + req.file.filename;
    let company_name = req.body.company_name;
    let company_reg_no = req.body.company_reg_no;
    let company_ceo= req.body.company_ceo;
    let company_ceo_phone= req.body.company_ceo_phone;
    let company_ceo_email= req.body.company_ceo_email;
    let company_tp= req.body.company_tp;
    let contract_tp= req.body.contract_tp;
    let company_ceo_address= req.body.company_ceo_address;
    let contract_start_end_date= req.body.contract_start_end_date;
    let contract_term= req.body.contract_term;
    let imcome_date= req.body.imcome_date;
    let imcome_fee= req.body.imcome_fee;
    
    let params = [image, company_name, company_reg_no, company_ceo, 
        company_ceo_phone, company_ceo_email,company_tp, contract_tp,
        company_ceo_address, contract_start_end_date, contract_term, 
        imcome_date, imcome_fee];
    connection.query(sql, params, (err, rows, fields) => {
        res.send(rows);
    });
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));