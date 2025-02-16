# Github Marketplace | 2025 Actively

Scrapes the public profile of the Github marketplace page | 2025

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
➜  github-marketplace git:(main) ✗ node dist/scrape.js circleci
Opening the browser......
// Navigating to https://github.com/marketplace/circleci ...
// Parse content...
// Closing browser.
// Completed in  7.942 secs!
Data: {
  "name": "CircleCI",
  "url": "https://github.com/marketplace/circleci",
  "logo": "https://avatars.githubusercontent.com/ml/7?s=400&v=4",
  "verified": true,
  "description": "About CircleCIThe world’s best software teams deliver quality code, confidently, with CircleCI.\nGet started in no time\nCircleCI’s free plan offers more build minutes than any free plan out there. Up to 6,000 build minutes/month and 30 jobs at a time.\nMost customizable environments of any CI/CD provider\nWidest choice to customize operating systems, CPUs, GPUs, memory and images for each job. Build for Docker, Windows, Linux, Arm and macOS or build on your own compute with runners.Fastest build times on the market\nBuild times on CircleCI are 70% faster on average than competitors.\nThe highest level of compliance and certification\nCircleCI is the only CI/CD platform that’s FedRAMP certified and SOC 2 Type II compliant. Built-in features like audit logs, restricted contexts, and LDAP give you complete control of your code.\nGreater visibility throughout software development process\nCircleCI’s Insights dashboard gives visibility into workflow status, duration, credit consumption, and costs, for free.\nSSH debugging\nSecurely access any job to CircleCI to debug builds and tests in real time.\nAuto-test splitting\nShorten the feedback loop by automatically splitting your tests across parallel instances of the same job.\nNow supporting GitHub Checks\nSee the status of your CircleCI workflows and related jobs all within the GitHub UI. Enable this feature in your CircleCI organization settings for new and existing accounts.CircleCI pipeline dashboard shows all recent builds in one place. Apply filters to quickly find what you're looking for faster.Monitor your build progress and quickly locate issues in our end-to-end pipeline view.Quickly drill down on where tests are failing, so you can find and resolve issues faster.Debug via SSH for faster resolution of build and test issues.Sample circle.yml configuration.",
  "app_type": [
    "App"
  ],
  "supported_languages": "JavaScript, Ruby, C++, Python, PHP, Objective-C, Haskell, Scala, Clojure, and Go",
  "categories": [
    "continuous-integration",
    "mobile-ci"
  ],
  "about": "Automatically build, test, and deploy your project in minutes",
  "installs": "415,282"
}
```
