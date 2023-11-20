# use node docker image to build
FROM node:21-alpine as build

# set working directory inside container
WORKDIR /usr/local/app

# copy all project files into container
COPY ./ /usr/local/app/

# install dependencies
RUN npm install

# do a production build with vite
RUN npm run prod-build


# use nginx docker image for serving
FROM nginx:1.25.3   

# copy static files from node docker container to nginx docker container
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# allow connections over port 80
EXPOSE 80