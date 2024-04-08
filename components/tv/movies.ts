export type Movie = {
  poster: string
  name: string
}

export const movies = [
  {
    poster: '/img/apple-tv-rebuild/airplane.webp',
    name: 'Airplane',
  },
  {
    poster: '/img/apple-tv-rebuild/family-man.webp',
    name: 'Family man',
  },
  {
    poster: '/img/apple-tv-rebuild/laboratory.webp',
    name: 'Laboratory',
  },
  {
    poster: '/img/apple-tv-rebuild/napoleon.webp',
    name: 'Napoleon',
  },
  {
    poster: '/img/apple-tv-rebuild/person-in-darkness.webp',
    name: 'Person in Darkness',
  },
  {
    poster: '/img/apple-tv-rebuild/scary-building.webp',
    name: 'Scary Building',
  },
  {
    poster: '/img/apple-tv-rebuild/stars.webp',
    name: 'Stars',
  },
]

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5)
