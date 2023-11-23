window.onload = function(){

	const prevBtn = document.getElementById('prev');
	const nextBtn = document.getElementById('next');

	const automaticSlide = setInterval(()=>nextSlide(),5000);

	prevBtn.addEventListener("click",function(){
		clearInterval(automaticSlide);
		prevSlide();
	});
	nextBtn.addEventListener("click",function(){
		clearInterval(automaticSlide);
		nextSlide();
	});
};
let slideNo = 0;
const prevSlide = ()=>{
	const slider  = document.getElementById('slider');
	const slides =  slider.getElementsByClassName('slides');
	const currentSlide =  slider.querySelector('.slides.current');

	// logic
	currentSlide.classList.remove("current");
	if(slideNo == 0){
		slideNo = slides.length-1;
	}
	else{
		slideNo = slideNo-1;
	}
	slides[slideNo].classList.add("current");
};
const nextSlide = ()=>{
	const slider  = document.getElementById('slider');
	const slides =  slider.getElementsByClassName('slides');
	const currentSlide =  slider.querySelector('.slides.current');

	// logic
	currentSlide.classList.remove("current");
	if(slideNo == slides.length-1){
		slideNo = 0;
	}
	else{
		slideNo = slideNo+1;
	}
	slides[slideNo].classList.add("current");
};