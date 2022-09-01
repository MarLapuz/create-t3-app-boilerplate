All project-based features are going to be in this directory.
This folder is all about taking all of the code for a feature and putting it in one single place.
It's like a mini version of the `src` folder for each feature.

Basic structure:

- authentication
  - components
  - hooks
  - services
  - index.ts (export all of the things we want to use from this feature and only ever import from this index.ts)
