import assert from 'node:assert'

const url = process.env.API_URL || 'http://localhost:3020/api/leads'

async function post(payload: Record<string, unknown>) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.42' },
    body: JSON.stringify(payload),
  })
}

async function run() {
  const spam = await post({
    leadType: 'registration', fullName: 'Spam Test', phone: '081234567890', packageId: 1,
    city: 'Bone', website: 'https://spam.invalid', privacyConsentGiven: true,
  })
  assert.equal(spam.status, 204, 'honeypot must be silently accepted')

  const missingPackage = await post({
    leadType: 'registration', fullName: 'Test Lead', phone: '081234567890', city: 'Bone', privacyConsentGiven: true,
  })
  assert.equal(missingPackage.status, 400, 'registration needs a package')

  console.log('lead guard tests passed')
}

run().catch((error) => { console.error(error); process.exit(1) })
