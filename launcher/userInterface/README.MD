# <p align="center">Anymuz Interface</p>
*<p align="center">Created by Anymuz and 5 Dimensional Development</p>*
## Description
**Anymuz Interface** is a modular and highly customizable user interface package designed to build, manage, and control interactive menu systems in JavaScript applications. With a flexible approach to displaying menu options, managing user responses, and handling redirections, this package is ideal for creating command-line interfaces, interactive prompts, and multi-step workflows.

Developed by **5 Dimensional Development**, this package features a set of core classes, utilities, and modules that streamline the process of developing robust and interactive user interfaces. Developers can easily define custom menus, display options, and responses, or extend the built-in functionalities to meet specific requirements. With its modular architecture, **Anymuz Interface** provides everything needed to construct intuitive user experiences, whether in a standalone application or as part of a larger software ecosystem.

Key features include:
- **Flexible Display Control**: Customizable options for managing headings, subtexts, and visual layouts for an engaging user experience.
- **Customizable Menu Options**: Supports action-based (`'execution'`) or navigation-based (`'redirection'`) menu options, with configurable responses.
- **Robust Validation and Utilities**: Includes utility modules for validating types, processing string operations, and managing consistent menu responses.
- **Modular Response Handling**: Interfaces for positive and negative responses, enabling consistent and meaningful feedback for users.

The full functionality, design and usage of this package is further elaborated on and detailed in the various sections of this document.

## Installation
There are three quick and easy ways to begin using **Anymuz Interface** depending on if you are using it in a project, working on a standalone release, or part of the **5 Dimensional Development** team working within the **Anymuz Discord** project which this package was initally designed for.

### Published Releases
Simply run the following within your project:
```bash
npm install anymuz-interface
```

### Unpublished or Standalone Development
Install node.js into your workspace and then clone the repo which this document is contain in, then be sure to run:
```bash
npm install
```

### Internal Use and Development within Anymuz Discord
This applies to members of the **5 Dimensional Development** team working on the **Anymuz Discord** project. Navigate and run:
```bash
cd ./launcher/userInterface
npm link
```
Return to main directory and install:
```bash
cd ../..
npm link anymuz-interface
```
## Project Structure
The following table provides a structured overview, this is to help developers quickly navigate the codebase and understand the purpose of each file and directory. 
The **Anymuz Interface** project files are organized in the following structure.

**Changes to package files and directory structure are strictly forbiddeen. Unauthorized releases of original classes and modules infringes on the intellectual and property rights belonging to 5 Dimension Development and may cause payment and subscription for access to future versions.**

| **Path**                    | **Description**                                                     |
|-----------------------------|---------------------------------------------------------------------|
| CHANGELOG.MD                | *Changelog file tracking version updates and changes.*              |
| index.js                    | *Entry point for the project, importing and exporting key modules.* |
| package-lock.json           | *Lock file to ensure consistent dependency versions across builds.* |
| package.json                | *Metadata and dependency definitions for the project.*              |
| README.MD                   | *Documentation file with usage examples, configuration, and setup.* |
| class/                      | *Directory containing primary class files for menu interactions.*   |
| class/Display.js            | *Class managing menu display options, including headers and text.*  |
| class/InterfaceResponse.js  | *Abstract base class for various response types in the UI.*         |
| class/Menu.js               | *Main class defining the menu structure and input processing.*      |
| class/MenuOption.js         | *Class for individual menu options, supporting actions and links.*  |
| class/OptionsArray.js       | *Specialized array for managing menu options with type validation.* |
| class/OptionsDisplay.js     | *Class for customizing menu option presentation and layout.*        |
| module/                     | *Directory for internal utility modules used by the classes.*       |
| module/StringOperation.js   | *Utility functions for string manipulation and formatting.*         |
| module/TypeValidation.js    | *Functions for validating types used across the project.*           |

*Commercial or profit gained from our property **will** result in **persistent legal action** includeing **fines and prosecutions** in severe cases. Wihtout prior warning, users who cause this package to no longer being freely available are **named and permenantly listed** visibly. Suggestions and additional classes or extension classes are encouraged provided original code is not modified.*

