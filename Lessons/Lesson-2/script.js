console.log("Hello World!");
console.log("E=mc2");

let h = document.querySelector("h2");
let el = document.querySelector("input");

h.innerHTML = "This is my altered subheading";

let b = document.querySelector("button");

b.addEventListener("click", () => { 
	console.log("The button was clicked!");
	el.value = parseInt(el.value) + 1;
});
