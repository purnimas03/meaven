import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // disable default body parsing (for file uploads)
  },
};

const FORM_ID = 1; // your Gravity Forms form ID
const WP_URL = "http://maevenchef-setup.test"; // your WP URL
const USERNAME = "purnima";
const PASSWORD = "fzp2Ov24tUuG4rEAhV";

const authHeader = "Basic " + Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  // Parse form data with formidable
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ message: "Error parsing form data" });
      return;
    }

    // Map your form fields to Gravity Forms field IDs (replace input_1 etc with your actual IDs)
    const entryData = {
      input_1: fields.firstName || "",
      input_2: fields.lastName || "",
      input_3: fields.email || "",
      input_4: fields.phone || "",
      input_5: fields.subject || "",
      input_6: fields.message || "",
    };

    // Build form data to send to Gravity Forms API
    const FormData = (await import("form-data")).default;
    const formData = new FormData();

    formData.append("input_values", JSON.stringify(entryData));

    if (files.file) {
      // Append file stream with original filename
      formData.append("file", fs.createReadStream(files.file.filepath), files.file.originalFilename);
    }

    try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        ...formData.getHeaders(),
      },
      body: formData,
    });

    const text = await response.text(); // get raw response as text

    if (!response.ok) {
      console.error('Gravity Forms API error:', text); // log error details
      return res.status(response.status).json({
        message: 'Gravity Forms API error',
        details: text,
      });
    }

    // parse JSON only if response is ok
    const result = JSON.parse(text);

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ message: 'Submission failed', error: error.message });
  }

  });
}
