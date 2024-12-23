import Casey from '@/../public/Casey_Camilleri_Marx.webp';
import Esther from '@/../public/Esther_Gimenez.jpg';
import Fabrizio from '@/../public/Fabrizio_Ballarini.jpg';
import Brian from '@/../public/Brian_Dean.jpg';
import Freddy from '@/../public/Freddy_Hunt.jpg';
import Eric from '@/../public/Eric_Bogard.jpg';
import Shefali from '@/../public/Shefali_Joshi.jpg';
import Ed from '@/../public/Ed_Challinor.jpg';
import Barbara from '@/../public/Barbora_Jassova.jpg';
import Mesmer from '@/../public/Mesmer_Doue.jpg';
import Idan from '@/../public/Idan_Segal.jpg';
import Ilyas from '@/../public/Ilyas_Teker.jpg';
import Emanuele from '@/../public/Emanuele_Arosio.jpg';
import Dignorah from '@/../public/Dignorah_Altamiranda.jpg';
import Paul from '@/../public/Paul_Meluzzo.jpg';
import Andrea from '@/../public/Andrea_Cruz.jpg';
import Vashishtha from '@/../public/Vashishtha_Kapoor.jpg';
import Judith from '@/../public/Judith_Lewis.jpg';
import Ankitaa from '@/../public/Ankitaa_Gohain_Dalmia.jpg';
import Jigar from '@/../public/Jigar_Agrawal.jpg';
import Himani from '@/../public/Himani_Kankaria.jpg';
import Trevor from '@/../public/Trevor_Stolber.jpg';

const marketingSuiteList = [
  {
    name: 'Casey Camilleri Marx',
    title: 'Digital Marketing Director, Nlyte Software',
    content: '“I\'ve been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I\'m working on to the top of Google.”',
    img: Casey
  },
  {
    name: 'Esther Giménez',
    title: 'Senior SEO & UX Consultant, Annalect, Omnicom Media Group',
    content: '“What I appreciate most about Semrush is that it covers all areas of search with its tools, so I can have a 360-degree view of my projects.”',
    img: Esther
  },
  {
    name: 'Fabrizio Ballarini',
    title: 'Responsible for SEO, TransferWise',
    content: '“If you ask an agency to deliver 10x organic search growth through content, they will assign a large team to your project. Our content team, in contrast, runs activities with Semrush without having an army of people specialized in SEO.”',
    img: Fabrizio
  },
  {
    name: 'Brian Dean',
    title: 'Founder, Backlinko',
    content: '“When it comes to pure value, Semrush wins. That\'s mostly because you get a fully-featured SEO software suite AND Google Ads software for the same monthly price.”',
    img: Brian
  }
]

const seoList = [
  {
    name: 'Freddy Hunt',
    title: 'Director of SEO and Content Marketing, Oneupweb',
    content: '“We chose Semrush because the keyword tracking was much more accurate than our previous tools and the interface was very intuitive.”',
    img: Freddy
  },
  {
    name: 'Eric Bogard',
    title: 'VP of Marketing, Arkadium',
    content: '“There is a direct correlation between using Semrush, being focused on SEO, and the sheer growth that we\'ve had. Our organic traffic was up by 230% in 2019. Literally every day we are getting the highest traffic ever on our website.”',
    img: Eric
  },
  {
    name: 'Shefali Joshi',
    title: 'Marketing Optimization Analyst, Monash University',
    content: '“With the help of Semrush, we empowered every single marketing team within the university to double their traffic like we did for the central sites.”',
    img: Shefali
  },
  {
    name: 'Ed Challinor',
    title: 'Co-founder and CEO, Smileworks',
    content: '“I\'ve never seen a local dental practice in the world ranking as much as we are now. We are ranking nationally. Because of the tool. Simple as that. And I still don\'t use even 50% of it.”',
    img: Ed
  }
]

