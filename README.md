# Github Marketplace

Scrapes the public profile of the Github marketplace page | 2024

## Project Setup

- yarn init
- tsconfig: https://www.typescriptlang.org/tsconfig#rootDirs
- yarn

## Core Code for Scrape

- src/sraper.ts (Scrape single app page data)
- src/discover.ts (Scrape all apps from list)

## Build Typescript to Javascript

- yarn build

## Command to scrape all apps from list page, and write the results into apps.csv

- yarn discover apps

## Command to scrape single app-page data

- yarn start circleci
- yarn start circleci name

## Output for single app page data

```
$ node dist/scrape.js circleci
Opening the browser......
// Navigating to https://github.com/marketplace/circleci...
// Parse content...
// Closing browser.
// Completed in  4.525 secs!
Data: {
  "name": "CircleCI",
  "url": "https://github.com/marketplace/circleci",
  "verified_domains": [
    "circleci.com"
  ],
  "logo": "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
  "verified": true,
  "description": "About CircleCI\nThe world’s best software teams deliver quality code, confidently, with CircleCI.\nGet started in no time\nCircleCI’s free plan offers more build minutes than any free plan out there. Up to 6,000 build minutes/month and 30 jobs at a time.\nMost customizable environments of any CI/CD provider\nWidest choice to customize operating systems, CPUs, GPUs, memory and images for each job. Build for Docker, Windows, Linux, Arm and macOS or build on your own compute with runners. Fastest build times on the market\nBuild times on CircleCI are 70% faster on average than competitors.\nThe highest level of compliance and certification\nCircleCI is the only CI/CD platform that’s FedRAMP certified and SOC 2 Type II compliant. Built-in features like audit logs, restricted contexts, and LDAP give you complete control of your code.\nGreater visibility throughout software development process\nCircleCI’s Insights dashboard gives visibility into workflow status, duration, credit consumption, and costs, for free.\nSSH debugging\nSecurely access any job to CircleCI to debug builds and tests in real time.\nAuto-test splitting\nShorten the feedback loop by automatically splitting your tests across parallel instances of the same job.\nNow supporting GitHub Checks\nSee the status of your CircleCI workflows and related jobs all within the GitHub UI. Enable this feature in your CircleCI organization settings for new and existing accounts.",
  "app_type": [
    "Oauth Application"
  ],
  "supported_languages": "Haskell, JavaScript, Objective-C, PHP, Python, Ruby, and Scala",
  "categories": [
    "Continuous integration",
    "Mobile CI",
    "GitHub Enterprise",
    "Free"
  ],
  "highlight_categories": [
    "Continuous integration",
    "Mobile CI"
  ],
  "customers": [
    {
      "link": "https://github.com/facebook",
      "name": "@facebook",
      "logo": "https://avatars.githubusercontent.com/u/69631?s=64&v=4"
    },
    {
      "link": "https://github.com/intuit",
      "name": "@intuit",
      "logo": "https://avatars.githubusercontent.com/u/2495066?s=64&v=4"
    },
    {
      "link": "https://github.com/vuejs",
      "name": "@vuejs",
      "logo": "https://avatars.githubusercontent.com/u/6128107?s=64&v=4"
    },
    {
      "link": "https://github.com/Tinder",
      "name": "@Tinder",
      "logo": "https://avatars.githubusercontent.com/u/10427184?s=64&v=4"
    },
    {
      "link": "https://github.com/electron",
      "name": "@electron",
      "logo": "https://avatars.githubusercontent.com/u/13409222?s=64&v=4"
    },
    {
      "link": "https://github.com/helm",
      "name": "@helm",
      "logo": "https://avatars.githubusercontent.com/u/15859888?s=64&v=4"
    },
    {
      "link": "https://github.com/pytorch",
      "name": "@pytorch",
      "logo": "https://avatars.githubusercontent.com/u/21003710?s=64&v=4"
    }
  ],
  "developers": [
    {
      "link": "https://github.com/circleci",
      "name": "circleci",
      "logo": "https://avatars.githubusercontent.com/u/1231870?s=64&v=4"
    }
  ],
  "developer_links": [
    "https://discuss.circleci.com/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "http://status.circleci.com/",
    "https://circleci.com/docs/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "https://circleci.com/privacy/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "https://circleci.com/terms-of-service/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace"
  ]
}
✨  Done in 5.44s.
```
