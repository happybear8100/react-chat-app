<!-- ABOUT THE PROJECT -->

## About The Project

A real-time app to exchange messages with connected users. Built for learning purposes. This was the first time using **Socket.io**, so I decided to follow their tutorial to create a chat app and I added a few of the suggested features.

### Built With

- Node.js
- Socket.io
- React.js
- Tailwind CSS

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have npm installed.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lucasmrl/chat-app.git
   ```
2. From the root, install NPM packages
   ```sh
   npm install
   ```
3. From the CLIENT directory, install NPM packages
   ```sh
   npm install
   ```
4. Run the project using this command:
   ```sh
   npm run dev
   ```

### Deploy (Example using Heroku)

- uncomment lines 10-13 from "server.js"
  ```sh
   // app.use(express.static(path.join(__dirname, "client/build")));
   // app.get("/*", function (req, res) {
   //   res.sendFile(path.join(__dirname, "client/build", "index.html"));
   // });
  ```

<!-- USAGE EXAMPLES -->

## Features

- Support for nickname
- Message to connected users when someone connects or disconnects
- List with online users
- Private messages
- Mobile friendly

## Future improvements

- Add “{user} is typing” functionality.
- Support for changing avatar image
- Option to create/join different "rooms"
- Add rich text editor
- Add support for videos, images, and GIFs.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
