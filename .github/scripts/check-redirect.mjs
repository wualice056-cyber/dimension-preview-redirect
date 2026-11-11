const stableUrl = "https://preview.luxedimension.com/";
const redirectUrl = new URL("/redirect.js", stableUrl);
const target =
  "https://dimension-git-codex-rehearsal-eip712-domai-32dd48-luxedimension.vercel.app";
const rehearsalPath = "/exhibitions/base-sepolia-sale-rehearsal-v2";

async function expectOk(url) {
  const response = await fetch(url, {
    headers: { "cache-control": "no-cache" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`${url} answered ${response.status}`);
  }
  return response;
}

const stablePage = await expectOk(stableUrl);
const html = await stablePage.text();
if (!html.includes("/redirect.js")) {
  throw new Error("The stable domain no longer loads the redirect script.");
}

const redirectSource = await (await expectOk(redirectUrl)).text();
if (!redirectSource.includes(target)) {
  throw new Error("The redirect script no longer names the Preview alias.");
}

await expectOk(`${target}${rehearsalPath}`);
console.log(
  JSON.stringify(
    {
      stableUrl,
      target,
      rehearsalPath,
      checkedAt: new Date().toISOString(),
    },
    null,
    2,
  ),
);
