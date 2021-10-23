## Setup

### MacOS/Linux

- `npm install`
- `npm start`

### Windows

- `npm install`
- `npm run build-watch` to start the webpack process
- Open another terminal window; from there, `npm run start-server` to start the server process

## Questions

- I chose to manually write out the divs for each comparison block, if I had a larger data set I would map through the data and make sure the information was displayed in a more dynamic way
- The application is very simply, I didn't over complicate or over-design the project
- Scaling the project to 100 users/second traffic would require a load balancer which would distribute the traffic to multiple servers
- I would have loved to used WebSockets and have data streamed live to users. Having a more dynamic solutions to the data set would make the project more modularized and scaleable.
