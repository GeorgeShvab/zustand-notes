const addScrollbarPlaceholder = () => {
  const hasScrollbar = document.body.scrollHeight > window.innerHeight;

  if (hasScrollbar) {
    document.body.style.paddingRight = "8px";
    document.body.style.overflow = "hidden";
  }
};

export default addScrollbarPlaceholder;
