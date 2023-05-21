import tourImg1 from '../images/tour-1.jpeg';
import tourImg2 from '../images/tour-2.jpeg';
import tourImg3 from '../images/tour-3.jpeg';
import tourImg4 from '../images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    title: 'saving money',
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    title: 'endless hiking',
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    title: 'amazing comfort',
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    name: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod fugit, qui corporis.',
    date: 'august 26th, 2020',
    location: 'china',
    cost: '$2100',
    duration: '6 days',
  },
  {
    id: 2,
    img: tourImg2,
    name: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod fugit, qui corporis.',
    date: 'october 1th, 2020',
    location: 'indonesia',
    cost: '$1400',
    duration: '11 days',
  },
  {
    id: 3,
    img: tourImg3,
    name: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod fugit, qui corporis.',
    date: 'september 15th, 2020',
    location: 'hong kong',
    cost: '$5000',
    duration: '8 days',
  },
  {
    id: 4,
    img: tourImg4,
    name: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod fugit, qui corporis.',
    date: 'december 5th, 2019',
    location: 'kenya',
    cost: '$3300',
    duration: '20 days',
  },
];
