import { motion } from "framer-motion";
import ScrollSpy from "react-scrollspy";
import { Link } from "remix";
import Logo from "~/components/Logo";
import { ThemeToggleButton } from "~/components/ThemeToggleButton";

const navVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: "circOut",
    },
  },
};

export default function Nav() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex"
    >
      <Link to="/#" tabIndex={0}>
        <Logo height={36} />
      </Link>

      <ScrollSpy
        items={["intro", "projects", "about", "contact"]}
        currentClassName="active-nav-link"
        className="flex items-center justify-center gap-x-14 text-lg"
        componentTag="div"
        offset={-256}
      >
        <Link to="/#" className="hover:text-primary-brand nav-link">
          Introduction
        </Link>
        <Link to="/#projects" className="hover:text-primary-brand nav-link">
          Projects
        </Link>
        <Link to="/#about" className="hover:text-primary-brand nav-link">
          About
        </Link>
        <Link to="/#contact" className="hover:text-primary-brand nav-link">
          Contact
        </Link>

        <ThemeToggleButton />
      </ScrollSpy>
    </motion.nav>
  );
}
