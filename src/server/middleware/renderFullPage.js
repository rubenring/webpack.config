export default (html, preloadedState) => {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Socket IO - React SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="./static/bundle.js"></script>
        </body>
        </html>
    `
}