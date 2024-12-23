import ContentIcon from '@/components/icons/Content'
import MarketIcon from '@/components/icons/Market'
import AdvertisingIcon from '@/components/icons/AdvertisingIcon'
import SocialIcon from '@/components/icons/Social'
import AgencyIcon from '@/components/icons/Agency'
import SEOImg from '@/../public/seo.svg';
import ContentImg from '@/../public/content_marketing.svg';
import MarketImg from '@/../public/competitive_research.svg';
import AdvertisingImg from '@/../public/ppc.svg';
import SocialImg from '@/../public/social_media.svg';
import AgencyImg from '@/../public/agency.svg';

const Agency = () => (
  <Slide title="Streamline your agency processes for growth" points={['Get quality leads regularly', 'Automate client reporting and pitching', 'Create white-label client portals and share project progress details', 'Manage the entire client workflow with CRM']} img={AgencyImg} />
)

const Social = () => (
  <Slide title="Discover how to reach more prospects while spending less" points={['Find the best keywords for every PPC campaign', 'Monitor your competitor\'s ad copies and landing pages', 'Optimize your Advertising spend (at a local level)', 'Analyze Google Shopping ad campaigns']} img={SocialImg} />
)

const Advertising = () => (
  <Slide title="Build your most effective social media strategy" points={['Schedule and post content on social media', 'Analyze the performance of your posts', 'Track & analyze competitor accounts', 'Manage your public brand reputation']} img={AdvertisingImg} />
)

const Market = () => (
  <Slide title="Unveil your competitor's marketing strategy and tactics" points={['Analyze traffic of any website', 'Unveil competitor promotion strategies', 'Get ideas for growing your market share', 'Discover keyword & backlink gap']} img={MarketImg} />
)

const Content = () => (
  <Slide title='Create content that ranks (no expert knowledge required)' points={['Find topics that resonate with your audience', 'Get actionable tips to create SEO-friendly content', 'Optimize your content for engagement and organic traffic', 'Use AI features to easily rewrite and improve your copy']} img={ContentImg} />
)

const SEO = () => (
  <Slide title='Grow organic traffic with our complete and easy SEO tools & workﬂow' points={['Uncover millions of national & local keywords', 'Analyze any domain\'s backlink profile', 'Run technical SEO audits', 'Track your SERP positions daily']} img={SEOImg} />
)

const featuresCarouselList = [
  {
    title: 'SEO',
    icon: SEOIcon,
    content: SEO
  },
  {
    title: 'Content Marketing',
    icon: ContentIcon,
    content: Content
  },
  {
    title: 'Market Research',
    icon: MarketIcon,
    content: Market
  },
  {
    title: 'Advertising',
    icon: AdvertisingIcon,
    content: Advertising
  },
  {
    title: 'Social Media',
    icon: SocialIcon,
    content: Social
  },
  {
    title: 'Agency Solutions',
    icon: AgencyIcon,
    content: Agency
  }
]