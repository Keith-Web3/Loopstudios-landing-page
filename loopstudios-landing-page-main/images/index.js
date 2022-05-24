const navToggle = document.getElementById("nav-toggle")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3")
const sideBar = document.querySelector("aside")

hasClickedToggle = false

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  sideBar.style.transform = "translateX(0)"
  sideBar.style.opacity = "1"
  sideBar.style.transition = "transform 300ms 2ms linear, opacity 0ms linear"
  hasClickedToggle = true
} else {
  lineOne.style.transform = "rotate(0deg) translateY(-50%)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg) translateY(50%)"
  sideBar.style.transform = "translateX(100%)"
  sideBar.style.opacity = "0"
  sideBar.style.transition = "transform 300ms linear, opacity 300ms linear"
  hasClickedToggle = false
}
})