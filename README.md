# Django + Webpack + React + Babel + Less

All webpack configuration is under .webpack/

## Environment set-up

    npm install

    virtualenv env

    . env/bin/activate

    pip install -r requirements.pip

## JS/CSS bundle lifecycle

    npm run watch       # Should be running during development

    npm run build       # To create a single development build

    npm run build-prod  # To create a production build

Followed tuturial at http://owaislone.org/blog/webpack-plus-reactjs-and-django/

django-webpack reads the bundle version from webpack-stats-[env].json


