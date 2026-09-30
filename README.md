<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LegalEase - Legal Information Assistant</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header>
  <div class="logo">⚖️ LegalEase</div>
  <nav>
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#rights">Rights</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="home" class="hero">
  <div>
    <p class="tag">Simple • Accessible • Informative</p>
    <h1>Understand Your Legal Rights Easily</h1>
    <p>LegalEase provides simple legal information and useful guidance in an easy-to-understand format.</p>
    <a class="btn" href="#services">Explore Services</a>
  </div>
</section>

<section id="services" class="section">
<h2>Our Services</h2>
<div class="cards">
  <div class="card"><span>📚</span><h3>Legal Information</h3><p>Learn basic information about common legal topics.</p></div>
  <div class="card"><span>🔎</span><h3>Rights Finder</h3><p>Explore important rights related to everyday situations.</p></div>
  <div class="card"><span>📝</span><h3>Document Guidance</h3><p>Get simple guidance about commonly used legal documents.</p></div>
</div>
</section>

<section id="rights" class="section light">
<h2>Quick Rights Guide</h2>
<div class="guide">
  <button onclick="showInfo('consumer')">Consumer Rights</button>
  <button onclick="showInfo('women')">Women & Child Safety</button>
  <button onclick="showInfo('cyber')">Cyber Safety</button>
  <button onclick="showInfo('work')">Workplace Rights</button>
</div>
<div id="info" class="info">Select a topic to view basic information.</div>
</section>

<section class="section">
<h2>Ask LegalEase</h2>
<p>Type a general legal topic below to get a basic informational response.</p>
<div class="ask-box">
  <input id="question" type="text" placeholder="Example: consumer complaint">
  <button onclick="answerQuestion()">Ask</button>
</div>
<div id="answer" class="answer"></div>
</section>

<section id="contact" class="section contact">
<h2>Contact</h2>
<p>Email: support@legalease.example</p>
<p>Note: LegalEase provides general information and is not a substitute for advice from a qualified lawyer.</p>
</section>

<footer>© 2026 LegalEase | Naan Mudhalvan Project</footer>
<script src="script.js"></script>
</body>
</html>
