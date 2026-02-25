#!/usr/bin/env bash
set -e
npm run build
rsync -avz --delete dist/ pejfaimy@50.87.185.106:~/public_html/website_2ce65997/
