/*
Commit message format:

'<type>(<scope>): <module> - <subject>'

Max length: 100

Type:

feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing or correcting existing tests
chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation
revert:   Reverts a previous commit

Scope:

assets:   Changes to icons / images / other media files
nav:      Changes to navigation, does not affect meaning of internal logic
state:    Changes to reducers, sagas
screens:  Changes to UI Components / UI styles
setup:    Changes to app configuration (npm packages, react, expo, etc..)
feature:  Changes to new feature
*/

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*)\((.*)\):\s(.*)\s-\s(.*)$/,
      headerCorrespondence: ["type", "scope", "module", "subject"],
    },
  },
  rules: {
    // Limit the header length
    "header-max-length": [2, "always", 100],
    // Define acceptable types
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
      ],
    ],
    // Define acceptable scopes
    "scope-enum": [
      2,
      "always",
      ["assets", "nav", "state", "screens", "setup", "feature"],
    ],
    // Subject should not be empty
    "subject-empty": [2, "never"],
    // Type should not be empty
    "type-empty": [2, "never"],
    // Scope should not be empty
    "scope-empty": [2, "never"],
    // Subject should start with lowercase
    "subject-case": [2, "always", "lower-case"],
  },
  ignores: [
    // Ignore commits starting with WIP
    (commit) => commit.slice(0, 3) === "WIP",
  ],
};
