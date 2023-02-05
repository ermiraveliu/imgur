interface Props {
  isVisible: boolean,
}
 
const LogoButton: React.FC<Props> = ({ isVisible }) => {
    return ( 
        <a href={"/"} className="logoImg absolute" style={{visibility: isVisible?'visible': 'hidden'}}>
        <img
          src="https://s.imgur.com/images/favicon-32x32.png"
          alt=""
          className=""
        />
      </a>
     );
}
 
export default LogoButton;