// get local storage data
if (!localStorage.getItem(1)) {
  localStorage.setItem(1, JSON.stringify({ id: 2268, chapter: 1 }));
}
let details = JSON.parse(localStorage.getItem(1));

// simple function to create elements with id/classes
function create(tag) {
  if (tag.split("#")[1]) {
    const element = document.createElement(tag.split("#")[0]);
    element.id = tag.split("#")[1];
    return element;
  }
  if (tag.split(".")[1]) {
    const element = document.createElement(tag.split(".")[0]);
    element.classList.add(tag.split(".")[1]);
    return element;
  }
  return document.createElement(`${tag}`);
}

// create status cards with css animation class
const createCards = () => {
  // remove prev cards if they exist
  if (document.querySelector("div.status")) {
    document.querySelector("div.status").remove();
  }
  const form = document.querySelector("form");
  const stats = create("div.status");
  const prev = create("div.prev");
  const prevH1 = create("h1");
  const prevP = create("p");
  const current = create("div.current");
  const currentH1 = create("h1");
  const currentP = create("p");

  currentH1.innerText = details.chapter;
  currentP.innerText = "CURRENT";
  prevH1.innerText = details.chapter - 1;
  prevP.innerText = "CURRENT";

  prev.appendChild(prevH1);
  prev.appendChild(prevP);
  current.appendChild(currentH1);
  current.appendChild(currentP);
  stats.appendChild(prev);
  stats.appendChild(current);
  form.insertBefore(stats, form.firstChild);
};

createCards();

// the function to open comments
// idk the correct url yet, so im using viral hit's url
// since it seems to work lol
const goToComments = () => {
  window.open(
    `https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=${details.id}&episode_no=${details.chapter}`,
    "_blank"
  );
};

const idInput = document.querySelector("input#id");
const chapterInput = document.querySelector("input#chapter");
const readButton = document.querySelector("#read");
const nextButton = document.querySelector("#next");

idInput.value = details.id;
chapterInput.value = details.chapter;

idInput.onchange = () => {
  details.id = +idInput.value;
  localStorage.setItem(1, JSON.stringify(details));
};

chapterInput.onchange = () => {
  details.chapter = +chapterInput.value;
  document.querySelector(".current > h1").innerText = details.chapter;
  localStorage.setItem(1, JSON.stringify(details));
};

readButton.onclick = () => {
  goToComments();
};

nextButton.onclick = () => {
  details.chapter = details.chapter + 1;
  localStorage.setItem(1, JSON.stringify(details));
  chapterInput.value = details.chapter;
  createCards();
  setTimeout(() => {
    goToComments();
  }, 500);
};
