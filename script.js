const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const style = document.getElementById("style").value;
  const trail = document.getElementById("trail").value;
  const pref  = document.getElementById("pref").value;

  // Placeholder logic—I'll wire real recommendations next.
  result.textContent = `Great! For ${style} on ${trail} with ${pref}, I’ll suggest a tire in the next step.`;
});
