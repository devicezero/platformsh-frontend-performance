# Frontend performance testing demo

This repository is used to showcase adding frontend performance testing tasks to Platform.sh.
A recording of the talk is available via https://www.youtube.com/watch?v=vYWJpkUhzyw

All tests are performed in the `post_deploy` hook (see `frontend/.platform.app.yaml`)

## Lighthouse
`frontend/lighthouse.js` runs the lighthouse test using a headless chrome instance.

## Webpagetest
`frontend/webpagetest.js` runs the webpagetest.org test, you need an API key for this in `env:WEBPAGETEST_KEY`

## External tests
You can also run external tests, e.g. against your [Calibre](https://calibreapp.com/) project (you the salibre Site secret for this in `end:CALIBRE_SITE_SECRET`).

If you have questions, don't hesitate to ask me.
[@devicezero](https://twitter.com/devicezero)
