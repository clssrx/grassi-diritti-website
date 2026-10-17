import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Revalidated queries must bypass Sanity's CDN to avoid returning stale data.
  useCdn: false,
})
