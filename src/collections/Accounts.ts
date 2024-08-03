import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'accounts',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    
  ],
}

export default Users
