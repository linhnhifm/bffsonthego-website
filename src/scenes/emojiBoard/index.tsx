import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Board from "./Board";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const EmojiBoard = ({ setSelectedPage }: Props) => {
    return (
        <section id="emojiboard" className= "w-full bg-gray-20 md:h-full py-24">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.EmojiBoard)}
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
                    <div className="md:w-3/5 pb-12">
                        <HText><span className="text-primary-500">EMOJI</span> BOARD 🔥</HText>
                        <p className="py-5">Let us know how you feel by adding an emoji to the board!</p>
                    </div>
                </motion.div>
                
                <div className="mx-auto w-5/6">
                    <Board />
                </div>
            </motion.div>
        </section>
    )
}

export default EmojiBoard;