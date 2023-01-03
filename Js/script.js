let icononscrool = document.getElementById("icononscrool");

window.onscroll = function () {
  if (scrollY >= 400) {
    icononscrool.style.display ="flex";
  } else {
    icononscrool.style.display="none"
  }
};
icononscrool.onclick = function() {
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
