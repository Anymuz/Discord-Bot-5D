# Discord Bot 5D

A modular, multi-bot framework for Discord bots using Node.js and Discord.js. This bot is designed for flexibility, allowing multiple bots with their own configurations to run simultaneously. It supports dynamic command and event handling, making it easy to add features and manage bot behavior.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Adding Commands](#adding-commands)
- [Adding Events](#adding-events)
- [Example Commands](#example-commands)
- [Contributing](#contributing)
- [Resources](#resources)

## Features

- **Multi-Bot Support**: Run multiple Discord bots with individual configurations.
- **Modular Command & Event Structure**: Commands and events are loaded dynamically, enabling straightforward customization and expansion.
- **Environment Configurations**: Easily switch between development and production setups using environment variables.

## Project Structure
Here's a basic overview of the repository structure:

| File/Directory   | Description                                                  |
|------------------|--------------------------------------------------------------|
| `bots/`          | The core of any bot, contains configurations and deployment. |
| `commands/`      | Contains individual command files (e.g., ping, help).        |
| `events/`        | Contains event handlers for the bot (e.g., ready, message).  |
| `setup/`         | Contains setup modules to prepare the bot (do not edit).     |
| `config.json`    | Configuration JSON file for bot settings.                    |
| `index.js`       | The core of the discord bot (do not edit).                   |
| `package.json`   | Project metadata and package dependencies.                   |

The bot is dynamic, commands can be written independently and then used by writing `commands/name.js` files where `name` is the name of your command. The same logic applies for event handlers, and bot message templates can also be used (upcoming).

The main components of the project are as follows:
- **`commands/`**: Holds individual command files. Each command is organized as its own module, making it easy to add, update, or remove commands without affecting the rest of the code.
- **`events/`**: Contains event files that handle specific Discord.js events (e.g., message events). These files are triggered based on bot activity.
- **`config/`**: Manages environment-based configurations, allowing different setups for development, testing, and production environments.
- **`index.js`**: The main entry point. This file initializes the bot, loads commands, and listens for events.

## Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anymuz/Discord-Bot-5D.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file with the following variables:
   ```
   DISCORD_TOKEN=<your-discord-token>
   PREFIX=!
   ENVIRONMENT=development
   ```
   Replace `<your-discord-token>` with your bot’s token and configure other settings as needed.

## Usage
To start the bot:
```bash
npm start
```

## Adding Commands
To add a new command:
1. Create a new file in the `commands/` folder.
2. Export a function handling the logic for the command, following the existing command structure.
3. The bot will automatically detect and load the command.

## Adding Events
To add a new event handler:
1. Create a new file in the `events/` folder.
2. Export an event listener function.
3. Link the event type (e.g., message, ready) to your function, and the bot will automatically register it.

## Example Commands
Basic command examples include a `ping` command that checks bot responsiveness:
```js
module.exports = {
  name: 'ping',
  description: 'Ping command to check bot responsiveness',
  execute(message, args) {
    message.channel.send('Pong!');
  },
};
```

## Contributing
Please contact Anymuz to  join the team.

## Resources
- [Discord.js Documentation](https://discord.js.org/#/docs)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---
Enjoy building your modular Discord bot with this framework!
