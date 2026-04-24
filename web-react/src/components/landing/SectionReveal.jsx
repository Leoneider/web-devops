import PropTypes from "prop-types";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
const MotionSection = motion.section;

function SectionReveal({ children, className = "" }) {
  return (
    <MotionSection
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className={className}
    >
      {children}
    </MotionSection>
  );
}

SectionReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionReveal;
