export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA token is required' });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Store your secret key in .env.local
  
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: recaptchaToken,
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ message: 'Failed to verify reCAPTCHA' });
  }

  try {
    const data = await response.json();
    if (data.success) {
      return res.status(200).json({ message: 'reCAPTCHA verified successfully' });
    } else {
      return res.status(400).json({ message: 'reCAPTCHA verification failed', error: data['error-codes'] });
    }
  } catch (error) {
    console.error('Error parsing reCAPTCHA response:', error);
    return res.status(500).json({ message: 'Failed to parse reCAPTCHA response' });
  }
}
