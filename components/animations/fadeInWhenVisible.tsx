import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function FadeInWhenVisible({ delay, children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                        delay: delay
                    }
                },
                hidden: { 
                    opacity: 0, 
                    scale: 0
                }
            }}
        >
            {children}
        </motion.div>
    );
}