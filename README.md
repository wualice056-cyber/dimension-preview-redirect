# Dimension preview redirect

This public GitHub Pages site redirects `preview.luxedimension.com` to the
stable Vercel branch alias while preserving the request path, query and hash.

The redirect target is the Vercel branch alias for
`codex/rehearsal-eip712-domain-20261111`. GitHub Actions checks the stable
domain, redirect script and branch alias every six hours. If the branch is
renamed or removed, update `redirect.js` and the fallback URLs in `index.html`
and `404.html`.

The redirect can be removed after the Vercel project owner binds the custom
domain directly to the Preview deployment.
