This application dynamically displays and differentiates the prices of Bitcoin and Ethereum from Coinbase and Binance

![Alt text](public/app-shot.png?raw=true "coin-price-difference")

## Setup

### MacOS/Linux

- `npm install`
- `npm start`

### Windows

- `npm install`
- `npm run build` to start the webpack process
- Open another terminal window; from there, `npm run start-server` to start the server process

https://codesandbox.io/s/m8wsp

## Questions

- I chose to manually write out the divs for each comparison block, if I had a larger data set I would map through the data and make sure the information was displayed in a more dynamic way
- The application is very simple, I didn't over complicate or over-design the project
- Scaling the project to 100 users/second traffic would benefit from having a load balancer which would distribute the traffic to multiple servers
- I would have loved to used WebSockets and have data streamed live to users. Also having a more dynamic solutions to the data set would make the project more modularized and scaleable.
