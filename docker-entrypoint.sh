#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# bundle install - By running `check` first, we can verify that gems are already installed
# and up-to-date before trying to install.
bundle check || bundle install

# npm install
npm --unsafe-perm install

# Cleanup Caches
rm -rf /app/client/node_modules/.cache
rm -rf /app/tmp/cache/bootsnap*

# Create or migrate database
#bin/rake db:exists && bin/rake db:migrate || bin/rake dev:setup

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
