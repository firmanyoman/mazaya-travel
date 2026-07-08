import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'packages',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'category',
          type: 'select',
          options: ['umrah', 'haji', 'wisata-halal'],
          required: true,
        },
        {
          name: 'tier',
          type: 'select',
          options: ['silver', 'gold', 'platinum'],
        },
        {
          name: 'shortLabel',
          type: 'text',
        },
        {
          name: 'departureDate',
          type: 'date',
          required: true,
        },
        {
          name: 'durationDays',
          type: 'number',
          required: true,
        },
        {
          name: 'departureCity',
          type: 'text',
          required: true,
        },
        {
          name: 'airline',
          type: 'text',
        },
        {
          name: 'makkahHotel',
          type: 'text',
        },
        {
          name: 'madinahHotel',
          type: 'text',
        },
        {
          name: 'priceMode',
          type: 'select',
          options: ['fixed', 'starting_from'],
          required: true,
        },
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'minimumDeposit',
          type: 'number',
        },
        {
          name: 'totalSeats',
          type: 'number',
        },
        {
          name: 'remainingSeats',
          type: 'number',
        },
        {
          name: 'packageStatus',
          type: 'select',
          options: ['draft', 'active', 'archived'],
          required: true,
        },
        {
          name: 'featuredOnHomepage',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'packageSummary',
          type: 'textarea',
          required: true,
        },
        {
          name: 'inclusions',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'exclusions',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'requirements',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'itinerarySummary',
          type: 'textarea',
        },
        {
          name: 'paymentNotes',
          type: 'textarea',
        },
        {
          name: 'badgeText',
          type: 'text',
        },
        {
          name: 'seoTitle',
          type: 'text',
        },
        {
          name: 'seoDescription',
          type: 'textarea',
        },
      ],
    },
    {
      slug: 'leads',
      admin: {
        useAsTitle: 'fullName',
      },
      fields: [
        {
          name: 'leadType',
          type: 'select',
          options: ['consultation', 'registration'],
          required: true,
        },
        {
          name: 'fullName',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
        {
          name: 'nik',
          type: 'text',
        },
        {
          name: 'fatherName',
          type: 'text',
        },
        {
          name: 'gender',
          type: 'select',
          options: ['laki-laki', 'perempuan'],
        },
        {
          name: 'birthDate',
          type: 'date',
        },
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'message',
          type: 'textarea',
        },
        {
          name: 'status',
          type: 'select',
          options: ['baru', 'dihubungi', 'proses', 'batal', 'selesai'],
          defaultValue: 'baru',
        },
        {
          name: 'internalNotes',
          type: 'textarea',
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  editor: lexicalEditor({}),
})
