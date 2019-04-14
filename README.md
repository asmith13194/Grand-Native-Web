# GRAND-Native-Web Stack Starter

This project is a starter for building a GRAND Native Web (GraphQL, React, Apollo, Neo4j Database, React-Native-Web) application. There are two components to the starter, the UI application (a React/React Native app) and the API app (GraphQL server).

## Quickstart

#### NEO4J
1. [Download Neo4j Desktop](https://neo4j.com/download/)
2. Install and open Neo4j Desktop.
3. Create a new DB by clicking "New Graph", and clicking "create local graph".
4. Set password to "password" (as suggested by `api/.env`), and click "Create".
5. Make sure that the default credentials in `api/.env` are used. Leave them as follows: `NEO4J_URI=bolt://localhost:7687 NEO4J_USER=neo4j NEO4J_PASSWORD=password`
6.  Click "Manage".
7. Click "Plugins".
8. Find "APOC" and click "Install".
9. Click the "play" button at the top of left the screen, which should start the server. _(screenshot 2)_
10. Wait until it says "RUNNING".
11. Proceed forward with the rest of the tutorial.

### [`/api`](./api)


*Install dependencies*

```
cd ./ui && yarn && yarn seedDb
cd ./api && yarn
```

*Start API server*
```
cd ./api && yarn start
```

### [`/ui`](./ui)

This will start the GraphQL API in the foreground, so in another terminal session start the UI development server:

*Start UI server*
```
cd ./ui && yarn start-ios
or
cd ./ui && yarn start-web
```


This project is licensed under the Apache License v2.
Copyright (c) 2018 Neo4j, Inc.