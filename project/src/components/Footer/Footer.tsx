import { FooterEnd } from "./style";
import { AiFillCaretUp } from "react-icons/ai";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterEnd>
      <div className="footer-container">
        <div className="logo">
          <h1>Motors</h1>
          <span>shop</span>
        </div>
        <span>© 2022 - Todos os direitos reservados.</span>
        <button onClick={handleScrollTop}>
          <AiFillCaretUp />
        </button>
      </div>
    </FooterEnd>
  );
};

export default Footer;
