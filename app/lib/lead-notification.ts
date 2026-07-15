type LeadNotification = {
  id: number
  leadType: 'consultation' | 'registration'
  fullName: string
  phone: string
  city: string | null
  message: string | null
  packageId: string | null
  sourcePage: string | null
  sourceCampaign: string | null
}

export async function notifyNewLead(lead: LeadNotification) {
  const endpoint = process.env.LEAD_NOTIFICATION_WEBHOOK_URL
  if (!endpoint) return

  let url: URL
  try {
    url = new URL(endpoint)
  } catch {
    return
  }
  if (url.protocol !== 'https:') return

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'lead.created', lead }),
      signal: AbortSignal.timeout(5_000),
      cache: 'no-store',
    })
  } catch {
    // ponytail: delivery retries belong in a queue when lead volume requires it.
  }
}
