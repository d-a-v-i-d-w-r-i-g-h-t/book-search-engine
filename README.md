# Book Search Engine

## Description 

For this project, I took a fully-functional Google Books API search engine built with a RESTful API, and I refactored it to be a GraphQL API built with Apollo Server. This app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.

To accomplish this, I completed the following:

* Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

* Modified the existing authentication middleware so that it works in the context of a GraphQL API.

* Created an Apollo Provider so that requests can communicate with an Apollo Server.

Why would I make this change and potentially break a perfectly functioning website? There are several reasons.

GraphQL provides efficient data retrieval. It allows clients to specify and request the exact shape of data they require, minimizing network traffic. Batching and caching are available and also help to reduce network traffic by grouping requests together and storing frequently requested data locally. It provides a single endpoint for all data operations, and the schema is flexible and easy to modify as needed. Clients can also subscribe to real-time data updates when the data changes on the server. Finally, with GraphQL and Apollo Client, there is a great quantity of tools and libraries available to expand functionality to suit the client's needs.

This project was successfully deployed on [render](https://render.com/) with a [MongoDB Cloud](https://www.mongodb.com/) database. It can be accessed [here](https://book-search-engine-5ell.onrender.com/).


## Installation

To install the application locally, copy the files and folders to the desired location. To install dependencies, enter the command

```
npm install
```

from the root directory.


## Usage 

The application can be run from its deployed location [here](https://book-search-engine-5ell.onrender.com/).

To run it locally in a development environment, enter the command
```
npm run develop
```
from the root directory. Then open the following address in your web browser:
```
http://localhost:3000/
```

```md
![alt text](assets/images/screenshot.png)
```


## Credits

Most of the code was already written, as can be seen in the repo commit history. To complete the refactor, I had to add [graphql](https://www.npmjs.com/package/graphql), [@apollo/client](https://www.npmjs.com/package/@apollo/client), [@apollo/server](https://www.npmjs.com/package/@apollo/server), and [apollo-server-express](https://www.npmjs.com/package/apollo-server-express), and modify the code appropriately.


## License

Please refer to the LICENSE in the repo.


---
