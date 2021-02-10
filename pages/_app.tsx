import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                key={router.route}
            >
                <Head><style>{dom.css()}</style></Head>
                <Component {...pageProps} key={router.route} />
            </motion.div>
        </AnimatePresence>
    )
}