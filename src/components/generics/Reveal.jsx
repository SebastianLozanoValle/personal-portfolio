'use client'
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ hidden = { opacity: 0, x: -75}, visible = { opacity: 1, x: 0 }, delay = 0.25, duration = 0.5, children, once = true, className="flex-1 flex flex-col" }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: once });

    const mainControls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={{
                hidden: hidden,
                visible: visible,
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: duration, delay: delay}}
        >
            {children}
        </motion.div>
    )
}