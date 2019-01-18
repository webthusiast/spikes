[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/webthusiast/spikes/master?filepath=binder%2FFirst.ipynb)

See [Preparing a repository for Binder](https://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder)

Go to [binder](https://mybinder.org/v2/gh/webthusiast/spikes/master?filepath=binder%2FFirst.ipynb)

Running the notebooks locally:

    $ pipenv --python 3.6
    $ pipenv install
    $ pipenv shell
    (binder-hFWpeJt8) $ jupyter lab

NB: `Pipfile` and `Pipfile.lock` are not recognized by binder, so requirements.txt and runtime.txt are needed
