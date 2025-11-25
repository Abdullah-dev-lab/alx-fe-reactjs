import twitterLogo from '../assets/twitter.png';
import instagram_Logo from '../assets/instagram.png';
import facebookLogo from '../assets/facebook.png';

function Footer () {
    return (
        <footer>
            <div className=" bg-[grey] flex border border-white justify-evenly">
                <p className="text-black">copyrights @Abdulmalik 2025</p>
               <img src={twitterLogo} alt="twitter logo"></img>
               <img src={instagram_Logo} alt="instagram logo"></img>
               <img src={facebookLogo} alt="facebook logo"></img>
            </div>
        </footer>
    );
};

export default Footer;