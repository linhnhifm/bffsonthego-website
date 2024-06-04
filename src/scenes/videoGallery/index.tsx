import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import VideoList from "./VideoList";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const VideoGallery = ({ setSelectedPage }: Props) => {
  return (
    <section id="videogallery" className="w-full bg-primary-100 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.VideoGallery)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Video Gallery</HText>
            <p className="py-5">
              Check out some of our videos below! You can find the rest on our{' '}
              <a href="https://www.youtube.com/@BFFsOnTheGo" className="font-bold text-primary-500 underline hover:text-secondary-500">Youtube</a>,{' '}
              <a href="https://www.instagram.com/bffsonthegooo" className="font-bold text-primary-500 underline hover:text-secondary-500">Instagram</a>, and{' '}
              <a href="https://www.tiktok.com/@bffsonthegooo" className="font-bold text-primary-500 underline hover:text-secondary-500">TikTok</a>.
              Enjoy!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 md:ml-28 h-[380px] md:w-5/6 overflow-x-auto overflow-y-hidden">
          <VideoList 
            maxResults={5}
            order={'date'}/>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGallery;