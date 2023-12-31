#!/bin/bash

timestamp=$(date +%s)

# Empty dist folder
rm -rf dist/*

# Pull latest code
echo "Pull latest code"
git pull

# Install packages
echo "Installing packages"
npm install

# Create build
echo "Build"
npm run build

# AWS S3 code deploy
echo "Removing files from s3 bucket"
aws s3 rm --recursive s3://alharamaincab.com/ --profile alharamaincab

echo "Upload code to s3 bucket"
aws s3 sync "dist/" s3://alharamaincab.com --delete --cache-control max-age=31536000 --profile alharamaincab

echo "Invalidate cloud-front cache on aws"
aws cloudfront create-invalidation --profile alharamaincab --distribution-id=EPPEI0ZS9TTWB --paths /
aws cloudfront create-invalidation --profile alharamaincab --distribution-id=EPPEI0ZS9TTWB --paths /*

echo "Done!!! ${timestamp}"
