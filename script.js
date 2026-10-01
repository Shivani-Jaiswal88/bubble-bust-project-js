let bubbles = document.querySelector(".game-board")

bubbles.addEventListener("click", (e)=>{
    const bubble = e.target;
    if(!bubble.classList.contains("bubble")) return
    bubble.classList.add("hidden")
})