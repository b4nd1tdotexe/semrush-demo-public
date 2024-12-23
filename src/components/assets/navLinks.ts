export type NavLink = {
  title: string
  link: string
  external: boolean
  new: boolean
} | {
  title: string
  sub: NavLink[]
  new: boolean
}

export const navLinks = [
  {
    title: 'Features',
    link: 'https://www.semrush.com/features/',
    external: false,
    new: false
  },
  {
    title: 'Pricing',
    link: 'https://www.semrush.com/features/',
    external: false,
    new: false
  },
  {
    title: 'Resources',
    sub: [
      {
        title: 'Blog',
        link: 'https://www.semrush.com/blog/',
        external: false,
        new: false
      },
      {
        title: 'Help Center',
        link: 'https://www.semrush.com/kb/',
        external: false,
        new: false
      },
      {
        title: 'What\'s New',
        link: 'https://www.semrush.com/news/releases/product-news/',
        external: false,
        new: false
      },
      {
        title: 'Webinars',
        link: 'https://www.semrush.com/academy/webinars/',
        external: false,
        new: false
      },
      {
        title: 'Insights',
        link: 'https://www.semrush.com/news/releases/data-insights/',
        external: false,
        new: false
      },
      {
        title: 'Hire a Trusted Agency',
        link: 'https://www.semrush.com/agencies/',
        external: false,
        new: false
      },
      {
        title: 'Academy',
        link: 'https://www.semrush.com/academy/',
        external: false,
        new: false
      },
      {
        title: 'Top Websites',
        link: 'https://www.semrush.com/website/',
        external: false,
        new: false
      },
      {
        title: 'GoodContent Hub',
        link: 'https://www.semrush.com/goodcontent/',
        external: false,
        new: false
      },
      {
        title: 'Local Marketing Hub',
        link: 'https://www.semrush.com/local/',
        external: false,
        new: false
      },
    ],
    new: false
  },
  {
    title: 'Company',
    sub: [
      {
        title: 'About Us',
        link: 'https://www.semrush.com/company/',
        external: false,
        new: false
      },
      {
        title: 'Newsroom',
        link: 'https://www.semrush.com/news/',
        external: false,
        new: false
      },
      {
        title: 'Careers',
        link: 'https://careers.semrush.com/',
        external: true,
        new: false
      },
      {
        title: 'Success Stories',
        link: 'https://www.semrush.com/company/stories/',
        external: false,
        new: false
      },
      {
        title: 'Affiliate Program',
        link: 'https://www.semrush.com/lp/affiliate-program/en/',
        external: false,
        new: false
      },
      {
        title: 'For Investors',
        link: 'https://investors.semrush.com/',
        external: true,
        new: false
      },
      {
        title: 'Partner Integrations',
        link: 'https://www.semrush.com/company/partner-integrations/',
        external: false,
        new: false
      },
      {
        title: 'Contacts',
        link: 'https://www.semrush.com/company/contacts/',
        external: false,
        new: false
      },
      {
        title: 'Stats and Facts',
        link: 'https://www.semrush.com/stats/',
        external: false,
        new: false
      },
    ],
    new: false
  },
  {
    title: 'App Center',
    sub: [
      {
        title: 'Store',
        link: 'https://www.semrush.com/apps/',
        external: false,
        new: false
      },
      {
        title: 'My Apps',
        link: 'https://www.semrush.com/apps/my-apps',
        external: false,
        new: false
      },
    ],
    new: true
  },
  {
    title: 'Enterprise',
    link: 'https://www.semrush.com/enterprise/seo/',
    external: true,
    new: false
  },
] as NavLink[];