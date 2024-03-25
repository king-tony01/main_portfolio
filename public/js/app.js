const progress = document.querySelectorAll(".progress");
progress.forEach((bar) => {
  const width = bar.getAttribute("data-width");
  bar.style.setProperty("--width", `${width}%`);
  const indicator = bar.querySelector(":before");
});

document.addEventListener("mousemove", star, false);

function star(data) {
  const star = document.createElement("i");
  star.className = "fas fa-star";
  star.style.left = `${data.x}px`;
  star.style.top = `${data.y}px`;
  star.style.color = randomColor();
  document.body.appendChild(star);
  setTimeout(() => {
    document.querySelector(".fa-star").remove();
  }, 2000);
}

function randomColor() {
  const colors = ["#ff00d4", "#00f2ff", "#00ff91", "#ff7300", "#09ff00"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const cards = document.querySelectorAll(".attri-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

const nav = document.querySelector("nav");
const about = document.querySelector(".about");
window.addEventListener("scroll", () => {
  if (window.scrollY > about.offsetTop) {
    nav.classList.add("nav");
  } else {
    nav.classList.remove("nav");
  }
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { root: null, threshold: 0.1 }
);

document.querySelectorAll(".fly").forEach((ele) => {
  observer.observe(ele);
});

const progressObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { root: null, threshold: 1.0 }
);

document.querySelectorAll(".progress").forEach((bar) => {
  progressObserver.observe(bar);
});
