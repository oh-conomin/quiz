//const table=document.getElementById("table");
const li = document.createElement("li");
const ul = document.getElementById("ul");
const text=document.createElement("div");

li.innerText = "問題";
ul.appendChild(li);
const btn = document.createElement("button");
btn.innerText = "解答";
li.appendChild(btn);

btn.addEventListener("click", function (e) {
  const ans = document.createElement("p");

  ans.innerText="答え";
  ul.appendChild(text);
  text.appendChild(ans);
  
  
  //const displayOriginal = text.style.display;
 // text.style.display = 'none';
  //text.style.display = displayOriginal;
 
},
{ once: true 
} );
