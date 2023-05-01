import {IoLogoLinkedin} from 'react-icons/io';
import {IoLogoGithub} from 'react-icons/io';


export const Footer = () => {
  return (
    <footer className="h-12 flex justify-center items-center mt-6 text-blue-700">
      <p className="text-sm sm:text-lg text-center font-medium">Site Réalisé par Jérémy Dallain</p>
      <a href="https://www.linkedin.com/in/jeremy-dallain/" title='profil de Jérémy Dallain sur linkedin' >
        <IoLogoLinkedin size={30} className='top-2 ml-5 ' />
      </a>
      <a href="https://github.com/JeremyDallain/notes-in-localstorage" title='depôt github du projet' >
        <IoLogoGithub size={30} className='top-2 ml-5 ' />
      </a>
    </footer>
  );
};