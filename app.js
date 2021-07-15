const btn=document.querySelector(".switch-btn");
const video=document.querySelector(".video-container");

btn.addEventListener('click',function()
	{
		if(!btn.classList.contains("slide"))
		{
			btn.classList.add("slide");
			video.pause();
		}
		else
		{
			btn.classList.remove("slide");
			video.play();
		}
	});

const preloade=document.querySelector(".preloader");
window.addEventListener('load',function(){
	preloade.classList.add("hide-preloader");
})