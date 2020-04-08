# Contributing to flippie

🙌🏽❤️ Thanks for your time and interest in contributing to flippie ❤️🙌🏽

## Your first code contribution

If this is your first time contributing to flippie, you could take a look at the following types of issues:

1. [Good first issues](https://github.com/shubhamzanwar/flippie/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+no%3Aassignee) These are issues that require relatively less code changes, few tests or basic documentation.
2. [Help wanted issues](https://github.com/shubhamzanwar/flippie/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22+no%3Aassignee+) These are issues a little more involved than first issues.

## Documentation

flippie uses [storybook](https://storybook.js.org/) for documenting components. When creating these components, create a `stories.tsx` file to write sample usages. You can refer to the examples already available in the project.

To run the storybook's explorer:
```
npm run sb
```
This should open up the explorer at [http://localhost:6006/](http://localhost:6006/) To make use of storybook to the fullest, create stories in Storybook first and then implement the component. ([CDD](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/))

## Submitting your pull request

If an issue already exists for the contribution you wish to make, kindly comment on it or assign it to yourself. This serves a dual purpose:

1. It allows the maintainers to track the status of the issue on the [project board](https://github.com/shubhamzanwar/flippie/projects/1)
2. It allows other contributors to know that someone is working on the issue; thereby avoiding duplication of effort.

Please try following the below guide while writing your commit messages. It just makes development more fun:

1. Use the present tense ("fixing bug.." not "fixed bug")
2. Use lowercase unless adding names of camelCase components
3. Limit the first line to 72 chars or less.
4. Use the below emojis at the end of your commit messages to express(!!) what your commit does:
    * 📦: when adding new dependencies to the project
    * 🐛: when fixing a bug
    * 💅: when improving or changing the style guides (tsconfig or eslint)
    * 🎁: when adding a new feature (component)
    * 📚: when adding documentation to the project

