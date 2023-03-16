// Create API Endpoint that we need to create a checkout sessions
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) { // http request and response
  if (req.method === 'POST') { // request must be post
    try {
        // checkout session
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req?.body?.items ?? [], // all items
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`, // success transaction
        cancel_url: `${req.headers.origin}/CartPage`, // if user cancel the payment
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message }); // error catch
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed'); // code 405 to client who initiated that request
  }
}