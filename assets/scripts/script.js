function handleMouseEnter() {
    // console.log('handle mouse enter called', this)
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

    }

}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)

function selectCarouselItem(selectedCarouselButtonElement){
    const selectedItem = selectedCarouselButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYdeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYdeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedCarouselButtonElement.classList.add('s-controller__button--active')

    console.log(rotateY);
    console.log(newTransform);
}