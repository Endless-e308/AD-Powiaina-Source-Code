# Antimatter Dimensions - "My Changes"
Antimatter Dimensions fork with some changes to make development of mods easier.
Currently based on commit [b813542](https://github.com/IvarK/AntimatterDimensionsSourceCode/commit/b813542).

## Run

To run the game locally, you will need to install [Node.js](https://nodejs.org/) (LTS 20 suggested).

First, run the following command in your terminal (or command line) while being
inside the checked out repository:

```
npm ci
```

After all the packages are installed, start up the game:

```
npm run dev
```

This will make the game served via your localhost, and the playable link will
be displayed in your terminal. The server **doesn't** need to be restarted
after you've made changes - just reload the page (if it doesn't reload automatically).
The server **can** occasionally crash, so check your terminal from time to time and run `dev`
again if needed.
