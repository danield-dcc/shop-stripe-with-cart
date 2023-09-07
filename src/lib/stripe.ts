import Stripe from 'stripe'

if(!process.env.STRIPE_SECRET_KEY){
    throw new Error('Missing Stripe Key')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
    appInfo: {
        name: 'Ignite Shop'
    }
})