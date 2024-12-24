import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate a delay
    setTimeout(() => {
      // Return some mock data
      res.status(200).json({
        personalInfo: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        address: {
          street: '123 Main St',
          city: 'Anytown',
          zipCode: '12345',
        },
        preferences: {
          receiveNewsletter: true,
          agreeToTerms: true,
        },
      })
    }, 1000)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}