const contentMarketingList = [
  {
    name: 'Barbora Jassova',
    title: 'Content Strategist, Landbot',
    content: '“Our overall organic traffic increased sevenfold, with blog traffic making up over 75% of the visits! Semrush allowed us to optimize and run our content strategy without needing an army of SEO experts.”',
    img: Barbara
  },
  {
    name: 'Mesmer Doué',
    title: 'Digital Marketing Consultant, Blue Lance',
    content: '“Semrush\'s SEO Writing Assistant is one of a kind. I was amazed by the feedback and recommendations it provided me to improve my SEO, text readability, originality, and tone of voice.”',
    img: Mesmer
  },
  {
    name: 'Idan Segal',
    title: 'Organic Growth Lead, Wix',
    content: '“By using Semrush, my team saves a lot of time by working on the right content and in a more data-driven way. Semrush is my right hand for many tasks, it helps me and my team to strategize.”',
    img: Idan
  },
  {
    name: 'Ilyas Teker',
    title: 'Founder, SEO Consultant, Mosanta',
    content: '“We created a comprehensive content strategy to increase the potential organic traffic by 123%. We actively used Semrush tools in the process to achieve our goals.”',
    img: Ilyas
  }
]

const marketResearchList = [
  {
    name: 'Emanuele Arosio',
    title: 'Head of Global SEO, Triboo Group',
    content: '“When you are at the table with a general manager, they just want to know the market share. Market Explorer is the perfect tool to quickly show what our brand\'s role and classification inside the market are.”',
    img: Emanuele
  },
  {
    name: 'Dignorah Altamiranda',
    title: 'Marketing Team Lead, Avature',
    content: '“My favorite part about Semrush is the power it has for competitive intelligence. It makes it easier to make savvy advertising decisions when you have more data.”',
    img: Dignorah
  },
  {
    name: 'Paul Meluzzo',
    title: 'Creative Director, Omnislash Visual',
    content: '“I love the feature that lets you analyze the keyword and backlink gap with your competitors. This is very useful in determining which keywords you aren\'t ranking for, that you could be getting.”',
    img: Paul
  }
]

const advertisingList = [
  {
    name: 'Andrea Cruz',
    title: 'Digital Marketing Manager, KoMarketing',
    content: '“Semrush has been pivotal in helping me better understand the competitive landscape of my ad campaigns. I have been able to close the gaps between my organic and paid efforts thus distributing my budget and tactics in a comprehensive manner.”',
    img: Andrea
  },
  {
    name: 'Vashishtha Kapoor',
    title: 'CoFounder, affNext',
    content: '“My favorite feature is the PPC analysis tool. It tells me what kinds of PPC ads are being run by a specific domain. It is good to optimize my own PPC strategy!”',
    img: Vashishtha
  },
  {
    name: 'Judith Lewis',
    title: 'Founder, deCabbit Consultancy',
    content: '“With Semrush, I have found weaknesses in PPC for pitches where I was only covering SEO. I\'ve found clients\' new competitors they didn\'t realise they had and keywords they could target.”',
    img: Judith
  },
  {
    name: 'Ankitaa Gohain Dalmia',
    title: 'Founder, Digital Content Strategist, AnksImage',
    content: '“I have used the PPC Keyword Tool to create ads for my clients. And those ads not only fit the client brief, but also have returned great results.”',
    img: Ankitaa
  }
]

const socialMediaList = [
  {
    name: 'Jigar Agrawal',
    title: 'SEO Specialist, freelance',
    content: '“Semrush Social Media Toolkit is the best in the business. I\'m using this tool to great effect and it has helped to increase my visibility on Social Media.”',
    img: Jigar
  },
  {
    name: 'Himani Kankaria',
    title: 'eCommerce Consultant and SEO Strategist, eComKeeda',
    content: '“I\'ve been using Semrush for the past 5 years now especially for SEO, content writing, and now even for social media marketing.”',
    img: Himani
  },
  {
    name: 'Trevor Stolber',
    title: 'Founder, STOLBER Digital Marketing Agency',
    content: '“Although it\'s not a core function of Semrush I really like their social media posting tool - I would give that a try.”',
    img: Trevor
  }
]

export const userCarouselData = [
  {
    title: 'Marketing Suite',
    bg: '#C9EDFF',
    content: marketingSuiteList
  },
  {
    title: 'SEO',
    bg: '#edffa8',
    content: seoList
  },
  {
    title: 'Content marketing',
    bg: '#BAFFD6',
    content: contentMarketingList
  },
  {
    title: 'Market research',
    bg: '#ffe3c9',
    content: marketResearchList
  },
  {
    title: 'Advertising',
    bg: '#e8d1e8',
    content: advertisingList
  },
  {
    title: 'Social Media',
    bg: '#facfd6',
    content: socialMediaList
  }
]