function toggleCircleIcon() {
  const newCircleIcon = document.querySelector(".new-circle");
  
  const iconDisplayValue = newCircleIcon.style.display;
  
  if(iconDisplayValue == "none") {
    newCircleIcon.style.display = "block";
  } else {
    newCircleIcon.style.display = "none";
  }
}

setInterval(toggleCircleIcon, 500);