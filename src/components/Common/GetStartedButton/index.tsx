import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="#contact"
      onClick={handleScroll} // Attach the handleScroll to the onClick event
    >
      Chat Now
    </LinkTo>
  );
};

export default GetStartedButton;

