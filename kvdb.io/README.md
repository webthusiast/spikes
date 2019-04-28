[KVdb](https://kvdb.io/) is an online key-value database, that you can use without registration. It provides very simple authentication and [authorization](https://kvdb.io/docs/api/#authorization).

To create a bucket:

  $ ./do create-bucket

Set a value:

  $ ./do set-value some-key some-value

List all KV's:

  $ ./do list-keys

Delete a KV:

  $ ./do delete-key some-key

Delete the bucket:

  $ ./do delete-bucket  # doesn't seem to work, though...
