export default function scrollContainer(btnRefs, containerRefs, toggleClass) {
  btnRefs.classList.toggle(toggleClass);
  if (btnRefs.classList.contains(toggleClass)) {
    containerRefs.scrollTop = containerRefs.scrollHeight;
  } else {
    containerRefs.scrollTop = 0;
  }
}
