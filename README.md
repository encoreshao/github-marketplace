# Github Marketplace

## Project Setup

- yarn init
- tsconfig: https://www.typescriptlang.org/tsconfig#rootDirs
- yarn

## Core Code for Scrape

- src/sraper.ts   (Scrape single app page data)
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
// Completed in  2.559 secs!
// data: {
  "name": "CircleCI",
  "url": "https://github.com/marketplace/circleci",
  "verified_domains": [
    "circleci.com"
  ],
  "logo": "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
  "category": "Application",
  "verified_info": "GitHub has verified that the publisher controls the domain and meets other requirements.",
  "description": "Now supporting GitHub Checks!\nYou can now see the status of your CircleCI workflows and related jobs all within the GitHub UI. Enable this feature in your CircleCI organization settings for new and existing accounts.\nBuild faster. Test more. Fail less.\nLet CircleCI help your team focus on making a great product. Speed up your test and delivery cycle and improve productivity, without running your own infrastructure. . Get set up in no time\nFollow your GitHub project from CircleCI, and set up your first build in no time thanks to CircleCI's automatically generated build and test steps and simple extensibility.\nStart free and scale up as needed\nEvery GitHub user gets a free build container and 1000 monthly build minutes to start. CircleCI can scale with you no matter how big your team grows.\nYour language, your toolchain, your deployment environment\nLanguages that build on Linux will build on CircleCI. Use the same great CI and CD tool no matter where you deploy.\nLooking for more plans or macOS?\nContact us at sayhi@circleci.com for more information about plans supporting GitHub Enterprise, macOS and iOS, or dedicated support. Visit https://circleci.com/pricing/",
  "supported_languages": "C++, Clojure, Go",
  "categories": [
    "Continuous integration",
    "Mobile CI",
    "GitHub Enterprise",
    "Free",
    "Paid"
  ],
  "highlight_categories": [
    "Continuous integration",
    "Mobile CI"
  ],
  "customers": [
    "https://github.com/facebook",
    "https://github.com/intuit",
    "https://github.com/vuejs",
    "https://github.com/Tinder",
    "https://github.com/electron",
    "https://github.com/helm",
    "https://github.com/pytorch"
  ],
  "developer": "circleci",
  "developer_url": "https://github.com/circleci",
  "developer_logourl": "https://avatars.githubusercontent.com/u/1231870?s=88&v=4",
  "developer_links": [
    "https://discuss.circleci.com/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "http://status.circleci.com/",
    "https://circleci.com/docs/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "https://circleci.com/privacy/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "https://circleci.com/terms-of-service/?utm_source=github&utm_medium=partner&utm_campaign=ghmarketplace",
    "https://github.com/contact/report-abuse?report=CircleCI+%28Marketplace+App+Listing%29"
  ]
}
✨  Done in 3.70s.
```