{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let step = 0;\
let answers = \{\};\
\
const questions = [\
  "Wie alt bist du?",\
  "Wie gro\'df bist du (in cm)?",\
  "Wie viel wiegst du aktuell?",\
  "Was ist dein Zielgewicht?",\
  "Was sind deine Essgewohnheiten?",\
  "Was sind deine Schw\'e4chen beim Essen (z.\uc0\u8239 B. abends naschen)?",\
  "Was isst du sehr gerne und willst nicht darauf verzichten?",\
  "Welche Bewegung machst du aktuell im Alltag?",\
  "Wie viel Zeit kannst du t\'e4glich f\'fcr dich investieren?",\
  "Wie motiviert bist du aktuell (Skala 1\'9610)?",\
  "Gib bitte deine E-Mail-Adresse ein, an die wir deinen Plan senden d\'fcrfen."\
];\
\
function sendInput() \{\
  const input = document.getElementById("userInput");\
  const chatbox = document.getElementById("chatbox");\
  const value = input.value.trim();\
\
  if (value === "") return;\
\
  chatbox.innerHTML += `<div class="user">$\{value\}</div>`;\
  answers[`q$\{step\}`] = value;\
  input.value = "";\
\
  step++;\
\
  if (step < questions.length) \{\
    setTimeout(() => \{\
      chatbox.innerHTML += `<div class="bot">$\{questions[step]\}</div>`;\
      chatbox.scrollTop = chatbox.scrollHeight;\
    \}, 300);\
  \} else \{\
    chatbox.innerHTML += `<div class="bot">Super, danke! Dein Plan wird jetzt erstellt. \uc0\u55357 \u56516 </div>`;\
    sendToBackend(answers);\
  \}\
\}\
\
function sendToBackend(data) \{\
  fetch("https://dein-backend.vercel.app/api/submit", \{\
    method: "POST",\
    headers: \{ "Content-Type": "application/json" \},\
    body: JSON.stringify(data)\
  \}).then(res => console.log("Daten gesendet")).catch(err => console.error("Fehler:", err));\
\}\
}