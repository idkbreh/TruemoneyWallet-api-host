const router = app.Router();
const app = require('express');
const fetch = require('node-fetch').default;
const https = require('https')


process.env['NODE_ENV'] = 'production';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
tls.DEFAULT_MIN_VERSION = 'TLSv1.3';
const agent = new https.Agent({rejectUnauthorized:false,keepAlive:true});



router.post('/api',(req,res) => {
    let phone = req.body.phone
    let code = req.body.code
    const phonejson = JSON.stringify({
        mobile: phone 
    });
    let o = fetch(`https://gift.truemoney.com/campaign/vouchers/${code}/redeem`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: phonejson,
        agent: agent
    }).then(res=>res.json())
    if(res.status.code == "VOUCHER_OUT_OF_STOCK" || res.status.code == "VOUCHER_EXPIRED") {
        res.send(404)
    }
    if(res.status.code == "SUCCESS") {
        res.send(200)
    };
    ;
})