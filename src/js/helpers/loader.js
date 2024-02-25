export function getLoader(act = 'show') {
  const loader = document.querySelector('.loader');
  if (act === 'show') {
    loader.style.display = 'inline-block';
  } else {
    loader.style.display = 'none';
  }
}
