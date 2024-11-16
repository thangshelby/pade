const Exporess= require('express');
import { Request,Response } from 'express'
import { createPayment,createPaymentIntent } from "../controllers/paymentController";

const paymentRouter = Exporess.Router(); 

paymentRouter.post('/payment',createPayment)
paymentRouter.post('/payment-sheet',createPaymentIntent)


module.exports = paymentRouter;