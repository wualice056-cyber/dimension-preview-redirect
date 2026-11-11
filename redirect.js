const destination =
  "https://dimension-git-codex-rehearsal-eip712-domai-32dd48-luxedimension.vercel.app";

window.location.replace(
  `${destination}${window.location.pathname}${window.location.search}${window.location.hash}`,
);
