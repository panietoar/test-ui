# Test UI project

This repo contains the front end and back end for the test.
I've used an Express json api to persist the project's data and user authentication.
For that part I've just used a simple username and password hasing to store in the server, since ther ewas no time to use JWT or something more complex.


The login part and votes part were build with Vue, everything else as a static page to showcase html and css knowledge.


To run the project, start the back end service by running `npm install` then `node index.js` on the test-back folder.

Then run `yarn install` then `yarn serve` on the test-ui folder.

Enjoy.