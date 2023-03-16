import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith('cs_')) { // check the id
      throw Error('Incorrect CheckoutSession ID.');
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id); // if id is valid, retrieve checkout session by passing the session id

    res.status(200).json(checkout_session); // and return this to the client
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message }); // if error occurs
  }
}