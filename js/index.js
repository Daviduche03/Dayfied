//Slide control

var slideIndex = 1
showSlides(slideIndex);

function plusSlides (n) {
				showSlides(slideIndex += n);
}

function currentSlide (n) {
				showSlides(slideIndex = n);
}

function showSlides (n) {
				var i;
				var slides = document.getElementsByClassName("myslides")
				var dots = document.getElementsByClassName("dot")
				
				if (n > slides.length){
								slideIndex = 1
				}
				if (n < 1) {
								slideIndex = slides.length
				}
				for (i = 0; i < slides.length; i++){
								slides[i].style.display = 'none';
				}
				slides[slideIndex-1].style.display = "block";
}

//menu
let icon = document.querySelector("#icon")
let nav = document.querySelector(".nav-bar")
let close_btn = document.querySelector("#close-btn")


icon.addEventListener('click', () => {
				nav.style.width = "75%"
})

close_btn.addEventListener('click', () => {
				nav.style.width = "0"
})


let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let num3 = document.querySelector("#num3")

const counter = (number , start,end , duration) => {
				let startTime = null
				const step = (timestamp) => {
								if (!timestamp){
												startTime = timestamp
								}
								
								let progress = Math.min((timestamp - startTime) / duration , 1)
								number.innerHTML = Math.floor(progress * (end - start) + start)
								
								if (progress <1) {
												window.requestAnimationFrame(step)
								}
				}
				window.requestAnimationFrame(step)
}


counter(num1 , 0 , 30 , 5000)
counter(num2 , 0 , 48 , 5000)
counter(num3 , 0 , 7220 , 5000)