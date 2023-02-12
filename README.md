# TruemoneyWallet-api-host
use TLS and user-agent to bypass Cloudfare 

**How to use**
- download this repo and use  `npm i`
- use `npm run start` then go to `http://localhost:3000`

**How to use api**
- post an api with body 
  - our params `phone` : phone number  `code` : Voucher Code to redeem
  - it will send a response 200 and 404 
    - if its send 200 mean its already redeem but if it 404 its mean expired or can't redeem
