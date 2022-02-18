# THAT.US

[![GitHub issues open](https://img.shields.io/github/issues/thatconference/that.us.svg)](https://github.com/thatconference/that.us/issues) [![release](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/thatconference/that.us/issues) <!-- 

## Get started

THAT.us is a SvelteKit application. It uses Tailwind for styling, and makes GraphQL calls against our Api, https://api.that.tech/view.

### local dependencies

- nodejs v14.17.5
- npm v8.0.0

### project dependencies

We use nodenv to manage our node versions, it's configed in this repo.

Install the project dependencies...

```bash
  npm i
```

## Building and running in development

### env configuration

You will find the env settings in .env.sample. The current settings in the .env.sample will allow you to do development on pages which do not require authentication. If you're interested in working on those pages in the project you will need some additional values. Email us at hello@that.us.

### running

```bash
  npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it. It's setup with HMR and Tailwind's JIT. You should see your changes as soon as you make them.

## Building and running in production mode

```bash
  npm run local:build
  npm run preview
```

Mind you the build servers will run the following:

```bash
  npm run build
```

The only difference is how we're managing env settings.

## Commiting

We now follow the commitlint conventional spec.

https://www.npmjs.com/package/@commitlint/config-conventional

## Contributors ✨

