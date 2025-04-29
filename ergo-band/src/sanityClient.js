import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6bfphgns',  
  dataset: 'production',
  apiVersion: '2023-04-04', 
  useCdn: true,
})
