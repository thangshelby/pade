import { Request, Response } from "express";
import { calculateOrderAmount } from "../constants";
const stripe = require('stripe')('sk_test_51QFpsmK71YuGel9UXwj1m4mWIhHGzioNykEPsAaGlSoceMqckkiYT8Tqq4tVgQXI7wEqQ4Am33FTEJoOfyHcuEJH00kX7sc24c');

export const createPayment = async (req: Request, res: Response) => {
  const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
    // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
};


export const createPaymentIntent=async (req:Request,res:Response)=> {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2024-10-28.acacia'}
  );

  const setupIntent = await stripe.setupIntents.create({
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.status(200).json({
    setupIntent: setupIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51QFpsmK71YuGel9UBPeAmULgJod2aiDsR6n3Hfaha9RGiVxN6EqVIiBnbKv5czlFwM60vO998yFZh1LqbeSeSSjS007jq1DIRC'
  })
}; 
