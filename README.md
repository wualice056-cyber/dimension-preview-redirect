# Dimension preview redirect

This public GitHub Pages site redirects `preview.luxedimension.com` to the
stable Vercel branch alias while preserving the request path, query and hash.

The redirect target is the Vercel branch alias for
`codex/rehearsal-eip712-domain-20261111`. If the branch is renamed or removed,
update `redirect.js` and the fallback URLs in `index.html` and `404.html`.

Run `node .github/scripts/check-redirect.mjs` to verify the stable domain,
redirect script and branch alias. This personal account cannot currently run
custom GitHub Actions because of its billing state, so the check is deliberately
manual and has no dependencies.

The redirect can be removed after the Vercel project owner binds the custom
domain directly to the Preview deployment.
