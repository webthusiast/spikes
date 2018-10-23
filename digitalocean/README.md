Before you can use the [API](https://developers.digitalocean.com/documentation/v2/), you need to [create a token](https://www.digitalocean.com/docs/api/create-personal-access-token/) [here](https://cloud.digitalocean.com/account/api/tokens).

    $ echo TOKEN=<token> >>env
    $ echo PUBLIC_SSH_KEY_FILE=<key>.pub >>env

Make some convenience functions available:

    $ bash --rcfile bashrc
    (do) $

Now list all convenience functions from the bashrc:

    (do) $ ?

Upload your SSH key, and create a volume and a droplet:

    (do) $ create-ssh
    (do) $ create-volume volume1
    (do) $ create-droplet droplet1
    (do) $ attach-volume volume1 droplet1

SSH in there:

    (do) $ ssh-droplet droplet1

Destroy the droplet:

    (do) $ delete-droplet droplet1

Generally, don't destroy the volume. But if you really want to:

    (do) $ list-volumes | jq '.volumes | map({id: .id, name: .name})'
    (do) $ delete-volume volume1
    enter the volume id: ...
