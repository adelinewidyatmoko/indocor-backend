import { CollectionConfig } from 'payload/types'

const Form: CollectionConfig = {
  slug: 'form',
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
        name: 'namaLengkap',
        type: 'text',
        required: true,
      },
      {
        name: 'asal',
        type: 'text',
        required: true,
      },
      {
        name: 'asalInstansi',
        type: 'text',
        required: true,
      },
      {
        name: 'noWa',
        type: 'text',
        required: true,
      },
      {
        name: 'longText',
        type: 'textarea',
        required: true,
      },
    {
        name: 'linkDrive',
        type: 'text',
        required: true
    }
    
  ],
}

export default Form