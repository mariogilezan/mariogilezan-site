export const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
}

export const listVariants = {
  closed: {
    opacity: 0,
    transition: { when: "afterChildren", duration: 0.1 },
  },
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  closed: { opacity: 0, x: -100, transition: { duration: 0.1 } },
  open: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.4 } },
}
