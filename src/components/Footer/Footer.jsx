import {IoLogoLinkedin} from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className="h-12 flex justify-center items-center relative mt-6 text-blue-700">
      <p className="text-lg text-center font-medium">Site Réalisé par Jérémy Dallain</p>
      <a href="https://www.linkedin.com/in/jeremy-dallain/" title='profil de Jérémy Dallain sur linkedin' >
        <IoLogoLinkedin size={30} className='absolute top-2 ml-5 ' />
      </a>
    </footer>
  );
};