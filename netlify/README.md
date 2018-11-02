Before you can use the [command line tools](https://www.netlify.com/docs/cli/), you need to download a token to `.netlify/config.json`.

    $ ./do login

Then deploy a preview of the `public` directory:

    $ ./do deploy

On the first run, this links the local project with a Netlify site, and creates `.netlify/state.json`.

If it looks good, move it to prod:

    $ ./do deploy --prod
