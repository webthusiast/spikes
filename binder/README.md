See [Preparing a repository for Binder](https://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder)

Go to [binder](mybinder.org/

Running the notebooks locally:

    $ pipenv --python 3.6
    $ pipenv install
    $ pipenv shell
    (binder-hFWpeJt8) $ jupyter lab

NB: `Pipfile` and `Pipfile.lock` are not recognized by binder, so requirements.txt and runtime.txt are needed
