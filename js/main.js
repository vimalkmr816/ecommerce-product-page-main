//opening nav menu in mobile mode
const hamBtn = document.getElementById("ham_btn");
const mobMenu = document.getElementById("mob_menu");
const darkBody = document.querySelector(".darken_body");
hamBtn.addEventListener("click", openMenu);
function openMenu() {
	mobMenu.classList.toggle("active");
	darkBody.classList.toggle("active");
}

//moving images left and right
const prevBtn = document.getElementById("prev_img_btn");
const nextBtn = document.getElementById("next_img_btn");
const mainImg = document.getElementById("main_img");
let imageIndex = 1;
let images = [
	"/images/image-product-1.jpg",
	"/images/image-product-2.jpg",
	"/images/image-product-3.jpg",
	"/images/image-product-4.jpg",
];
// mainImg.src = images[0];
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
function nextImage() {
	if (imageIndex <= images.length - 1) {
		console.log(imageIndex);
		mainImg.src = images[imageIndex++];
	} else {
		imageIndex = 0;
		console.log(imageIndex);
		mainImg.src = images[imageIndex++];
	}
}
function prevImage() {
	if (imageIndex > 0) {
		console.log(imageIndex);
		mainImg.src = images[--imageIndex];
	} else {
		console.log(imageIndex);
		imageIndex = images.length;
		mainImg.src = images[--imageIndex];
	}
}

//change quantity of item
let quantity = 0;
const decBtn = document.getElementById("decrement_btn");
const incBtn = document.getElementById("increment_btn");
const quantityDiv = document.getElementById("quantity");
console.log(quantity);
decBtn.addEventListener("click", () => {
	console.log(quantity);
	if (quantity) {
		quantityDiv.textContent = `${--quantity}`;
	}
});
incBtn.addEventListener("click", () => {
	console.log(quantity);
	quantityDiv.textContent = `${++quantity}`;
});

//dynamically update the price of the products
const oldPrice = document.getElementById("original_price");
const discountedPrice = document.getElementById("discount");
const newPrice = document.getElementById("final_price");
function updatePrices() {
	const originalPrice = 2140.0;
	const discount = 25;
	const finalPrice = originalPrice * (1 - discount / 100);
	oldPrice.textContent = "$" + originalPrice;
	discountedPrice.textContent = discount + "%";
	newPrice.textContent = "$" + finalPrice;
}
updatePrices();

//opening cart menu
