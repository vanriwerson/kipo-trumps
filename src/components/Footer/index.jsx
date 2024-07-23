import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import SocialNetworkButton from "../SocialNetworkButton";
import './style.css';

function Footer() {  
  return (
    <footer className="footer">
      <SocialNetworkButton
        anchorLink="https://github.com/vanriwerson"
        imageSource={ githubIcon }
        altText="Github icon"
      />

      <SocialNetworkButton
        anchorLink="https://www.linkedin.com/in/bruno-riwerson/"
        imageSource={ linkedinIcon }
        altText="Linkedin icon"
      />

      <span>{'<dev> Bruno Riwerson Silva </dev>'}</span>
    </footer>
  );
}

export default Footer;
