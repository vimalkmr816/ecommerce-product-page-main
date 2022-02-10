//opening nav menu in mobile mode
const hamBtn = document.getElementById("ham_btn");
const mobMenu = document.getElementById("mob_menu");
hamBtn.addEventListener("click", openMenu);
function openMenu() {
	mobMenu.classList.toggle("active");
}

//moving images left and right
const prevBtn = document.getElementById("prev_img_btn");
const nextBtn = document.getElementById("next_img_btn");
const mainImg = document.getElementById("main_img");
let imageIndex = 0;
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
function nextImage() {
	mainImg.set;
	console.log("nextimgae");
}
function prevImage() {
	console.log("previmgae");
}

//change quantity of item
let quantity = 0;
const decBtn = document.getElementById("decrement_btn");
const incBtn = document.getElementById("increment_btn");
const quantityDiv = document.getElementById("quantity");
decBtn.addEventListener("click", () => {
	if (quantity) {
		quantityDiv.textContent = `${--quantity}`;
	}
});
incBtn.addEventListener("click", () => {
	quantityDiv.textContent = `${++quantity}`;
});
