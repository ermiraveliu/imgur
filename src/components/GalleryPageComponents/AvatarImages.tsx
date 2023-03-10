interface AvatarProps {
    username: string 
}
 
const Avatar: React.FC<AvatarProps> = ({username}) => {
  const firstLetter =  username.toUpperCase().charCodeAt(0) - 65;

    return ( 
        <img src={avatarImages[firstLetter]} className="img w-8 h-8 rounded-full hover:scale-110" alt=""/>
     );
}

const avatarImages = [
    "https://imgur.com/user/adamelias/avatar",
    "https://imgur.com/user/beepbeepmeow/avatar",
    "https://imgur.com/user/camelbackjack/avatar",
    "https://imgur.com/user/david42/avatar",
    "https://imgur.com/user/ethox/avatar",
    "https://imgur.com/user/finnwin/avatar",
    "https://imgur.com/user/gahidus/avatar",
    "https://imgur.com/user/henriksen1/avatar",
    "https://imgur.com/user/iwasdoingfinelurking/avatar",
    "https://imgur.com/user/jinky74/avatar",
    "https://imgur.com/user/kcloud/avatar",
    "https://imgur.com/user/lordsmish/avatar",
    "https://imgur.com/user/mwasbabu16/avatar",
    "https://imgur.com/user/noncanadiangoose/avatar",
    "https://imgur.com/user/opus68/avatar",
    "https://imgur.com/user/psuedon/avatar",
    "https://imgur.com/user/quade/avatar",
    "https://imgur.com/user/rightyouareken87/avatar",
    "https://imgur.com/user/seanjohn/avatar",
    "https://imgur.com/user/trippingthelightfantastic/avatar",
    "https://imgur.com/user/upvotemypics/avatar",
    "https://imgur.com/user/vodray/avatar",
    "https://imgur.com/user/wessyfbaby/avatar",
    "https://imgur.com/user/xfamousx0/avatar",
    "https://imgur.com/user/yannireddit/avatar",
    "https://imgur.com/user/zaazzz/avatar",
  ];
  
 
export default Avatar;