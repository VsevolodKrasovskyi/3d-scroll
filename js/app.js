// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0.3
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}
window.scrollTo(0, 1)


//popup 

let popup = document.getElementById("popup1");

function openPopup1(){
	popup.classList.add("open_popup");
}
function closePopup1(){
	popup.classList.remove("open_popup");
};


let popup2 = document.getElementById("popup2");

function openPopup2(){
	popup2.classList.add("open_popup");
}
function closePopup2(){
	popup2.classList.remove("open_popup");
};
