
import { motion } from "framer-motion";

export default function Icon({ children }) {
    return (
        <motion.div className="icon gradient mb-4" whileHover={{
            scale: [1, 1.5, 1.25],
            transition: { duration: 0.2 },
            background: "rgba(0, 0, 0, 0) linear-gradient(144deg, rgb(245, 137, 72) 0%, rgb(131, 41, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box"
        }}>
            {children}
        </motion.div>
    );
}