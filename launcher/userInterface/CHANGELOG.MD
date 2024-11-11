# Changelog - Anymuz Interface

All notable changes to Anymuz Interface are documented in this file. Includes version, date of release, added features, changes and removed features.

## Anymuz Interface [1.2.2] - 2024-11-11
### Added
- Documented with `README.MD` the aspects of the Anymuz Interface package.
- Created and added this `CHANGELOG.md`.
- Documentation with JSDoc comments.
### Changed
- Updated package.json


## Anymuz Interface [1.2.1] - 2024-11-10
### Added
- Class `MenuOption` has improved `RedirectResponse` message.
### Changed
- Improvements to `MenuOption`, `OptionsDisplay` and `RedirectResponse`. 
- Class `RedirectResponse` no longer needs inital  message to construct.

## Anymuz Interface [1.2.0] - 2024-11-08
### Added
- Subheadings to `Display` class.
### Changed
- Seperated `UserInterface` object from `ReadLine` to prevent duplicate interfaces per menu.
- Adjustments to prompting and handling user input in `Menu` objects.

## Anymuz Interface [1.1.5] - 2024-11-07
### Changed
- Adjusted Class Names, `ReplyResponse` now `RedirectResponse`.
- Small Bug Fixes

## Anymuz Interface [1.0.0] - 2024-11-07
### Added
- Initial release with `Display`, `Menu`, `MenuOption`, `OptionsArray`, and `OptionsDisplay` classes.
- Included support for execution and redirection responses in `MenuOption`.
- Integrated `TypeValidation` for strict type checking across modules.
- Integrate `StringOperation` for additional string functions.


