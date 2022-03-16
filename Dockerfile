FROM node:lts-slim as build
WORKDIR /itbe-client
COPY package*.json /itbe-client/
RUN npm install
COPY . /itbe-client
RUN npm run build

FROM nginx:stable
COPY --from=build /itbe-client/dist /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]