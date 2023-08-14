//define the variables

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeBtnOneEl = document.getElementById("home-btn-1-el"); 
let homeBtnTwoEl = document.getElementById("home-btn-2-el"); 
let homeBtnThreeEl = document.getElementById("home-btn-3-el"); 

let guestBtnOneEl = document.getElementById("guest-btn-1-el"); 
let guestBtnTwoEl = document.getElementById("guest-btn-2-el"); 
let guestBtnThreeEl = document.getElementById("guest-btn-3-el"); 

let resetBtn = document.getElementById("reset-btn");
let popUpEl = document.getElementById("pop-up-el");

//home score count

homeBtnOneEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
})

homeBtnTwoEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
})

homeBtnThreeEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
})

//guest score count 

guestBtnOneEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1;
})

guestBtnTwoEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
})

guestBtnThreeEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
})

resetBtn.addEventListener("click", function(){
	homeScoreEl.textContent = 0;
	guestScoreEl.textContent = 0;
	popUpEl.classList.remove("hidden");
	popUpEl.classList.add("animated");
	setTimeout(function(){
		popUpEl.classList.add("hidden");
	}, 3000);
})

