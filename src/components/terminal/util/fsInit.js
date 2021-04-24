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
        )
      ]
    )
  ]
);

export default rootFs;