//your JS code here. If required.
const panels = document.getElementsByClassName("panel")
const imgtext = document.getElementsByClassName("img-text")
let curr = 0
for (let i = 0; i < panels.length; i++) {
	panels[i].addEventListener("click",()=>{
		panels[curr].classList.remove("active")
		panels[i].classList.add("active")
        imgtext[i].classList.remove("disp")
		imgtext[curr].classList.add("disp")
		curr = i
	})
}