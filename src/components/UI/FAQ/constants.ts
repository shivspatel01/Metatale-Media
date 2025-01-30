type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What services does your content marketing agency offer?',
    answer:
      'We provide a wide range of services including personal branding, video editing, graphic designing, social media management, website development, content production and content writing. These services are tailored to help individuals and businesses enhance their online presence and effectively communicate their message.',
  },
  {
    question: 'How can video editing services benefit my business or personal brand?',
    answer:
      'Video editing can enhance the quality and impact of your video content. Whether it’s for promotional videos, vlogs, or social media content, our video editing services can make your videos more engaging and professional.',
  },
  {
    question: 'My requirements are different from the above packages. Can yyou help us ?',
    answer:
      'Yes, absolutely ! Book a call now and we will understand your goals & requirements and as per that we will send you a customized plan & quotation.',
  },
  {
    question: 'How do I get started with your agency’s services?',
    answer:
      'To get started, simply reach out to us through our contact form or email or else directly schedule a call. We will discuss your specific needs and goals. After that, we’ll provide you with a customized plan and quote for our services. And as soon as we receive the payment we will start posting content in just 7-10 days.',
  },
];
