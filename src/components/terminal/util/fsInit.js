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
          'imagehost.txt',
          null,
          new TextLine(
            'standard',
            [
              'imagehost',
              'https://imagehost.matthajec.com',
              'https://github.com/matthajec/imagehost-client',
              '',
              'This is a full stack project built with React and NodeJs. You can upload a jpg, jpeg, png, and webp file < 2mb, then you get a URL you can use to share your image',
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
              'Movie Search App',
              'https://movies.matthajec.com',
              'https://github.com/matthajec/movie-search-rebuild',
              '',
              'This is a "full" stack project built with React and NodeJs. The backend is the just a sort of proxy, it queries the RESTful API and sends back the results so that the API key is not exposed. In the front end, you can see trending movies, search for movies, and see information about movies.',
              'Check out the readme on github for more info'
            ]
          )
        ),
        new FSNode(
          'hackernews.txt',
          null,
          new TextLine(
            'standard',
            [
              'Hacker news app',
              'https://hackernews.matthajec.com',
              'https://github.com/matthajec/hacker-news-clone',
              '',
              'This is a front end project built with React that shows articles from hackernews. You can sort by best, top, or new articles.',
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
              'https://www.sorting-algorithms.matthajec.com/',
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
