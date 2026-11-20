const form = document.querySelector("#tour-form");
const date = form.elements.namedItem("date");
const age = form.elements.namedItem("age");
const group = form.elements.namedItem("group");
const preview = document.querySelector("#request-preview");
const heading = document.querySelector("#preview-title");

const todayInChelyabinsk = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Yekaterinburg",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const displayDate = new Intl.DateTimeFormat("ru-RU", {
  dateStyle: "long",
  timeZone: "UTC",
});

date.min = todayInChelyabinsk.format(new Date());
form.querySelector('button[type="submit"]').disabled = false;

form.addEventListener("input", () => {
  preview.hidden = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#preview-date").textContent = displayDate.format(date.valueAsDate);
  document.querySelector("#preview-age").textContent = age.value.trim();
  document.querySelector("#preview-group").textContent = group.value;
  preview.hidden = false;
  heading.focus();
});
