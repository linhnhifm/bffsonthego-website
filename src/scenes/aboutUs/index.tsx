import HText from "@/shared/HText";
import { VlogType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AboutUsPageGraphic from "@/assets/AboutUsPageGraphic.png";
import AboutUsDetails from "./AboutUsDetails";
import { vlogTypes } from "./vlogTypes";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="mx-auto min-h-full w-5/6 py-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        {/* ABOUT US */}
        <div className="items-center justify-between gap-20 md:mt-2 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="about-us-page-graphic"
            src={AboutUsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-[2] before:content-sparklesyellow">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    ABOUT{" "}
                    <span className="text-primary-500">US</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Hi! We are best friends Lini & Nettea! We both recently graduated from
                STEM fields and are currently living in Canada. In our spare time, we like
                to travel, eat, and explore new places (aka do dumb things together ~ because
                that's what best friends are for 😆)!
              </p>
              <p className="mb-5">
                We always have so much fun when we do things together, and we wanted to vlog 
                our journey to share it with the world. We hope our videos brighten your day 
                and bring a smile to your face. Thanks for hanging out with us, and do consider following
                us on our various channels above for more content!
              </p>
              <p className="mt-5">
                Below are the types of videos we make. 
              </p>
            </motion.div>
          </div>
        </div>

        {/* THINGS WE DO */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {vlogTypes.map((vlogType: VlogType) => (
            <AboutUsDetails
              key={vlogType.title}
              icon={vlogType.icon}
              title={vlogType.title}
              description={vlogType.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;