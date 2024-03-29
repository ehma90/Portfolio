import { Text } from "@/reusable-components";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.div transition={{type: "tween", duration: 0.5,}} animate={{x: 0}} initial={{x:150}} translate="yes" className="mt-20 py-4 flex justify-center items-center gap-2">
        <FaLaptopCode size={26} className="text-green-900 text-4xl" />
        <Text as="h5" variant="h5" className=" text-gray-500"> v.1.1.0</Text>
      </motion.div>
    </div>
  );
};

export default Footer;
