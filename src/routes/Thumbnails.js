const router = require("express").Router();
const env = require("../config/env");

router.get("/", (req, res) => {
  res.header("Accept", "*/*");
  res.header("Content-Type", "text/html");

  res.status(200).send(
    `
        <html>
            <head>
                <title>test</title>
            </head>
            <body>
                <h1>Hi Mom</h1>
                <hr />
                <p><strong>Test Thumbnail Lorem Ipsum</strong></p>
            </body>
        </html>
    `.trim()
  );
});

router.post("/generate", async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
