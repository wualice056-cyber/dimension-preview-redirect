const destination =
  "https://dimension-pjx4q6eg9-luxedimension.vercel.app";

document.documentElement.hidden = true;
window.location.replace(
  `${destination}${window.location.pathname}${window.location.search}${window.location.hash}`,
);
