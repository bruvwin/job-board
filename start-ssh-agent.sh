#!/bin/bash

if ! pgrep -u "$USER" ssh-agent > /dev/null; then
  echo "Starting ssh-agent..."
  eval "$(ssh-agent -s)"
else
  echo "ssh-agent already running."
fi

ssh-add ~/.ssh/id_ed25519_personal_git
