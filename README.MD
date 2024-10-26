# Modular Discord Bot
## Table of Contents (This document is outdated, only Installation and Environment setup is accurate for now)
- [Description](#description)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Installing Node.js](#install-nodejs)
  - [Installing Dependencies](#install-dependencies)
- [Environment Setup](#environment-setup)
  - [Creating a .env file](#the-env-file)
  - [Using .gitignore](#set-gitignore-file-exemptions)
  - [Multistaging](#multiple-environments)
- [Configuration](#configuration)
- [Running the Bot](#running-the-bot)
- [Information](#information)

## Description
A simple and modular Discord bot built using Node.js and Discord.js. This bot is designed to be easy to extend with multiple commands and features. Through the use of modular design, commands and event handlers are seperated from the key elements that set them up which are linked together in the `bot.js` core. This is not only done so that projects can be collaborated on more freely withhout having to merge code. The design philosphy is by using seperate modules as the commands and features, elements of projects can be easily re-used. This project repo allows the creation of multiple bots that use the same code depending on if the core javascript program imports them ot not. This bot supports [multistaging](#multiple-environments).

*This installation guide is standardised to use `bash` commands, on windows you may need to ensure you are using the `git bash` terminal for the commands.*

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

## Installation

### Install Node.js
To run the bot, you need to have Node.js installed on your machine.You can install it by following the links below.
- Download Node.js (Windows/macOS): https://nodejs.org
- Linux Installation Guide: https://nodejs.org/en/download/package-manager/

Once done, ensure Node.js has been installed by running one of the two commands below. The output should include a version number, if this is not the case then Node.js has not installed correctly. 
```bash
node -v
npm -v
```
After verifying that Node.js was installed, change to the folder directory you wish to store locally in and then clone the repository `git -clone`(finish cmd).

### Install Dependencies
After installing Node.js, run the following commands to clone this repository, navigate to the project folder, and install the required packages:
```bash
git clone https://github.com/Anymuz/{pending}.git
cd your-repo
npm install
```

This will install all the packages listed in the package.json file, including discord.js and other dependencies.

## Environment Setup
The bot requires some environment variables to function, such as your bot token and any other settings. For the security of concealing your bot's token and other valuable information, these variables should be stored in a `.env` file in the root, directory of the project.

### The `.env` file
For security reasons, the tokens that you use must be manually loaded into the node js environment from a `.env` file. This file is added to `.gitignore` and thus does not come with the project directory. Before you can authenticate the bot, create a `.env` file in the main project directory.
```bash
touch .env
```
You can now edit this file, the discord bot token is stored as `DISCORD_TOKEN` which the bot authentication looks for before starting up. The aplication client ID is also stored as `CLIENT_ID` To avoid confusion copy and paste the template below.

```
DISCORD_TOKEN=[your-bot-token-here]
CLIENT_ID=[application-id-here]
```
Make sure to replace `[your-bot-token-here]` with your actual Discord bot token. You can get the bot token from the Discord Developer Portal: https://discord.com/developers/applications then going from Discord Developer Porta > "Bot" > token (create a bot first). You will also need to replace `[application-id-here]` with the one found as application ID in the same portal: https://discord.com/developers/applications/1287201343496257638/information. From the link: Discord Developer Portal > "General Information" > application id.

### Set `.gitignore` file exemptions
For this to be done securely, you must ensure the `.env` file and any other files you don't want stored on the repo are listed in a file you can create with:
```bash
touch .gitignore
```
Then ensure this file has in it the following:
```
node_modules
.env
```
Any files you wish to not push to the branch and commit must be listed as such.

### Multiple environments (deprecated)
It is possible with use of the configuration file in the next section to determine the exact type of bot you wish to run. This bot has three states that it supports, by default it will read a standard `.env` file, but to insure seperation between a bot in development, a bot in testing, or a final release version, you can create the following three files:
```bash
touch .env.production
touch .env.development
touch .env.testing
```
Make sure the `.gitignore` file is set acordingly.
```
node_modules
.env
.env.production
.env.development
.env.testing
```
This is only required if you plan to use seperate bots for each of the three phases for ensurance of availability and to allow the bot to keep operating while new versions are created and tested. If those three `.env` files are not found the bot will default to reading from a standard `.env` file.

### Configuration
Within the repo there should be a file called `config.json` which will look like the following:
```
{
    "stage_version" : "[your development version]",
    "prod_version" : "[your release version]",
    "last_release" : "[Date of release]",
    "staging": false,
    "development" : true,
    "debug_mode" : true 
}
```
The usage is very simple, you can set the bot version for staged and production, if using a single environment and bot from development to release then everything can be ignored and left as default. For usage of multiple environment states you can set `"staging" : true` to enable the use of multiple `.env` files. After this `"development" : false` will determine if the bot is ready for usage and will use the variables in `.env.testing`, once you are satisfied with the functionality, set `"debug_mode" : false` to make the `.env.production` file read.

By default both are set to true, which will run the default development environment. If `"Staging" : false` is set but both `"development" : true` and `"debug_mode" : true` are set, then `.env` will still be used.

## Running the Bot
Once everything is set up, you can start the bot by running the following command in the terminal:
```bash
npm start
```
Alternatively, you can use
```bash
node index.js
```
The bot should now be running and ready to respond to commands in your Discord server!

## Information
![NAME](https://img.shields.io/badge/Name-Komand-green)![VERSION](https://img.shields.io/badge/Version-1.0-green)

![DEVELOPER](https://img.shields.io/badge/Developed%20for-%205%20Dimensional%20Development%20(5D2)-red)

![INTELLECTUAL_RIGHTS](https://img.shields.io/badge/Intellectual_Rights%20-Anymuz-red)

![LICENCED](https://img.shields.io/badge/Licensed-Discord-blue)
