import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <Twemoji emoji="cyclone" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            Carlos
          </span>
        </Link>
        <Link href="/projects" className="hover:underline">
          <Twemoji emoji="cyclone" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            Misael
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <Twemoji emoji="cyclone" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            Aulismar
          </span>
        </Link>
        <Link href="/resume" className="hover:underline">
          <Twemoji emoji="cyclone" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            Uender
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogLinks;
