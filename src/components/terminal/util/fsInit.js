import FSNode from './FSNode';

const rootFs = new FSNode(
  'root',
  null,
  null,
  [
    new FSNode(
      'openWebsite.exec',
      () => {
        open('https://matthajec.com');
        return ['opening https://matthajec.com'];
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
          [
            'imagehost',
            'https://imagehost.matthajec.com',
            'https://github.com/matthajec/imagehost-client',
            '',
            'This is a full stack project built with React and NodeJs. You can upload a jpg, jpeg, png, and webp file < 2mb, then you get a URL you can use to share your image',
            'Check out the readme on github for more info'
          ]
        ),

      ]
    )
  ]
);

export default rootFs;