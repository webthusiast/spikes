Before you can use the [API](https://auth0.com/docs/api/management/v2), you need to [create and authorize a machine-to-machine application](https://auth0.com/docs/api/management/v2/create-m2m-app). Then on the [Application page](https://manage.auth0.com/dashboard/eu/webthusiast/applications) click on the 'API Explorer Application' and find the following environment variables.

    $ echo YOUR_CLIENT_ID=<Client ID> >>env
    $ echo YOUR_CLIENT_SECRET=<Client Secret> >>env
    $ echo YOUR_DOMAIN=<Domain> >>env

Now list all convenience functions from the bashrc:

    $ ./do

Get the JWT:

    $ ./do get-jwt
