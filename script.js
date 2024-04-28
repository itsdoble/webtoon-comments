const link =
  "https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=2268&episode_no=";

const idInput = document.querySelector("input#id");
const chapterInput = document.querySelector("input#chapter");
const readButton = document.querySelector("#read");
const nextButton = document.querySelector("#next");
const current = document.querySelector("p");
let chapter = 1;
current.innerText = `Current: ${chapter} | Next: ${chapter + 1}`;
readButton.onclick = () => {
  if (chapterInput.value) {
    chapter = chapterInput.value;
  }
  current.innerText = `Current: ${chapter} | Next: ${chapter + 1}`;
  window.open(
    `https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=${
      idInput.value ? idInput.value : 2268
    }&episode_no=${chapter}`,
    "_blank"
  );
};
nextButton.onclick = () => {
  chapter = chapter + 1;
  current.innerText = `Current: ${chapter} | Next: ${chapter + 1}`;
  window.open(
    `https://m.webtoons.com/en/action/viral-hit/ep-59-i-expected-nothing-out-of-the-ordinary-to-happen/comment?title_no=${
      idInput.value ? idInput.value : 2268
    }&episode_no=${chapter}`,
    "_blank"
  );
};
