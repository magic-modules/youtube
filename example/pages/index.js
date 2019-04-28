module.exports = {
  View: () =>
    div([
      h1('@magic-modules/video-embed'),
      p([
        'this is the ',
        Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
        ' VideoEmbed component. It renders videos from any http url that allows iframe embedding.',
      ]),

      GitBadges({
        project: 'magic-modules/video-embed',
        appveyor: 'jaeh/video-embed',
      }),

      h2({ id: 'installation' }, 'installation:'),
      p([
        'installation is done using npm. ',
        ' for now, all magic modules live on github and not on npm.',
      ]),
      p('note the missing @ before magic-modules.'),
      p('this is how we install npm modules from github.'),

      Pre.View(`
npm install magic-modules/video-embed
`),

      h2({ id: 'require' }, 'require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  VideoEmbed: require('@magic-modules/video-embed'),
}`),
      h2({ id: 'usage' }, 'usage'),

      h3('youtube'),
      p('in a page/component, just pass a video id to the VideoEmbed module.'),
      Pre.View("VideoEmbed('ecIWPzGEbFc')"),
      p('renders'),
      VideoEmbed('ecIWPzGEbFc'),

      h3('vimeo'),
      p('if the video id is a number, the video is assumed to be hosted on vimeo'),
      Pre.View(`
VideoEmbed(153090637)
VideoEmbed('153090637')`),

      p('renders'),
      VideoEmbed(153090637),

      h4({ id: 'other-video-hosts' }, 'other video hosts'),
      p(
        'videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds',
      ),
      Pre.View("VideoEmbed('https://videopress.com/embed/kUJmAcSf')"),

      p('renders'),
      VideoEmbed('https://videopress.com/embed/kUJmAcSf'),

      h2({ id: 'props' }, 'props'),
      p('you can pass a width and height, a style string and any other props to the video.'),
      ,
      Pre.View("VideoEmbed({ src: '8QYWGCEm2Dc', width: '50%', style: 'margin: 1em 0 0;' })"),

      p('renders'),
      VideoEmbed({ src: '8QYWGCEm2Dc', width: '50%' }),

      h3({ id: 'fixed-dimensions' }, 'fixed video dimensions'),
      p(
        'to set a fixed video size, simply add both a height and a width value (px, em, rm, vh, pt).',
      ),
      Pre.View("VideoEmbed({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' })"),
      VideoEmbed({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' }),

      h2({ id: 'source' }, 'source'),
      p([
        'the source for this page is in the ',
        Link(
          { to: 'https://github.com/magic-modules/video-embed/tree/master/example' },
          'example directory',
        ),
        ' and gets built and published to github using ',
        Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
      ]),
    ]),
}