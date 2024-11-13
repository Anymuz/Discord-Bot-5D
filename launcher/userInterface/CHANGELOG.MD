# Changelog - Anymuz Interface

All notable changes to the Anymuz Interface are documented in this file. This file includes the version, date of release, added features, changes, and removed features. Each version entry begins with a name and a brief description of the overall purpose of the update. The changes are always listed in the order of `Added` for new features, `Changed` for fixes or modifications to existing features, and `Removed` for features and functions that have become redundant. They are listed in order of significance and alignment with the development goals for that version.

## Anymuz Interface [1.2.5] - 2024-11-13
**Documentation and Details:** *Version 1.2.5 includes more comprehensive documentation, adjusted naming conventions, and the removal of unnecessary or impractical features. Various general fixes and improvements have been made to the code. The usage policy is now enforced and in effect for all versions.*
  
### Added
- Usage policy terms and conditions applied with immediate effect to ALL versions.
- Additional JSDoc comments for classes and modules.
- Documented `StringOperation` and `TypeValidation` with JSDoc.
- Added a `Modules` section, covering `StringOperation` and `TypeValidation`, to the `README.MD` document.
- Added additional examples to the `Usage Examples` section in the `README.MD` document.
- Added sections `Introduction` and `Project Structure` in the `README.MD` document.
- Added ability in `package.json` to directly import `StringOperation` and `TypeValidation`.
- Added descriptions to this `CHANGELOG.MD`.

### Changed
- Renamed from `Anymuz Interaction` to `Anymuz Interface` and updated documentation accordingly.
- Renamed class `AbstractResponse` to `InterfaceResponse`.
- Renamed directory `internal` to `module`.
- Modified sections `Table of Contents` and `Classes` in the `README.MD` document.
- Modified aspects of the `OptionsDisplay` class, including the constructor `new OptionsDisplay(separator, splitter, newline)`, to require fewer parameters.
- Corrected error message thrown by `displayOptions(menu)` in `OptionsDisplay`.

### Removed
- Redundant properties `start` and `end` from `OptionsDisplay`.
- Deprecated methods `setStart(start)`, `getStart()`, `setEnd(end)`, and `getEnd()` from `OptionsDisplay`.
- Removed unused `imports` section in `package.json`.

## Anymuz Interface [1.2.2] - 2024-11-11
**Documentation Comments:** *Version 1.2.2 introduces JSDoc comments and documentation files.*

### Added
- Documented with `README.MD` the aspects of the Anymuz Interface package.
- Created and added this `CHANGELOG.MD`.
- Documentation with JSDoc comments.

### Changed
- Updated `package.json`.

## Anymuz Interface [1.2.1] - 2024-11-10
**Responsive Redirection:** *Version 1.2.1 centers around UX improvements focusing on the `RedirectResponse` class.*

### Added
- Improved `RedirectResponse` message in the `MenuOption` class.

### Changed
- Improvements to `MenuOption`, `OptionsDisplay`, and `RedirectResponse`.
- The `RedirectResponse` class no longer requires an initial message for construction.

## Anymuz Interface [1.2.0] - 2024-11-08
**Interface Interaction:** *Version 1.2.0 makes changes to the way the interface functions and fixes crucial bugs in the user input.*

### Added
- Subheadings to the `Display` class.

### Changed
- Separated the `UserInterface` object from `ReadLine` to prevent duplicate interfaces per menu.
- Adjustments to prompting and handling user input in `Menu` objects.

## Anymuz Interface [1.1.5] - 2024-11-07
**Minor Tweaking:** *Version 1.1.5 makes small adjustments.*

### Changed
- Adjusted class names, renaming `ReplyResponse` to `RedirectResponse`.
- Small bug fixes.

## Anymuz Interface [1.0.0] - 2024-11-07
**Initial release:** *Version 1.0.0 launches Anymuz Interface as the first release for testing.*

### Added
- Initial release with `Display`, `InterfaceResponse`, `Menu`, `MenuOption`, `OptionsArray`, and `OptionsDisplay` classes.
- Support for execution and redirection responses in `MenuOption`.
- Integration of `TypeValidation` for strict type checking across modules.
- Integration of `StringOperation` for additional string functions.
