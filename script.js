let step = 0;
let answers = {};

const questions = [
  { key: "age", text: "Wie alt bist du?" },
  { key: "height", text: "Wie groß bist du (in cm)?" },
  { key: "weight", text: "Wie viel wiegst du aktuell (in kg)?" },
  { key: "goal", text: "Was ist dein Zielgewicht?" },
  { key: "habits", text: "Wie sehen deine Essgewohnheiten aus?" },
  { key: "weaknesses", text: "Was sind deine Schwächen beim Essen (z. B. abends naschen)?" },
  { key: "favorites", text: "Was isst du sehr gerne und willst nicht darauf verzichten?" },
  { key: "activity", text: "Welche Bewegung machst du aktuell im Alltag?" },
  { key: "time", text: "Wie viel Zeit kannst du täglich für dich investieren?" },
  { key: "motivation", text: "Wie motiviert bist du aktuell? (Skala von 1 bis 10)" },
  { key: "email", text: "Zum Schluss: Wie lautet deine E-Mail-Adresse?" }
];

function sendInput() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const value = input.value.trim();

  if (value === "") return;

  // Anzeige der Nutzerantwort
  chatbox.innerHTML += `<div class="user">${value}</div>`;

  // Speichern der Antwort mit dem richtigen Key
  const currentQuestion = questions[step];
  answers[currentQuestion.key] = value;
  input.value = "";

  step++;

  if (step < questions.length) {
    // Nächste Frage stellen
    setTimeout(() => {
      chatbox.innerHTML += `<div class="bot">${questions[step].text}</div>`;
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 300);
  } else {
    // Alle Antworten gesammelt – Daten senden
    chatbox.innerHTML += `<div class="bot">Super, danke! Dein Plan wird jetzt erstellt und dir per E-Mail zugeschickt. 📄</div>`;
    sendToBackend(answers);
  }
}

function sendToBackend(data) {
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      console.log("Antwort vom Server:", response);
    })
    .catch(err => {
      console.error("Fehler beim Senden der Daten:", err);
    });
}
