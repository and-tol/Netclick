import "regenerator-runtime/runtime";
import "core-js/stable";

import './css/style.css';

import { leftMenu, hamburger, tvShowsItem, tvCardsImg, tvShowsList, modal } from './js/var';
import { DBService } from './js/DBService';
import { renderCard } from './js/renderCard';


// console.log(new DBService().getTestData());
new DBService().getTestData().then(renderCard)



// * Меню
// открытие/закрытие меню
hamburger?.addEventListener('click', () => {
  leftMenu?.classList.toggle('openMenu');
  hamburger?.classList.toggle('open');
});

// закрытие меню при клике вне меню
document.addEventListener('click', (event: MouseEvent): void => {
  const target: EventTarget | null | undefined = event!.target;

  if (!target!.closest('.left-menu')) {
    leftMenu!.classList.remove('openMenu');
    hamburger!.classList.remove('open');
  }
});

// дроп меню
leftMenu.addEventListener('click', (event: Event): void => {
  const target: EventTarget | null | undefined = event!.target;
  const dropdown: Element | null = target!.closest('.dropdown');

  if (dropdown) {
    dropdown.classList.toggle('active');
    leftMenu!.classList.add('openMenu');
    hamburger!.classList.add('open');
  }
});

// открытие модального окна
tvShowsList!.addEventListener('click', (event: Event): void => {
  event.preventDefault();

  if (event.target!.closest('.tv-card')) {
    // убирает полосу прокрутки окна в браузере
    document.body.style.overflow = 'hidden';
    modal!.classList.remove('hide');
  }
});
// закрытие модального окна
modal!.addEventListener('click', (event: Event): void => {
  if (event.target!.classList.contains('modal') || event.target!.closest('.cross')) {
    document.body.style.overflow = '';
    modal!.classList.add('hide');
  }
});

/**
 * Функция изменяет URL картинки в карточке
 */
const changeImage = (event: Event) => {
  const target: Element = event!.target;
  const card: Element = event.target.closest('.tv-shows__item');

  // 1
  //  if (target.matches('.tv-card__img')) {}

  if (card) {
    const img: Element | null = card.querySelector('.tv-card__img');
    if (img.dataset.backdrop) {
      [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src];
    }
  }
};

tvShowsList!.addEventListener('mouseover', changeImage);
tvShowsList!.addEventListener('mouseout', changeImage);
