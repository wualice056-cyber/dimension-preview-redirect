const stableUrl = "https://preview.luxedimension.com/";
const redirectUrl = new URL("/redirect.js", stableUrl);
const target =
  "https://dimension-pjx4q6eg9-luxedimension.vercel.app";
const rehearsalPath = "/exhibitions/base-sepolia-sale-rehearsal-v2";

async function expectOk(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "cache-control": "no-cache" },
        redirect: "follow",
        signal: AbortSignal.timeout(20_000),
      });
      if (response.ok) return response;
      lastError = new Error(`${url} answered ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 2_000));
  }
  throw lastError;
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
