FROM node:18 as build
WORKDIR /opt/app
ADD *.json ./
RUN npm install
ADD . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /opt/app
ADD *.json ./
RUN npm install --omit=dev
COPY --from=build /opt/app/build ./build
CMD serve -s -p 8080 build

EXPOSE 8080