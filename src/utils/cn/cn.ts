const cn = (...classNames: unknown[]) => {
  return classNames
    .filter((className) => typeof className === "string" && className.trim())
    .join(" ");
};

export default cn;
