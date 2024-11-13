# Changelog - Anymuz Interface
All notable changes to Anymuz Interface are documented in this file. Includes version, date of release, added features, changes and removed features. Each version begins with a name and a brief description of the overall aim of the update. The changes are always listed in the order of `Added` for new features, `Changed` for fixes or modifications to existing and `Removed` for features and functions made redundant. Listed in order of significance and alignment with development aim for that version.

## Anymuz Interface [1.2.5] - 2024-11-13
**Documentation and Details:** *Version 1.2.5 has more comprehensive documentation, adjusted naming conventions and removal of usless or impractical features. Various general fixes and changes to code for improvements. Policy for usage is now enforced and in effect for all versions*
### Added
- Usage policy terms and conditions applied with immediate effect to ALL versions.
- Additional JSDoc comments for classes and modules.
- Documented `StringOperation` and `TypeValidation` with JSDoc.
- Section `Modules` with `StringOperation` and `TypeValidation` to `README.MD` document.
- Additional examples for `Usage Examples` section in `README.MD` document.
- Sections `Introduction` and `Project Structure` in `README.MD` document.
- Ability in `package.json` to directly import `StringOperation` and `TypeValidation`.
- Descriptions to this `CHANGELOG.MD`.
### Changed
- Name from `Anymuz Interaction` to `Anymuz Interface` and updated documentation acordingly.
- Class `AbstractResponse` to `InterfaceResponse`.
- Directory `internal` to `module`.
- Section `Table of Contents` and `Classes` changed in `README.MD` document.
- Aspects of `OptionsDisplay` class including constructor `new OptionsDisplay(seperator,splitter,newline)` to require less parameters.
- Corrected error message thrown by `displayOptions(menu)` in `OptionsDisplay`.
### Removed
- Redundant properties `start` and `end` from `OptionsDisplay`.
- Deprecated methods `setStart(start)`, `getStart()`, `setEnd(end)` and `getEnd()` from `OptionsDisplay`.
- Unused `imports` section in `package.json`.

## Anymuz Interface [1.2.2] - 2024-11-11
**Documentation Comments:** *Version 1.2.2 introduces JSDoc comments and documentation files.*
### Added
- Documented with `README.MD` the aspects of the Anymuz Interface package.
- Created and added this `CHANGELOG.MD`.
- Documentation with JSDoc comments.
### Changed
- Updated package.json

## Anymuz Interface [1.2.1] - 2024-11-10
**Responsive Redirection:** *Version 1.2.1 centers around UX improvements focusing on `RedirectResponse` class.*
### Added
- Class `MenuOption` has improved `RedirectResponse` message.
### Changed
- Improvements to `MenuOption`, `OptionsDisplay` and `RedirectResponse`. 
- Class `RedirectResponse` no longer needs inital  message to construct.

## Anymuz Interface [1.2.0] - 2024-11-08
**Interface Interaction:** *Version 1.2.0 makes changes to the way the interface functions and fixes crucial bugs in the user input.*
### Added
- Subheadings to `Display` class.
### Changed
- Seperated `UserInterface` object from `ReadLine` to prevent duplicate interfaces per menu.
- Adjustments to prompting and handling user input in `Menu` objects.

## Anymuz Interface [1.1.5] - 2024-11-07
**Minor Tweaking:** *Version 1.1.5 makes small adjustments*
### Changed
- Adjusted Class Names, `ReplyResponse` now `RedirectResponse`.
- Small Bug Fixes

## Anymuz Interface [1.0.0] - 2024-11-07
**Inital release:** *Version 1.0.0 launches Anymuz Interface as the first release for testing.*
### Added
- Initial release with `Display`, `InterfaceReponse`, `Menu`, `MenuOption`, `OptionsArray`, and `OptionsDisplay` classes.
- Support for execution and redirection responses in `MenuOption`.
- Integration of `TypeValidation` for strict type checking across modules.
- Integration of `StringOperation` for additional string functions.


