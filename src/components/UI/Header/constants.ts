export const menu = {
  open: {
    width: '250px',
    height: '300px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const links = [
  {
    url: '#services',
    linkTo: 'Services',
  },
  {
    url: '#portfolio',
    linkTo: 'Portfolio',
  },
  {
    url: '#clients',
    linkTo: 'Clients',
  },
  {
    url: '#why-metatale',
    linkTo: 'Why Metatale Media?',
  },
  {
    url: '#faqs',
    linkTo: 'FAQs',
  },
];

