import { motion } from "framer-motion";

export const Section = ({ title, content, imageSrc, reverse = false }) => (
    <motion.div 
      className={`flex ${reverse ? 'flex-row-reverse' : ''} items-center justify-between py-20 px-[100px]`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-1/2 pr-10">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl">{content}</p>
      </div>
      <motion.div 
        className="w-1/2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={imageSrc} alt={title} className="rounded-lg shadow-2xl" />
      </motion.div>
    </motion.div>
  );