import assert from 'node:assert';

async function runTest() {
  const url = process.env.API_URL || 'http://localhost:3000/api/leads';
  const payload = {
    name: 'Test Lead',
    fullName: 'Test Lead',
    phone: '081234567890',
    nik: '1234567890123456',
    fatherName: 'Test Father',
    city: 'Bone',
    gender: 'male',
    birthDate: '1995-05-15',
    selectedPackage: '1',
    packageId: '1',
    leadType: 'registration',
    ktpFile: JSON.stringify({
      name: 'ktp-test.jpg',
      type: 'image/jpeg',
      size: 120000,
      lastModified: Date.now(),
    }),
    privacyConsentGiven: true,
  };

  console.log(`Sending POST to ${url}...`);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(`Response status: ${response.status}`);
    const data = await response.json();
    console.log('Response body:', data);

    assert.ok(response.status === 200 || response.status === 201, `Expected 200 or 201, got ${response.status}`);
    assert.ok(data.success, 'Expected success property to be truthy');
    console.log('Success: Lead submission API test passed.');
  } catch (err: unknown) {
    console.error('Test failed:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

runTest();
