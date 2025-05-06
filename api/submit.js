export default async function handler(req, res) {
  if (req.method === "POST") {
    const userData = req.body;

    // ✅ An Make.com senden
    try {
      const makeRes = await fetch("https://hook.eu2.make.com/rhq7a61r4363c60eap0hrolkk2ylysfy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });

      console.log("An Make gesendet:", await makeRes.text());
    } catch (error) {
      console.error("Fehler beim Senden an Make:", error);
    }

    // ✅ Antwort zurück an Nutzer
    res.status(200).json({ message: "Antwort empfangen & weitergeleitet." });
  } else {
    res.status(405).json({ message: "Nur POST erlaubt" });
  }
}
