# GRANDstack Native Web Starter Kit

This project is a starter for building a modified GRANDstack (GraphQL, React, Apollo, Neo4j Database) application with the addition of React-Native-Web and Lerna. There are two packages to the starter, the Client application (a React/React Native app) and the API app (GraphQL server).

## Quickstart

#### NEO4J
1. [Download Neo4j Desktop](https://neo4j.com/download/)
2. Install and open Neo4j Desktop.
3. Create a new DB by clicking "New Graph", and clicking "create local graph".
4. Set password to "password", and click "Create".
5. Make sure that the default credentials are used. Leave them as follows: `NEO4J_URI=bolt://localhost:7687 NEO4J_USER=neo4j NEO4J_PASSWORD=password`
6.  Click "Manage".
7. Click "Plugins".
8. Find "APOC" and click "Install".
9. Click the "play" button at the top of left the screen, which should start the server.
10. Wait until it says "RUNNING".
11. Proceed forward with the rest of the tutorial.

#### Project Commands

*Create Default .env*

```
yarn env
```

*Install Dependencies*

```
yarn
yarn bootstrap
```

*Seed Database*

```
yarn seed
```

*Startup*

```
yarn start-web
or
yarn start-ios
```

This project is licensed under the Apache License v2.
Copyright (c) 2018 Neo4j, Inc.
