export default async function handler(req, res) {
  if (req.method === "POST") {
    const userData = req.body;

    console.log("Eingegangene Daten:", userData);

    // Optional: hier könntest du die Daten an Make weiterleiten
    // await fetch("https://hook.make.com/dein-webhook", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userData)
    // });

    res.status(200).json({ message: "Antwort empfangen. Danke!" });
  } else {
    res.status(405).json({ message: "Nur POST erlaubt" });
  }
}
