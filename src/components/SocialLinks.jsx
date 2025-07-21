// components/SocialLinks.jsx
import { FaMedium, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="m-auto w-[80%] mt-10">
    <div className="flex gap-6  items-center">
      <a
        href="https://medium.com/@yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition duration-300 text-2xl"
      >
        <FaMedium />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition duration-300 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black transition duration-300 text-2xl"
      >
        <FaGithub />
      </a>
    </div>
    </div>
  );
};

export default SocialLinks;
