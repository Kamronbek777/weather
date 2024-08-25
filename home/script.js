let elBtn = document.querySelector(".header__burger");
let header = document.querySelector(".header");
let moreBtn = document.querySelector(".section__3__more")
let lessBtn = document.querySelector(".section__3__less")


elBtn.addEventListener("click", () => {
  header.classList.toggle("header__burger--active");
});

moreBtn.addEventListener("click", () => {
  let hided = document.querySelectorAll(".hide");
  hided.forEach((item) => {
    item.classList.toggle("vis");
  });
  moreBtn.classList.add("hide")
});

lessBtn.addEventListener("click", () => {
  let hided = document.querySelectorAll(".hide");
  hided.forEach((item) => {
    item.classList.toggle("vis");
  });
  lessBtn.classList.add("hide")
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const telegramBotToken = '7431454852:AAHCqQOs3StGpfXnMiHXac8Hm5acGV_VBXQ';
  const chatId = '5568772519';
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const data = {
    chat_id: chatId,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});


const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.classList.toggle('dark-mode');
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});

// Set the initial theme based on the user's preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark-mode') {
  document.body.classList.add('dark-mode');
  themeToggle.classList.add('light-mode');
} else {
  document.body.classList.remove('dark-mode');
  themeToggle.classList.remove('light-mode');
}
