import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'ngc',
  apiKey: process.env.API_KEY || '',
})