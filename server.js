const express= require('express') ;
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req, res)=>{
    res.send({message:'Hello Express'});
});

app.get('/api/customers', (req, res)=>{
    res.send([
        {
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'company_name':'(주)와인드엘',
        'company_reg_no':'804-81-01720',
        'company_ceo':'박새롬',
        'company_ceo_phone':'010-6403-8449',
        'company_ceo_email':'gksvlal227@gmail.com',
        'company_tp':'법인',
        'contract_tp':'Flex',
        'company_ceo_address':'서울 중구 흥인동 142-1 101동 1202호',
        'contract_start_end_date':'2020.07.02 ~ 2021.01.01',
        'contract_term':'6개월',
        'imcome_date':'매월2일',
        'imcome_fee':'198,000'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'company_name':'(주)에스원테크',
        'company_reg_no':'105-87-68698',
        'company_ceo':'최현수',
        'company_ceo_phone':'010-6484-7287',
        'company_ceo_email':'hschoi@s-onetech.com',
        'company_tp':'법인',
        'contract_tp':'Flex',
        'company_ceo_address':'서울 노원구 월계동 그랑빌아파트 121-303',
        'contract_start_end_date':'2020.01.02 ~ 2021.01.01',
        'contract_term':'12개월',
        'imcome_date':'매월2일',
        'imcome_fee':'198,000'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'company_name':'에스원3DP',
        'company_reg_no':'237-39-00131',
        'company_ceo':'최현수',
        'company_ceo_phone':'010-6484-7287',
        'company_ceo_email':'chs071368@naver.com',
        'company_tp':'개인',
        'contract_tp':'비상주',
        'company_ceo_address':'서울 노원구 월계동 그랑빌아파트 121-303',
        'contract_start_end_date':'2019.01.02 ~ 2021.01.01',
        'contract_term':'24개월',
        'imcome_date':'매월2일',
        'imcome_fee':'198,000'
      }
      ]
        
    );
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));