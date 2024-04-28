const link =
  "https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=2268&episode_no=";

if (!localStorage.getItem(1)) {
  localStorage.setItem(1, JSON.stringify({ id: 2268, chapter: 1 }));
}
let details = JSON.parse(localStorage.getItem(1));

const idInput = document.querySelector("input#id");
idInput.placeholder = details.id;
const chapterInput = document.querySelector("input#chapter");
chapterInput.placeholder = details.chapter;
const readButton = document.querySelector("#read");
const nextButton = document.querySelector("#next");
const current = document.querySelector("p");
current.innerText = `Current: ${details.chapter} | Next: ${
  details.chapter + 1
}`;
idInput.onchange = () => {
  details.id = +idInput.value;
  localStorage.setItem(1, JSON.stringify(details));
};
readButton.onclick = () => {
  if (chapterInput.value) {
    details.chapter = +chapterInput.value;
    localStorage.setItem(1, JSON.stringify(details));
  }
  current.innerText = `Current: ${details.chapter} | Next: ${
    details.chapter + 1
  }`;
  window.open(
    `https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=${
      idInput.value ? idInput.value : 2268
    }&episode_no=${details.chapter}`,
    "_blank"
  );
};
nextButton.onclick = () => {
  details.chapter = details.chapter + 1;
  chapterInput.placeholder = details.chapter;
  localStorage.setItem(1, JSON.stringify(details));
  current.innerText = `Current: ${details.chapter} | Next: ${
    details.chapter + 1
  }`;
  window.open(
    `https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=${
      idInput.value ? idInput.value : 2268
    }&episode_no=${details.chapter}`,
    "_blank"
  );
};
