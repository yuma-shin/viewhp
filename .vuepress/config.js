module.exports = {
  title: 'TsumTsumYuma',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'GitHub', link: 'https://github.com/yuma-shin' }
    ],
    sidebar: {
      // fallback
      '/': [
        '',        /* / */
      ]
    }
  },
  base: '/vuehp/',
  dest: 'docs'
}

