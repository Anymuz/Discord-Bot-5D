Briefing.js
/*  Situation: The launcher needs a user interface for it's many features, this file is to hold the objects
    Mission: Make an interterface set of objects that provide what we need
    Execution: What we need from the interface is:
        - Main menu that lists the available features: <- long line, numbered
            - Bots (management if possible) <- long line
                - Create new Bot
                - For each bot: <- 1 line, typed?
                    - Launch Bot <- Launch bot
                    - Deploy Commands <- Run deploy script
                    - Update Avatar <- Launch with new avatar
            - Commands <- long line/single line (can we mix?)
                - Create Command <- Template script
                - {each command} <- Opens/reads a description/output object data?
            - Packages <- Single line
                - Server Packs <- Multi line
                    - New Server
                    - {each server} <- Opens/reads a description????? object data?
                - Client Packs <- multi line
                    - New Server
                    - {each server} <- Opens/reads a description????? object data?

    Milestone (before updating interface branch):
        - Main Menu with the 3 options
        - Dummy menu for create new followed by list
            - consider a means of taking a variable that allows for 1 object dynamic enough to "New {type}" and list.
            - Likely will need a way to load item list into the menu
        - Have the packages menu for Server Packs and Client Packs
        - If must be, then make individual objects for the New + list menus
        - Have a menu for Launch bot, Deploy cmd and updt avtr
        

    Interface file here will also need functions:
        - Function to retrieve the list of bots available
        - Alternatively here we create a generic launch, deploy and update command which feeds
            a placeholder name into the three choices
            - With each of these choices activating a function? No, perhaps in launcher for this stuff, using the add option method

    Plan: Have launcher contain a dir with .js files for the functions/1 per function or multi functions per 1:
        - E.g create.js for the new/create options
        - e.g loadContent.js for the functions to load every bot avaialble called from this interface.js then return an options array (including new)
        - 
        - Future: Menus for each server/client pack to: Add command, remove command, delete  pack
        - Each command has meny to change description and /value or delete or to assign  or spawn template a different command function?
            - Each command will just be linked to a function to carry out that command, command create should have 
                menu to choose existing command functions available or to generate a blank one with this command before going to
                type name or type description options
                - Name and description options should just launch a function that takes user input then parses it into a function
                - THIS COULD WARRENT THE CREATION OF A NEW  MENU-A class inherited WHICH HAS current value or N?A if not got one JUST BACK INPUT DONE, or CLEAR (to show if Manu=A) As unchangeable options (creates it's own options using private method on display command)
                    - THIS TYPE OF MENY SHOULD THEN IF INPUT SELCETED LAUNCH new menu_B class inherited that has no options but it's processuserinput will instead update the previous new menu
                        with a new method to set attribute ====> This may acttually warrent a new type of menu option that doenst redirect, not execute, but instead can only be used with Menu-B
                        type objects and are not triggered by a nnumber or their name, but by the input being anything except 0 for back (displayed clearly for the user)
                        And then if its not 0 (processuserinput will be overwrittden) then the menuoption executes a method for that menu-b to set an attribute of it and then redirect to previoys meny
                    - Then if Done is selected this should call a method that uses the menu-b stored within menu-a (new attribute) and then with a getAttribut() the method also getJson() and getJsonKey() and then updates
                        the JSON key witht he attribute and redurects to a menu which options like set name, set attributes, set function 
                    - The set [something]  options are mew innherited redirect options 
                    THIS IS TO BE DESIGNED IN MORE DETAIL
        
UML Rules:
Association:    Class A MAY use class B as part of it's functionality (or bidirectional)  ~
                class B MAY have functions beside for being used by class A
                A objects and B objects are instantiated SEPERATE
                B objects function on SEPERATE A objects

Aggregation:    Class A WILL use class B as part of it's functionality.
                Class B MAY have other functions bseide for being used by class B
                A objects and B objects are istantiated SEPERATE
                B objects function WITHIN same A object

Dependency:     Class A MAY use class B as part of its functioning
                Class B WILL function so that class A will function
                A objects instatiate B objects WITHIN themselves
                B objects function on SEPERATE A objects

Composition:    Class A WILL use class B as part of it's functionality
                class B WILL function only for class B
                A objects instantiate B objects WITHIN themselves
                B objects exist WITHIN same a object
*/