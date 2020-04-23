module.exports = {
  title: '山口研究室',
  description: '千葉工業大学 山口研究室',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '研究室紹介', link: '/about/' },
      { text: 'メンバー', link: '/member/' },
      { text: '環境', link: '/environment/' },
      { text: 'スケジュール', link: '/schedule/' },
      { text: '千葉工業大学', link: 'https://www.it-chiba.ac.jp/' },
      { text: '千葉工業大学情報工学科', link: 'http://www.cs.it-chiba.ac.jp/' },
    ],
    sidebar: [
      '/about/',
      '/member/',
      '/environment/',
      '/schedule/'
    ],
    search: false,
    home: true,
    logo: '/assets/img/logo.png'
  }
}