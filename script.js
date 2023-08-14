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
	homeScoreEl.classList.remove("highlight");
	guestScoreEl.classList.remove("highlight");
	popUpEl.classList.remove("hidden");
	popUpEl.classList.add("animated");
	setTimeout(function(){
		popUpEl.classList.add("hidden");
	}, 3000);
})

let highestScore = 0;
let highestScoringTeam = ""; 

homeBtnOneEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) ;
	updateHighestScore("home", Number(homeScoreEl.textContent));
});

homeBtnTwoEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) ;
	updateHighestScore("home", Number(homeScoreEl.textContent));
});

homeBtnThreeEl.addEventListener("click", function(){
	homeScoreEl.textContent = Number(homeScoreEl.textContent) ;
	updateHighestScore("home", Number(homeScoreEl.textContent));
});

guestBtnOneEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) ;
	updateHighestScore("guest", Number(guestScoreEl.textContent));
});

guestBtnTwoEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) ;
	updateHighestScore("guest", Number(guestScoreEl.textContent));
});

guestBtnThreeEl.addEventListener("click", function(){
	guestScoreEl.textContent = Number(guestScoreEl.textContent) ;
	updateHighestScore("guest", Number(guestScoreEl.textContent));
});

// Similar changes for guestBtnTwoEl and guestBtnThreeEl

function updateHighestScore(team, score) {
	if (score > highestScore) {
		highestScore = score;
		highestScoringTeam = team;
		highlightHighestScore();
	}
}

function highlightHighestScore() {
	// Remove highlight from both teams
	homeScoreEl.classList.remove("highlight");
	guestScoreEl.classList.remove("highlight");
	
	// Apply highlight to the team with the highest score
	if (highestScoringTeam === "home") {
		homeScoreEl.classList.add("highlight");
	} else if (highestScoringTeam === "guest") {
		guestScoreEl.classList.add("highlight");
	}
}
