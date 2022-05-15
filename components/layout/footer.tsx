import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-3xl grid grid-cols-1 gap-6 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog/page/1">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-6">
          <ExternalLink href="https://twitter.com/svirins">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/zvirinz">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/">
            YouTube
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
