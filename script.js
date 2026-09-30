/* ---------- Document Generator ---------- */
const DOCS = {
  rental: {
    name: "Rental Agreement",
    fields: { landlord: "Landlord name", tenant: "Tenant name", address: "Property address", rent: "Monthly rent (Rs.)", deposit: "Security deposit (Rs.)", months: "Duration (months)" },
    text: d => `RENTAL AGREEMENT\n\nThis agreement is made on ${d.today} between ${d.landlord} (Landlord) and ${d.tenant} (Tenant).\n\n1. The Landlord lets the property at ${d.address} to the Tenant.\n2. Monthly rent is Rs. ${d.rent}, payable on or before the 5th of every month.\n3. A refundable security deposit of Rs. ${d.deposit} is paid by the Tenant.\n4. The tenancy is for ${d.months} months from the date of this agreement.\n5. Either party may terminate with one month's written notice.\n\nLandlord: ${d.landlord}        Tenant: ${d.tenant}`,
    tips: d => [+d.months > 11 ? "Tenancy over 11 months should be registered." : "An 11-month agreement usually avoids mandatory registration.", "Add a yearly rent increase clause (e.g., 5%).", "Mention who pays maintenance and utility bills."]
  },
  nda: {
    name: "Non-Disclosure Agreement",
    fields: { party_a: "First party name", party_b: "Second party name", purpose: "Purpose of sharing information", years: "Validity (years)" },
    text: d => `NON-DISCLOSURE AGREEMENT\n\nThis NDA is made on ${d.today} between ${d.party_a} and ${d.party_b}.\n\n1. Purpose: the parties will share confidential information for ${d.purpose}.\n2. The receiving party shall not disclose or misuse such information.\n3. This obligation continues for ${d.years} years from the date above.\n4. Disputes are subject to the jurisdiction of Indian courts.\n\nSigned: ${d.party_a}        ${d.party_b}`,
    tips: () => ["Define clearly what is NOT confidential.", "Add a clause on return or destruction of materials.", "Specify penalties for breach."]
  },
  affidavit: {
    name: "Affidavit",
    fields: { name: "Your name", father_name: "Father's name", age: "Age", address: "Address", statement: "Statement to declare" },
    text: d => `AFFIDAVIT\n\nI, ${d.name}, son/daughter of ${d.father_name}, aged ${d.age} years, residing at ${d.address}, do hereby solemnly affirm and state that:\n\n${d.statement}\n\nI declare that the above statement is true to the best of my knowledge and belief.\n\nDate: ${d.today}\nDeponent: ${d.name}`,
    tips: () => ["Print on stamp paper of the value required in your state.", "Get it notarised or attested by a Notary.", "Keep the statement factual and specific."]
  }
};

const $ = id => document.getElementById(id);
let currentDoc = "";

$("docType").innerHTML = Object.entries(DOCS).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join("");

function renderFields() {
  const f = DOCS[$("docType").value].fields;
  $("fields").innerHTML = Object.entries(f).map(([k, label]) =>
    `<label for="f_${k}">${label}</label>` +
    (k === "statement" ? `<textarea id="f_${k}" rows="3"></textarea>` : `<input id="f_${k}" type="text">`)
  ).join("");
}

function generateDoc() {
  const doc = DOCS[$("docType").value];
  const d = { today: new Date().toLocaleDateString("en-GB") };
  for (const k in doc.fields) d[k] = $("f_" + k).value.trim() || "________";
  currentDoc = doc.text(d);
  $("docText").textContent = currentDoc;
  $("tips").innerHTML = "<b>🤖 Smart suggestions:</b><ul>" + doc.tips(d).map(t => `<li>${t}</li>`).join("") + "</ul>";
  $("result").style.display = "block";
  $("result").scrollIntoView({ behavior: "smooth" });
}

function downloadDoc() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([currentDoc], { type: "text/plain" }));
  a.download = DOCS[$("docType").value].name.replace(/\s+/g, "_") + ".txt";
  a.click();
}

/* ---------- Quick Rights Guide ---------- */
const INFO = {
  consumer: "Consumer Rights: right to safety, information, choice and to be heard. You can file a complaint in the Consumer Commission for defective goods or poor service under the Consumer Protection Act, 2019. Helpline: 1915.",
  women: "Women & Child Safety: Women can file a Zero FIR at any police station. Helplines: Women 181, Child 1098, Police 112. The POSH Act protects women from sexual harassment at the workplace.",
  cyber: "Cyber Safety: Report online fraud at cybercrime.gov.in or call 1930. Never share OTP or passwords. The IT Act, 2000 covers cyber offences such as hacking and identity theft.",
  work: "Workplace Rights: Right to minimum wages, fixed working hours, safe conditions and timely salary. Provident Fund, ESI and maternity benefits apply as per law."
};
function showInfo(topic) { $("info").textContent = INFO[topic]; }

/* ---------- Ask LegalEase (keyword based) ---------- */
function answerQuestion() {
  const q = $("question").value.toLowerCase().trim();
  let res = "Please try a topic like consumer, rental, cyber, women, salary or affidavit.";
  if (!q) res = "Please type a topic first.";
  else if (q.includes("consumer") || q.includes("complaint")) res = INFO.consumer;
  else if (q.includes("women") || q.includes("child") || q.includes("harass")) res = INFO.women;
  else if (q.includes("cyber") || q.includes("online") || q.includes("fraud")) res = INFO.cyber;
  else if (q.includes("work") || q.includes("salary") || q.includes("job")) res = INFO.work;
  else if (q.includes("rent")) res = "Rental: a written agreement, rent receipts and a clear deposit clause protect both landlord and tenant. Use the Document Generator above.";
  else if (q.includes("affidavit")) res = "An affidavit is a sworn written statement, usually made on stamp paper and notarised. You can generate one above.";
  $("answer").textContent = res;
}

renderFields();
