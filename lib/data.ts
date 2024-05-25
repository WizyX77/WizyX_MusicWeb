import WizyxUptime from '@/public/images/WizyXBotPp.png'
import WizyxMusic from '@/public/images/WizyXMusic.png'


export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Blog',
    id: 'projects',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
  {
    name: 'Policy',
    id: 'policy',
  },
] as const

export const images = {
  WizyxUptime,
}

export const projectsData = [
  {
    title: 'WizyX Duyuruları',
    description:
      'WizyX Music Ve Diğer Botlarımız İle İlgili Tüm Duyurularımızı Discord Adresimizden Takip Edebilirsiniz. Discord Sunucumuza Gelerek Bize Ücretsiz Destek Olabilirsiniz.',
    tags: [
      'Version',
      'Bakım',
      'Discord'
    ],
    imageUrl: WizyxUptime,
    link: 'https://discord.gg/Dv5Mj9UPKv',
  },

  {
    title: 'WizyX Bot',
    description:
      '7/24 Kesintisiz, En Gelişmiş Moderasyon, Kullanıcı, Eğlence Komutlarıyla Discord Sunucunuzun En Gelişmiş Botu! 🔥 Wizyx Bot Sahibi Tarafından...',
    tags: [
      'Javascript',
      'Typescript',
      'Node.js'
    ],
    imageUrl: WizyxMusic,
    link: 'https://wizyxuptime.vercel.app/',
  },

  {
    title: 'WizyX Uptime',
    description:
      'Yaptığınız Datlış Uygulamalarınızı 7/24 Kesintisiz Bir Şekilde Aktif Tutabileceğiniz Güvenilir Bir Mekandır! (Glitch Üzerinden) 🔥 Wizyx Bot Sahibi Tarafından...',
    tags: [
      'Html',
      'Css',
      'Javascript'
    ],
    imageUrl: WizyxUptime,
    link: 'https://wizyxuptime.vercel.app/',
  },

] as const

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['React', '/svgs/react.svg'],
  ['Git', '/svgs/git.svg'],
  ['Html', '/svgs/file-type-html.svg'],
  ['Css', '/svgs/file-type-css.svg'],
] as const
