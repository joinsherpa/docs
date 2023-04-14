git_sha=$(git rev-parse main)
docker buildx build --platform linux/amd64 -t usa-check-ui:"$git_sha" .
docker tag usa-check-ui:"$git_sha" northamerica-northeast2-docker.pkg.dev/autobots-production/usa-check-ui/usa-check-ui:"$git_sha"
docker push northamerica-northeast2-docker.pkg.dev/autobots-production/usa-check-ui/usa-check-ui:"$git_sha"
gcloud run deploy usa-check-ui --image northamerica-northeast2-docker.pkg.dev/autobots-production/usa-check-ui/usa-check-ui:"$git_sha" --region northamerica-northeast2 --memory 128Mi --port 80 --allow-unauthenticated --project autobots-production
