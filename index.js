const li = document.createElement("li");
const ul = document.getElementById("ul");
const text = document.createElement("div");
const btn = document.createElement("button");

const que = {
  q1: "日本の首都は",
  a1: "東京",
};

li.innerText = que.q1;
ul.appendChild(li);
btn.innerText = "答えを表示";
li.appendChild(btn);

const ans = document.createElement("p");

ans.innerText = que.a1;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  text.classList.toggle("no");
  ul.appendChild(text);
  text.appendChild(ans);
});
