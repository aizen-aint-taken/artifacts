const art = [
  // JAPANESE ARTS AND CULTURE
  {
    id: 1,
    c: "jp",
    n: "Shodō (Japanese Calligraphy)",
    m: "Japan · Traditional art",
    d: "Shodō is the traditional Japanese art of writing using brushes and ink. It expresses beauty, discipline, and inner peace through carefully created characters.",
    i: "M12 10h40v44H12zM18 18h28M18 26h22M18 34h26M18 42h18M32 8l-8 38M28 46l8 8"
  },
  {
    id: 2,
    c: "jp",
    n: "Urushi Lacquerware (Japanese Lacquer Art)",
    m: "Japan · Traditional craftsmanship",
    d: "Urushi is a traditional Japanese craft that uses tree sap to create durable, glossy objects. It is often decorated with gold or silver designs and represents patience and craftsmanship.",
    i: "M10 20h44v34H10zM16 20V12h32v8M18 30q8-12 14 0t14 0M20 42l8-6 8 6 8-6"
  },
  {
    id: 3,
    c: "jp",
    n: "Aizome (Japanese Indigo Dyeing)",
    m: "Japan · Traditional textile art",
    d: "Aizome is the traditional Japanese technique of dyeing fabric using natural indigo plants. It produces beautiful blue shades and is commonly used for clothing and textiles.",
    i: "M10 8h44v48H10zM10 20h44M10 32h44M10 44h44M22 8v48M34 8v48M46 8v48"
  },
  {
    id: 4,
    c: "jp",
    n: "Koto (Japanese String Instrument)",
    m: "Japan · Traditional music",
    d: "The koto is a traditional Japanese musical instrument with 13 strings. It is played by plucking the strings and is known for its gentle, elegant sound.",
    i: "M6 24h52v16H6zM12 20v24M20 20v24M28 20v24M36 20v24M44 20v24M52 20v24M10 28h44M10 36h44"
  },

  // PHILIPPINE ARTS AND CULTURE — MARANAO
  {
    id: 5,
    c: "ph",
    n: "Sarimanok (The Legendary Royal Bird)",
    m: "Maranao · Lanao del Sur, Mindanao",
    d: "The Sarimanok is a colorful mythical bird from Maranao culture. It symbolizes good fortune, prosperity, and cultural pride.",
    i: "M14 40c0-14 10-22 22-18l10-10 2 12c6 4 6 14 0 18l-8 6-6 12-4-12c-10 0-16-4-16-8z"
  },
  {
    id: 6,
    c: "ph",
    n: "Okir (Traditional Maranao Woodcarving)",
    m: "Maranao · Lanao del Sur, Mindanao",
    d: "Okir is a traditional Maranao art featuring intricate patterns inspired by plants, leaves, and flowing designs. It is commonly found on traditional houses and decorative objects.",
    i: "M8 48q12-36 26-24t20 0M12 54q12-18 22-12t18-12M20 30q-8-12 0-18t14 6M34 40q-4-12 8-16t12 8"
  },
  {
    id: 7,
    c: "ph",
    n: "Langkit (Maranao Traditional Weaving)",
    m: "Maranao · Lanao del Sur, Mindanao",
    d: "Langkit is a colorful woven textile made by Maranao artisans. It features geometric patterns and is commonly used to decorate traditional malong garments.",
    i: "M8 8h48v48H8zM8 20h48M8 32h48M8 44h48M20 8v48M32 8v48M44 8v48"
  },
  {
    id: 8,
    c: "ph",
    n: "Kulintang (Traditional Gong Ensemble)",
    m: "Maranao · Lanao del Sur, Mindanao",
    d: "The kulintang is a traditional musical instrument consisting of several small gongs arranged in a row. It is played during celebrations, ceremonies, and community gatherings.",
    i: "M8 22h48v28H8zM12 18h6v10h-6zM22 14h6v14h-6zM32 10h6v18h-6zM42 14h6v14h-6zM52 18h4v10h-4zM14 50v8M50 50v8"
  }
];

const grid = document.getElementById("grid");
const dlg = document.getElementById("dlg");
const dbody = document.getElementById("dbody");

// =========================
// RENDER ARTIFACTS
// =========================

function render(f) {
  grid.innerHTML = "";

  const filtered = art.filter(
    a => f === "all" || a.c === f
  );

  filtered.forEach(a => {
    const b = document.createElement("button");

    b.className = "item " + a.c;

    b.innerHTML = `
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="${a.i}"/>
      </svg>
      <b>${a.n}</b>
      <span>${a.m}</span>
    `;

    b.addEventListener("click", () => {
      dbody.innerHTML = `
        <span class="meta">
          ${a.c === "ph" ? "Philippines" : "Japan"}
        </span>

        <h3 id="dt">${a.n}</h3>

        <p class="meta">${a.m}</p>

        <p>${a.d}</p>
      `;

      dlg.showModal();
    });

    grid.appendChild(b);
  });
}

// =========================
// COUNTRY FILTERS
// =========================

document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => {

    document.querySelectorAll(".tab").forEach(x => {
      x.setAttribute("aria-pressed", x === t ? "true" : "false");
    });

    render(t.dataset.f);
  });
});

// =========================
// MODAL CONTROLS
// =========================

document.getElementById("close").addEventListener("click", () => {
  dlg.close();
});

dlg.addEventListener("click", e => {
  if (e.target === dlg) {
    dlg.close();
  }
});

// =========================
// INITIAL RENDER
// =========================

render("all");

// =========================
// EMAIL SIGNUP
// =========================

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const v = document.getElementById("email").value.trim();
  const m = document.getElementById("msg");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {

    m.style.color = "var(--ph)";
    m.textContent = "Thank you. We will email you at launch.";

    e.target.reset();

  } else {

    m.style.color = "var(--jp)";
    m.textContent = "Enter a valid email address, like name@example.com.";

  }
});
