Before you can use the [command line tools](https://www.netlify.com/docs/cli/), you need to download a token to `.netlify/config.json`

    $ ./do login

... or set environment variables for secrets.

    $ . env

Then deploy a preview of the `public` directory:

    $ ./do deploy

On the first run, this links the local project with a Netlify site, and creates `.netlify/state.json`.

If it looks good, move it to prod:

    $ ./do deploy --prod

### Functions

See [docs](https://docs.netlify.com/functions/create/?fn-language=js).

The function is accessible on `<domain>/.netlify/functions/first`, so in production on https://netlify-spike.onthetestserver.com/.netlify/functions/first.

To (manually) test locally:

    $ netlify dev