#!/bin/bash

set -x

user=roald

adduser --disabled-login --gecos '' $user
usermod -aG sudo $user
sudo -u $user -s -- <<EOF
  mkdir ~$user/.ssh
  printf '$(cat ~/.ssh/authorized_keys)' >/home/$user/.ssh/authorized_keys
EOF
