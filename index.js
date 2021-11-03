//const table=document.getElementById("table");
const li = document.createElement("li");
const ul = document.getElementById("ul");
const text = document.createElement("div");
const an = document.getElementById("an");

const que={
  q1:"日本の首都は",
  a1:"東京"
};


li.innerText = que.q1;
ul.appendChild(li);
const btn = document.createElement("button");
btn.innerText ="答えを表示";
li.appendChild(btn);

btn.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    const ans = document.createElement("p");

    ans.innerText = an.value;
    ul.appendChild(text);
    text.appendChild(ans);
    an.value="";
  },{ once: true
   });
