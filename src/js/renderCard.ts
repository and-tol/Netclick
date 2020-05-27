import { tvShowsList } from './var';

/**
 * Функция
 */
export const renderCard = (response: { results: [] }) => {
  console.log(response.results);
  tvShowsList!.textContent = ''

  response.results.forEach((item: []) => {
    const card: Element = document.createElement('li');

    card.classList.add('tv-shows__item');
    card.innerHTML = `
            <a href="#" class="tv-card">
              <img
                class="tv-card__img"
                src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/cPWxWAlsJw1QVNNuufPzZzebVtY.jpg"
                data-backdrop="https://image.tmdb.org/t/p/w185_and_h278_bestv2/3bBC4u27W4TfOkCVKds7nofJCfe.jpg"
                alt="Star Wars: Jedi Temple Challenge"
              />
              <h4 class="tv-card__head">Star Wars: Jedi Temple Challenge</h4>
            </a>
           `;

    tvShowsList!.after(card);
  });
};
