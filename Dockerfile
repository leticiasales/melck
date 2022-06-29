FROM ruby:3.0.4

# Install base packages
# - postgresql-client: so we can build the pg gem
# - libxslt and libxml2-dev: so we can build the nokogiri gem
# - git: so we can fetch gems from github in the Gemfile
# - cmake: so we can build the rugged gem
RUN apt-get update -qq \
  && apt-get install -y postgresql-client libxslt-dev libxml2-dev git cmake wkhtmltopdf

# Install node v14 per https://github.com/nodesource/distributions
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

# Install heroku CLI: so we can run `heroku local` as our command
RUN npm install -g heroku

WORKDIR /app

# Rubygems
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN gem install bundler

# Add a script to be executed every time the container starts.
COPY docker-entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

# Expose puma/web
EXPOSE 3000
EXPOSE 3001
