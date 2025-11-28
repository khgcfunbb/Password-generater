let get = document.querySelector("#btn");
let copy = document.querySelector("#copybtn");
let text = document.querySelector("p");
let range = document.querySelector("input");
let span = document.querySelector("span");
let a = document.querySelector(".box #a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

(function x() {
  span.textContent = range.value;
})();

range.addEventListener("input", () => {
  span.textContent = range.value;
});

get.addEventListener("click", () => {
  text.innerText = rand();
});

function rand() {
  let str = "";
  let g = "";

  let a1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b1 = "abcdefghijklmnopqrstuvwxyz";
  let c1 = "1234567890";
  let d1 = "~^_-!~^_-!~^_-!";

  str += a.checked ? a1 : (a1 = "");
  str += b.checked ? b1 : (b1 = "");
  str += c.checked ? c1 : (c1 = "");
  str += d.checked ? d1 : (d1 = "");

  let i = 1;
  while (i <= range.value) {
    g += str.charAt(Math.floor(Math.random() * str.length));
    i++;
  }
  return g;
}

copy.addEventListener("click", (e) => {
  navigator.clipboard.writeText(text.innerText);
  copy.title = "password copied";
});
