Before you can use the [API](https://developers.digitalocean.com/documentation/v2/), you need to [create a token](https://www.digitalocean.com/docs/api/create-personal-access-token/) [here](https://cloud.digitalocean.com/account/api/tokens).

    $ echo TOKEN=<token> >>env
    $ echo PUBLIC_SSH_KEY_FILE=<key>.pub >>env
    $ echo DOMAIN=<domain> >>env

Now list all convenience functions from the bashrc:

    $ ./do

Upload your SSH key, and create a volume and a droplet:

    $ ./do create-ssh
    $ ./do create-volume
    $ ./do create-droplet

SSH in there:

    $ ./do ssh-droplet

Destroy the droplet and volume:

    $ ./do delete-droplet
    $ ./do delete-volume

---

To associate the droplet with a domain, first create a domain and record:

    $ ./do create-domain
    $ ./do create-domain-record

Update the domain record (e.g. because the droplet is recreated):

    $ ./do update-domain-record

Delete the domain record (e.g. because the droplet is deleted):

    $ ./do delete-domain-record
