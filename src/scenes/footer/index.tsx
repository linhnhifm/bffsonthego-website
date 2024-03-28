import Logo from "@/assets/Logo.png";
import YoutubeSVG from "@/assets/YouTube-Logo.svg";
import InstagramSVG from "@/assets/Instagram-Logo.svg";
import TikTokSVG from "@/assets/TikTok-Logo.svg";

const Footer = () => {
  const svgStyle = "inline-block w-5 h-5 mb-2";

  return (
    <footer className="bg-primary-100 py-12">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width={180} />
          <p className="mt-2">© BFFsOnTheGo All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 xs:mb-6 justify-end">
          <h4 className="font-bold text-primary-500 mb-2">Thank you for hanging around!</h4>
          <div>
            <a href="https://www.youtube.com/@BFFsOnTheGo" className="mb-2 block font-bold text-primary-200 underline hover:text-secondary-500">
              <img alt="youtube-logo" src={YoutubeSVG} className={svgStyle}/>
              Youtube
            </a>
            <a href="https://www.instagram.com/bffsonthegooo" className="mb-2 block font-bold text-primary-200 underline hover:text-secondary-500">
              <img alt="youtube-logo" src={InstagramSVG} className={svgStyle}/>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@bffsonthegooo" className="mb-2 block font-bold text-primary-200 underline hover:text-secondary-500">
              <img alt="youtube-logo" src={TikTokSVG} className={svgStyle}/>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;