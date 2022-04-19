function onHamburgClick() {
  let navSection = document.querySelector("#nav-section");
  let list = navSection.classList.value;
  if (list === "") {
    navSection.classList.add("show");
  } else {
    navSection.classList.remove("show");
  }
}
