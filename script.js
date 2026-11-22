// Update this address before publishing so quote requests go to you.
const BUSINESS_EMAIL = 'ottobrowne8@gmail.com';

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  const subject = encodeURIComponent(`Quote request — ${service}`);
  const body = encodeURIComponent(`Hi Otto,\n\nMy name is ${name}.\nI'm interested in: ${service}\n\nJob details:\n${details || 'No details provided yet.'}\n\nPlease let me know a quote.\nThanks!`);
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
