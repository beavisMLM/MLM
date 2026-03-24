export default async function handler(req, res) {
  try {
    // Simple GET request with no extra headers
    const r = await fetch("http://185.83.152.104", {
      method: "GET",
    });

    const text = await r.text();

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(500).send(JSON.stringify({ error: err.message }));
  }
}