### Extentions and Polymorphisms
To add additional methods and properties to adjust functionality an features, create new module files and import and export your child classes if nessecary. Modifications to theese files and directories given in the table will invalidate the package copy, to make changes to suit your needs use `extends` and other object oriented approaches in a SEPERATE directory within your project. 

We welcome the submittion of additional custom or inherited child classes that may benefit other developers, if included in future versions, full credit will be given with poetential offers to be a contributor or become part of the *5 Dimensional Development* team.

## Table of Contents
*Click on a section name to jump to it in the file.*
- [Description](#description)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage Examples](#usage-examples)
  - [Basic Menu Setup](#basic-menu-setup)
  - [Menu with Name-Based Input](#menu-with-name-based-input)
  - [Nested Menus](#nested-menus)
- [Configuration](#configuration)
- [Classes](#classes)
  - [Display](#display)
  - [Menu](#menu)
  - [MenuOption](#menuoption)
  - [OptionsArray](#optionsarray)
  - [OptionsDisplay](#optionsdisplay)
  - [InterfaceResponse](#interfaceresponse-abstract)
  - [ExecutionResponse](#executionresponse)
  - [MenuResponse](#menuresponse)
  - [RedirectResponse](#redirectresponse)
- [Modules](#modules)
  - [StringOperation](#stringoperation)
  - [TypeValidation](#typevalidation)
- [Contributing](#contributing)
- [License](#license)



## Usage Examples
Here are some starting examples demonstrating how **Anymuz Interaction** can be used to create and manage an interactive menu system.

**NOTE: These examples contain missing aspects and require testing, as of this version (2.2.5) these code examples may not work, they will be tested and fixed in the next few versions**
### Basic Menu Setup
Showcase of creating a basic menu with execution and redirection options.
```ES6
    import {
        Display,
        Menu,
        MenuOption,
        OptionsArray,
        OptionsDisplay,
        ExecutionResponse,
        RedirectResponse } 
    from 'anymuz-interface';

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

### Menu with Name-Based Input
Demonstration of how to configure a menu that accepts option names (instead of index numbers) for selection.
```ES6
    import {
        Display,
        Menu,
        MenuOption,
        OptionsArray,
        OptionsDisplay,
        ExecutionResponse } 
    from 'anymuz-interface';

    // Define options with name-based selection enabled
    const options = new OptionsArray(
        new MenuOption('Start Process', 'execution', new ExecutionResponse('Process Started!', 'Failed to Start'), null, () => console.log('Process started')),
        new MenuOption('End Process', 'execution', new ExecutionResponse('Process Ended!', 'Failed to End'), null, () => console.log('Process ended'))
    );

    // Configure display and menu with name-based input
    const display = new Display('Operations Menu', 'Enter the exact name of the option:', new OptionsDisplay());
    const nameInputMenu = new Menu(display, options, process.stdin, true);  // Enable name-based input

    // Start the menu
    nameInputMenu.start();
```

### Nested Menus
Illustration on creating a nested menu structure, allowing users to navigate between multiple menus.
```ES6
    import {
        Display,
        Menu,
        MenuOption,
        OptionsArray,
        OptionsDisplay,
        RedirectResponse } 
    from 'anymuz-interface';

    // Define sub-menu
    const subMenuOptions = new OptionsArray(
        new MenuOption('Back to Main', 'redirection', new RedirectResponse('Returning to Main Menu...'), null)
    );
    const subMenuDisplay = new Display('Sub Menu', 'Choose an option:', new OptionsDisplay());
    const subMenu = new Menu(subMenuDisplay, subMenuOptions, process.stdin);

    // Define main menu with redirection to sub-menu
    const mainMenuOptions = new OptionsArray(
        new MenuOption('Go to Sub Menu', 'redirection', new RedirectResponse('Opening Sub Menu...'), subMenu)
    );
    const mainMenuDisplay = new Display('Main Menu', 'Select an option:', new OptionsDisplay());
    const mainMenu = new Menu(mainMenuDisplay, mainMenuOptions, process.stdin);

    // Start the main menu
    mainMenu.start();
```
These examples show the flexibility of **Anymuz Interaction** in creating various types of menus, including basic, name-based, and nested menus. They are just as a starting reference, there are a wide range of different use cases and features this package can support which are not covered by these brief examples.

## Configuration
The following classes offer various customization options, this is a brief overview of some key configurations available for each class.
- **Display**: Customize menu `heading`, `subText`, `encasing`, `fillChar`, and `lineLength` for flexible menu appearance.
- **Menu**: Configure `nameInput` to allow options to be selected by name or by number, and set the display properties.
- **MenuOption**: Specify option types (`'execution'` or `'redirection'`) and configure actions or redirections as required.
- **OptionsArray**: Holds `MenuOption` items, ensuring type-checked storage for consistent menu options.
- **OptionsDisplay**: Control the layout of menu options with customizable `separator`, `splitter`, and `newline` options for display alignment.
- **InterfaceResponse (Abstract Class)**: Used as a base for specific response types (`ExecutionResponse`, `MenuResponse`, `RedirectResponse`). Customize response messages with `setPositive` and `setNegative` methods.
  - **ExecutionResponse**: Provides success and error messages for execution-type actions. Customize by setting `positive` and `negative` messages for action feedback.
  - **MenuResponse**: Used to handle and display error messages specific to menu interactions. Customize error messages for invalid input or option selection.
  - **RedirectResponse**: Handles redirection messages for menu options that navigate to other menus. Configure redirection confirmation with a `positive` message.

Classes come with various utility methods to allow for ad-hoc adjustments and dynamic changes aswell as many different approaches to configuring an interactive user interface.

## Classes
### Display
Handles displaying menu content, including title and options. Integrates with `OptionsDisplay` to format options.

#### Properties
- **heading** (string): Main heading text.
- **text** (string): Subtitle text.
- **encasing** (string): Characters used to encase headings.
- **filler** (string): Character for filling lines.
- **line_size** (integer): Length of each line in the display.
- **OptionsDisplay** (OptionsDisplay): Instance used to format display options.

#### Constructor
```javascript
new Display(heading, subText, optionsDisplay, encasing='[]', fillChar='-', lineLength=64)
```
- **heading** (string): The main heading for the display.
- **subText** (string): Subtitle or additional text to display.
- **optionsDisplay** (OptionsDisplay): Instance of `OptionsDisplay` to manage display of options.
- **encasing** (string, optional): Characters used to encase headings, default is `'[]'`.
- **fillChar** (string, optional): Character for filling lines, default is `'-'`.
- **lineLength** (integer, optional): Length of each line in the display, default is `64`.

#### Methods
- **getEncasing()**: Retrieves the encasing characters.
- **getHeading()**: Retrieves the heading text.
- **getLineSpacer()**: Retrieves the line spacing for heading format.
- **getText()**: Retrieves the subheading text.
- **setHeading(heading)**: Sets the heading text.
- **setLineSpacer(fillChar)**: Sets line spacing character.
- **setText(text)**: Sets subheading text.
- **displayHeading(encasing, filler)**: Displays formatted heading.
- **displayText()**: Displays subheading text.
- **present(menu)**: Presents the menu and prompts for user input.
- **setOptionsDisplay(optionsDisplay)**: Sets the options display.

### Menu
A menu consists of multiple displays, each containing a question and options. The options are menu attributes. The display defines the layout, with the heading text and an OptionsDisplay to show options. The menu accepts input as a number (for option index) or option name. Options can either redirect to another menu or trigger a function if they are execution-based. Every option has a ReplyResponse, and execution options also have an ExecutionResponse. A MenuResponse handles errors with a negative response and uses a preset object for positive responses. The menu reads user input through the readline interface.

#### Properties
- **AbortControl** (AbortController): Controller for aborting input.
- **Display** (Display): Display instance for the menu.
- **MessageResponse** (AbstractResponse.MenuResponse): Response handler for errors.
- **name_input** (boolean): Flag for name-based input mode.
- **Options** (OptionsArray): Array of menu options.
- **target** (AbortSignal): Signal for managing abort control.
- **UserInterface** (ReadLine.Interface): Interface for reading user input.

#### Constructor
```javascript
new Menu(display, options, userInterface, nameInput=false)
```
- **display** (Display): Display instance for the menu.
- **options** (OptionsArray): Array of menu options.
- **userInterface** (ReadLine.Interface): Interface for reading user input.
- **nameInput** (boolean, optional): Flag for name-based input mode, default is `false`.

#### Methods
- **addOption(option)**: Adds an option to the menu.
- **getAllOptions()**: Retrieves all menu options.
- **getOption(index)**: Retrieves an option at the specified index.
- **removeAllOptions()**: Removes all menu options.
- **removeOption(index)**: Deletes an option at the specified index.
- **setAllOptions(options)**: Sets all options for the menu.
- **setUserInterface(userInterface)**: Sets the user interface for the menu.
- **setNameInput(nameInput)**: Sets whether name input is required.
- **setOption(index, option)**: Updates an option at the specified index.
- **display()**: Presents the menu and awaits user input.
- **processUserInput(userInput)**: Processes user input to execute or redirect.
- **start()**: Starts the menu interaction.

### MenuOption
Represents an interface menu option that can either execute an action or redirect to another menu.

#### Properties
- **type** (string): Option type (execution or redirection).
- **label** (string): Label for the option.
- **TargetMenu** (Menu): Target menu for redirection.
- **action** (Function): Function to execute for this option.
- **response** (AbstractResponse): Response instance for handling execution or redirection.

#### Constructor
```javascript
new MenuOption(label, type, response, targetMenu, action=null)
```
- **label** (string): Option label.
- **type** (string): Option type ('execution' or 'redirection').
- **response** (AbstractResponse): Response instance for handling the option.
- **targetMenu** (Menu): Target menu instance for redirection.
- **action** (Function, optional): Function to execute if type is 'execution', default is `null`.

#### Methods
- **execute()**: Executes the menu option based on its type.

### OptionsArray
Specialized array for holding `MenuOption` instances.

#### Properties
*Inherits standard array properties.*

#### Constructor
```javascript
new OptionsArray(...args)
```
- **args** (MenuOption[]): Initial `MenuOption` instances to populate the array.

#### Methods
*Inherits standard array methods.*

### OptionsDisplay
Controls the way in which options are presented in a menu.

#### Properties
- **new_line** (boolean): Whether each option is displayed on a new line.
- **seperator** (string): Character separating options on a single line.
- **splitter** (string): Character dividing index and label for each option.

#### Constructor
```javascript
new OptionsDisplay(separator="|", splitter=":", newLine=true)
```
- **separator** (string): Option line separator, default is `"|"`.
- **splitter** (string): Character between number and option, default is `":"`.
- **newLine** (boolean): Display each option on a new line, default is `true`.

#### Methods
- **getNewline()**: Retrieves the newline setting for display.
- **getSeperator()**: Retrieves the option separator.
- **getSplitter()**: Retrieves the option splitter between index and label.
- **setNewLine(newline)**: Sets newline display behavior.
- **setSeperator(seperator)**: Sets single line option separator.
- **setSplitter(splitter)**: Sets option splitter between index and label.
- **displayOptions(menu)**: Displays options from a Menu object.

### InterfaceResponse (Abstract)
Abstract class enforcing methods on all response objects. This class cannot be instantiated directly via a constructor method.

#### Properties
- **positive** (string): Positive response message.
- **negative** (string): Negative response message.

#### Constructor
*Abstract class can't be instantiated directly*

#### Methods
- **getPositive()**: Retrieves the positive response text.
- **getNegative()**: Retrieves the negative response text.
- **setPositive(positiveIn)**: Sets the positive response.
- **setNegative(negativeIn)**: Sets the negative response.

### ExecutionResponse
Class for execution responses with success and error messages.

#### Properties
- **positive** (string): Success message for execution.
- **negative** (string): Error message for execution.

#### Constructor
```javascript
new ExecutionResponse(successMessage, errorMessage)
```
- **successMessage** (string): Success message for execution.
- **errorMessage** (string): Error message for execution.

#### Methods
- **print(functionName)**: Prints the success message.
- **printErr(functionName)**: Prints the error message.

### MenuResponse
Class for menu-specific error responses.

#### Properties
- **negative** (string): Default error message for the menu.

#### Constructor
```javascript
new MenuResponse(errorMessage="Error!")
```
- **errorMessage** (string, optional): Default error message, with a default value of `"Error!"`.

#### Methods
- **printError()**: Prints the error message.

### RedirectResponse
Class for handling redirection messages.

#### Properties
- **positive** (string|null): Success message for redirection.

#### Constructor
```javascript
new RedirectResponse(responseMessage=null)
```
- **responseMessage** (string|null, optional): Optional initialized message for redirection, default is `null`.

#### Methods
- **print()**: Prints the redirection message.



## Modules
There are two main modules that can be used with this interface package.
### StringOperation
```javascript
import StringOperation from 'anymuz-interface/StringOperation';
```
Utility functions for string operations, including generating even strings, checking string length, splitting strings, and padding with characters.

#### Functions
- **charEvenString(length, character)**: Generates a string by repeating a specified character for a given length. Ensures the length is even.
- **checkLength(string, length)**: Checks if a string’s length matches a specified length.
- **halfString(string)**: Splits a string into two halves, with an additional middle character if the length is odd.
- **oddLength(string)**: Determines if the length of a string is odd.
- **padString(length, padChar, title, [encasing])**: Pads a string to a specified length using a character and optional encasing characters.

#### Types
- **HalfStringResult**: Object returned by `halfString`, containing:
  - **front** (string): First half of the string.
  - **back** (string): Second half of the string.
  - **mid** (string|null): Middle character if the length is odd, otherwise `null`.

### TypeValidation
```javascript
import AnymuzInterface from 'anymuz-interface/TypeValidation';
console.log(AnymuzInterface.TypeValidation.typeCheck('string', String));
```
Type validation functions, including checks for number types, string length, and instance verification.

#### Functions
- **numberCheck(value, type)**: Checks if a number matches the specified type (integer or float).
- **stringCheck(string, length)**: Verifies that a string has the specified length.
- **typeCheck(value, object)**: Validates that a value matches the expected type or is an instance of the provided constructor.
- **typeCheckArray(value, object)**: Validates each item in an array against the expected type or constructor.

#### Constants
- **type_integer**: Constant representing the integer type identifier for `numberCheck`.
- **type_float**: Constant representing the float type identifier for `numberCheck`.

#### Internal
The functions and constants used within `TypeValidation` are listed for internal development team, these cannot be used via `import` of the module.
- **invalidTypeMessage(value, object)**: Generates an error message for an invalid type, used by validation functions.
- **invalidParameterMessage(parameter, message)**: Generates an error message for an invalid parameter.
- **numberType(value)**: Determines if a number is an integer or a float.
- **NUMBER_TYPES**: Array of supported number types (`int` and `float`), used internally by `numberCheck`.

## Contributing
Please contact Anymuz to  join the team.

## License
This project is licensed under the ISC License. 

![NAME](https://img.shields.io/badge/Name-Anymuz%20Interface-green)![VERSION](https://img.shields.io/badge/Version-1.2.2-green)

![DEVELOPER](https://img.shields.io/badge/Developer-%205%20Dimensional%20Development%20(5D2)-red)

![INTELLECTUAL_RIGHTS](https://img.shields.io/badge/Developed_by%20-Anymuz-red)
![LICENCED](https://img.shields.io/badge/License-ISC-blue)

