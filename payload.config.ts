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
          options: ['public', 'contact'],
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
          options: ['draft', 'active', 'sold_out', 'archived'],
          required: true,
        },
        {
          name: 'featuredOnHomepage',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'brochureFile',
          type: 'text',
        },
        {
          name: 'packageSummary',
          type: 'textarea',
          required: true,
        },
        {
          name: 'inclusions',
          type: 'json',
        },
        {
          name: 'exclusions',
          type: 'json',
        },
        {
          name: 'requirements',
          type: 'json',
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
        {
          name: 'ogImage',
          type: 'text',
        },
        {
          name: 'publishedAt',
          type: 'date',
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
          name: 'packageId',
          type: 'number',
        },
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
          name: 'ktpFile',
          type: 'text',
        },
        {
          name: 'sourcePage',
          type: 'text',
        },
        {
          name: 'sourceCampaign',
          type: 'text',
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
        {
          name: 'privacyConsentGiven',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'privacyConsentAt',
          type: 'date',
        },
        {
          name: 'submittedAt',
          type: 'date',
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: true,
  }),
  editor: lexicalEditor({}),
})
