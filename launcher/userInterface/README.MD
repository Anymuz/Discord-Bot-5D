# Anymuz Interaction

A modular user interface package designed to construct and manage interactive menu systems, with flexible display and response management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Classes](#api-classes)
  - [Display](#display)
  - [Menu](#menu)
  - [MenuOption](#menuoption)
  - [OptionsArray](#optionsarray)
  - [OptionsDisplay](#optionsdisplay)
  - [InterfaceResponse (Abstract Class)](#interfaceresponse-abstract-class)
    - [ExecutionResponse](#executionresponse)
    - [MenuResponse](#menuresponse)
    - [RedirectResponse](#redirectresponse)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install, run:

```bash
npm install anymuz-interface
```

### For unpublised included within Discord Bot

Navigate with `cd ./launcher/userInterface` and use:
```bash
npm link anymuz-interface
```
Then navigate back via `cd ../..` and run:
```bash
npm link anymuz-interface
```

## Usage

Here is an example of how to use the package to create and display a menu:

```javascript
import {
    Display,
    Menu,
    MenuOption,
    OptionsArray,
    OptionsDisplay,
    ExecutionResponse,
    RedirectResponse
} from 'anymuz-interaction';

// Define menu options
const options = new OptionsArray(
    new MenuOption('Option 1', 'execution', new ExecutionResponse('Success!', 'Error!'), null, () => console.log('Executing Option 1')),
    new MenuOption('Option 2', 'redirection', new RedirectResponse('Redirecting...'), new Menu(/*...*/), null)
);

// Define display and menu
const display = new Display('Main Menu', 'Select an option:', new OptionsDisplay());
const mainMenu = new Menu(display, options, process.stdin);

// Present the menu
mainMenu.start();
```

## API Classes

### Display

Handles displaying menu content, including title and options. Integrates with `OptionsDisplay` to format options.

**Constructor:**

```javascript
new Display(heading, subText, optionsDisplay, encasing='[]', fillChar='-', lineLength=64)
```

- **heading** (string): The main heading for the display.
- **subText** (string): Subtitle or additional text to display.
- **optionsDisplay** (OptionsDisplay): Instance of `OptionsDisplay` to manage display of options.
- **encasing** (string, optional): Characters used to encase headings, default is `'[]'`.
- **fillChar** (string, optional): Character for filling lines, default is `'-'`.
- **lineLength** (number, optional): Length of each line in the display, default is `64`.

### Menu

Manages a collection of options that can either execute commands or redirect to other menus.

**Constructor:**

```javascript
new Menu(display, options, userInterface, nameInput=false)
```

- **display** (Display): The `Display` instance to manage visual output.
- **options** (OptionsArray): Array of menu options.
- **userInterface** (Readline.Interface): Readline interface for user input.
- **nameInput** (boolean, optional): Whether input is by name or number, default is `false`.

### MenuOption

Defines an individual menu option, capable of executing actions or redirecting to other menus.

**Constructor:**

```javascript
new MenuOption(label, type, response, targetMenu, action=null)
```

- **label** (string): Label for the menu option.
- **type** (string): Type of option, either `'execution'` or `'redirection'`.
- **response** (InterfaceResponse): Response to be used with this option.
- **targetMenu** (Menu): Target menu if the option is a redirection.
- **action** (function, optional): Function to execute if option type is `'execution'`.

### OptionsArray

Specialized array for storing menu options, with type-checking for `MenuOption` items.

**Constructor:**

```javascript
new OptionsArray(...options)
```

- **options**: A list of `MenuOption` objects to initialize the array.

### OptionsDisplay

Controls the way options are presented within a menu, including separators, line breaks, and alignment.

**Constructor:**

```javascript
new OptionsDisplay(separator="|", splitter=":", start="", newline=true)
```

- **separator** (string, optional): Character separating options, default is `"|"`.
- **splitter** (string, optional): Character between index and label, default is `":"`.
- **start** (string, optional): Starting character or text for options, default is `""`.
- **newline** (boolean, optional): If true, options are displayed on new lines, default is `true`.

### InterfaceResponse (Abstract Class)

An abstract base class for handling standardized responses in menu options. This class cannot be instantiated directly and provides a foundation for specific response types.

- **getPositive**: Returns the positive response message.
- **getNegative**: Returns the negative response message.
- **setPositive**: Sets a positive response message.
- **setNegative**: Sets a negative response message.

### ExecutionResponse

Extends `InterfaceResponse` to provide success and error messages for options involving execution actions.

**Constructor:**

```javascript
new ExecutionResponse(successMessage, errorMessage)
```

- **successMessage** (string): The message displayed upon successful execution.
- **errorMessage** (string): The message displayed upon failure.

**Methods:**
- **print**: Prints the success message with function name.
- **printErr**: Prints the error message with function name.

### MenuResponse

Extends `InterfaceResponse` to handle responses related to menu interaction, specifically for error messages when incorrect input is provided.

**Constructor:**

```javascript
new MenuResponse(errorMessage="Error!")
```

- **errorMessage** (string, optional): The default error message for invalid menu interactions.

**Methods:**
- **printError**: Displays the error message.

### RedirectResponse

Extends `InterfaceResponse` to provide messages for options that redirect users to other menus.

**Constructor:**

```javascript
new RedirectResponse(responseMessage=null)
```

- **responseMessage** (string, optional): The message displayed upon redirection.

**Methods:**
- **print**: Displays the redirection message.

## Configuration

The following classes offer various customization options:
- **Display**: Customize menu `heading`, `subText`, `encasing`, `fillChar`, and `lineLength` for flexible menu appearance.
- **Menu**: Configure `nameInput` to allow options to be selected by name or by number, and set the display properties.
- **MenuOption**: Specify option types (`'execution'` or `'redirection'`) and configure actions or redirections as required.
- **OptionsArray**: Holds `MenuOption` items, ensuring type-checked storage for consistent menu options.
- **OptionsDisplay**: Control the layout of menu options with customizable `separator`, `splitter`, `start`, and `newline` options for display alignment.
- **InterfaceResponse (Abstract Class)**: Used as a base for specific response types (`ExecutionResponse`, `MenuResponse`, `RedirectResponse`). Customize response messages with `setPositive` and `setNegative` methods.
  - **ExecutionResponse**: Provides success and error messages for execution-type actions. Customize by setting `positive` and `negative` messages for action feedback.
  - **MenuResponse**: Used to handle and display error messages specific to menu interactions. Customize error messages for invalid input or option selection.
  - **RedirectResponse**: Handles redirection messages for menu options that navigate to other menus. Configure redirection confirmation with a `positive` message.


## Contributing
Please contact Anymuz to  join the team.

## License
This project is licensed under the ISC License. 

![NAME](https://img.shields.io/badge/Name-Anymuz%20Interface-green)![VERSION](https://img.shields.io/badge/Version-1.2.2-green)

![DEVELOPER](https://img.shields.io/badge/Developer-%205%20Dimensional%20Development%20(5D2)-red)

![INTELLECTUAL_RIGHTS](https://img.shields.io/badge/Developed_by%20-Anymuz-red)
![LICENCED](https://img.shields.io/badge/License-ISC-blue)

