import Express from "express";

import formatResponse from "../utils/response";

import ZhenzismsClient from "../utils/zhenzisms";

import sms from "../../configure/authKey/sms";
import getClientIp from "../utils/getIp";
import { fromTimeStampToStand } from "../utils/formatDate";
import {randomNumberGenerator} from "../utils/random";


const router = Express();
const client = new ZhenzismsClient(sms.sendURL, sms.appId, sms.appSecureKey);

const regPhone = /^1[3456789]\d{9}$/;
let lastSend = {};

let sendSMS = {};
router.post("/", async (req:any, res) => {
  const nowResquestTime = new Date().getTime();

  if (!regPhone.test(req.body.phone)) {
    res.send(formatResponse(409, "电话格式错误", false));
    return;
  }

  if (!sendSMS[getClientIp(req)]) {
    sendSMS[getClientIp(req)] = [];
  }

  const delay =
    sendSMS[getClientIp(req)][sendSMS[getClientIp(req)].length - 1] +
    24 * 60 * 60 * 1000;

  if (nowResquestTime > delay) {
    sendSMS[getClientIp(req)] = [];
  }

  if (sendSMS[getClientIp(req)].length > 10) {
    res.send(
      formatResponse(
        408,
        `当前请求次数过多,请${fromTimeStampToStand(delay, true)} 后重试`,
        false
      )
    );
    return;
  }

  if (!lastSend[getClientIp(req)]) {
    lastSend[getClientIp(req)] = 0;
  }

  if (
    nowResquestTime - lastSend[getClientIp(req)] < 60 * 1000 &&
    lastSend[getClientIp(req)] != 0
  ) {
    res.send(formatResponse(407, `请1分钟后重试`, false));
    return;
  }



  let code = ""

  for (let index = 0; index < 5; index++) {
    code += randomNumberGenerator(0,9);
  }

  
  

  // const smsRes = await client.send({
  //   templateId: sms.smsTmpId,
  //   number: req.body.phone,
  //   templateParams: [`${code}`, "5"],
  // });

  const smsRes = {
    code:0,
    data:"success"
  }

  console.log(code);
  

 

  if (smsRes.code === 0) {
    if(!req.session.captcha) {
      req.session.captcha = {}
    }
    req.session.captcha[req.body.phone] = +code;
    sendSMS[getClientIp(req)].push(nowResquestTime);
    lastSend[getClientIp(req)] = nowResquestTime;
    res.send(formatResponse(0, "短信发送成功", true));
  } else {
    res.send(formatResponse(smsRes.code, smsRes.data, false));
  }

});

router.post("/verify",(req:any,res,next) => {
  
  if(!req.body.captcha || !req.body.phone) {
    res.send(formatResponse(400,"参数错误",false));
    return;
  }

  if(!req.session.captcha || (+req.session.captcha[req.body.phone] !== +req.body.captcha)) {
    res.send(formatResponse(402,"验证失败",false));
    return;
  }


  if(+req.session.captcha[req.body.phone] === +req.body.captcha) {
    res.send(formatResponse(0,"验证成功",true));
    return;
  }

  res.send(formatResponse(501,"未知错误",false))
})

export default router;
