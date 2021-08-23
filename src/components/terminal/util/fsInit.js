import FSNode from './FSNode';
import TextLine from './TextLine';

const rootFs = new FSNode(
  'root',
  null,
  null,
  [
    new FSNode(
      'openWebsite.exec',
      () => {
        open('https://matthajec.com');
        return new TextLine('standard', ['opening https://www.matthajec.com...']);
      },
      null,
      null
    ),
    new FSNode(
      'projects',
      null,
      null,
      [
        new FSNode(
          'netflix-clone.txt',
          null,
          new TextLine(
            'standard',
            [
              'Netflix Clone',
              'https://www.netfx-clone.matthewhajec.dev/',
              'https://github.com/matthajec/netflix-clone',
              '',
              'A Netflix clone using React on the front end and Firebase for the backend',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'movies.txt',
          null,
          new TextLine(
            'standard',
            [
              'React Movie Search',
              'https://www.movies.matthewhajec.dev/',
              'https://github.com/matthajec/movie-search-rebuild',
              '',
              'A MaterialUI themed movie search website using the TMDB search API, including a back end server to handle requests without exposing the private TMDB API key',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'hacker-news.txt',
          null,
          new TextLine(
            'standard',
            [
              'Hacker News Client',
              'https://www.hackernews.matthewhajec.dev/top',
              'https://github.com/matthajec/hacker-news-clone',
              '',
              'A front end project built with React that shows articles from hacker news, you can sort by best, top, or new articles',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'where-in-the-world.txt',
          null,
          new TextLine(
            'standard',
            [
              'Where in the world',
              'https://www.countries.matthewhajec.dev/',
              'https://github.com/matthajec/react-countries-app',
              '',
              'A front end project built in React that uses an API to fetch data about different countries',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'sorting-algorithms.txt',
          null,
          new TextLine(
            'standard',
            [
              'Simple Sorting Algorithms',
              'https://www.sorts.matthewhajec.dev/',
              'https://github.com/matthajec/simple-sorting-algoriths',
              '',
              'This is a front end project built with Bootstrap and jQuery that shows the user a visualization of the bubble, selection, and insertion sorting algorithms.',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'whereintheworld.txt',
          null,
          new TextLine(
            'standard',
            [
              'Where in the world?',
              'https://www.whereintheworld.matthajec.com/',
              'https://github.com/matthajec/react-countries-app',
              '',
              'This is a front end project built with React that arguably shows all of the worlds countries, you can sort by region and/or search by name.',
              'Check out the readme on github for more info'
            ]
          )
        )
      ]
    )
  ]
);

export default rootFs;
