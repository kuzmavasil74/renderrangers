export default function animatedCardsFunction(animatedCards) {
  animatedCards.forEach(card => {
    card.classList.add('animation-items');
  });
  const disappearance = setTimeout(() => {
    animatedCards.forEach(card => {
      card.classList.remove('animation-items');
    });
  }, 500);
}
