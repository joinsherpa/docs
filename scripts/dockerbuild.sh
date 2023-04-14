cd ..

GIT_SHA=$(git rev-parse main)
APP_NAME=safecard-docs
PROJECT=sherpa-autobots-dev

docker buildx build --platform linux/amd64 -t "$APP_NAME":"$GIT_SHA" .
docker tag "$APP_NAME":"$GIT_SHA" northamerica-northeast1-docker.pkg.dev/"$PROJECT"/"$APP_NAME"/"$APP_NAME":"$GIT_SHA"
docker push northamerica-northeast1-docker.pkg.dev/"$PROJECT"/"$APP_NAME"/"$APP_NAME":"$GIT_SHA"
gcloud run deploy "$APP_NAME" --image northamerica-northeast1-docker.pkg.dev/"$PROJECT"/"$APP_NAME"/"$APP_NAME":"$GIT_SHA" --region northamerica-northeast1 --memory 128Mi --port 80 --allow-unauthenticated --project "$PROJECT"
