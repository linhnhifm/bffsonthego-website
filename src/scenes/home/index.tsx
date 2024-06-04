import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import YoutubeLogo from "@/assets/youtubeLogo.png";
import InstagramLogo from "@/assets/IGLogo.png";
import TikTokLogo from "@/assets/tiktokLogo.png";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import YouTube from 'react-youtube';
import fetchYoutubeVideos from "@/shared/fetchYoutubeVideos";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");
  const isXSmallScreens = useMediaQuery("(max-width: 480px)");

  const handleYoutubeButtonClick = () => {
    window.location.href = 'https://www.youtube.com/@BFFsOnTheGo';
  };
  const handleInstagramButtonClick = () => {
    window.location.href = 'https://www.instagram.com/bffsonthegooo';
  };
  const handleTikTokButtonClick = () => {
    window.location.href = 'https://www.tiktok.com/@bffsonthegooo';
  };

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    
    // Perform action based on the selected option
    switch (selectedOption) {
      case 'youtube':
        handleYoutubeButtonClick();
        break;
      case 'instagram':
        handleInstagramButtonClick();
        break;
      case 'tiktok':
        handleTikTokButtonClick();
        break;
    }
  };

  const homePageVideo = fetchYoutubeVideos( 1, 'viewCount' )

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 md:pt-40"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-20 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-16 before:-left-2 before:z-[-1] md:before:content-forevertext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
          </motion.div>

          {/* ACTIONS */}
          <div className="mt-8">
            <div className="mb-5 border border-gray-300 rounded-lg overflow-hidden inline-block" style={{ maxWidth: "100%", width: "80%", height: "0", paddingBottom: "45%", position: "relative" }}>
              <YouTube
                className="shadow-lg rounded-lg overflow-hidden"
                videoId={homePageVideo.length > 0 ? homePageVideo[0].id.videoId : ''}
                opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: {
                    controls: 1,
                  },
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <motion.div
              className="flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {isXSmallScreens ? (
                <div >
                  <select
                      className="mb-10 rounded-lg bg-secondary-500 px-8 py-2 transition duration-500 hover:text-white"
                      onChange={(event) => handleSelectionChange(event)}
                    >
                      <option value="">Connect with us!</option>
                      <option value="youtube">Youtube</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                    </select>
                </div>
              ) : isBelowMediumScreens ? (
                <div className="flex gap-8">
                  <button className="mb-10 rounded-lg bg-secondary-500 px-8 py-2 transition duration-500 hover:text-white" 
                    onClick={handleYoutubeButtonClick}
                  >
                    Youtube
                  </button>
                  <button className="mb-10 rounded-lg bg-secondary-500 px-10 py-2 transition duration-500 hover:text-white" 
                    onClick={handleInstagramButtonClick}
                  >
                    Instagram
                  </button>
                  <button className="mb-10 rounded-lg bg-secondary-500 px-10 py-2 transition duration-500 hover:text-white" 
                    onClick={handleTikTokButtonClick}
                  >
                    TikTok
                  </button>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-20 md:mt-10 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic}/>
        </div>
      </motion.div>

      {/* SOCIAL MEDIA LINKS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-16">
              <button onClick={handleYoutubeButtonClick}>
                <img className="w-32" alt="Youtube-link" src={YoutubeLogo}/>
              </button>
              <button onClick={handleInstagramButtonClick}>
                <img className="w-48" alt="Instagram-link" src={InstagramLogo}/>
              </button>
              <button onClick={handleTikTokButtonClick}>
                <img className="w-40" alt="TikTok-link" src={TikTokLogo}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;