Source code for [YourDigitalRights.org](https://yourdigitalrights.org/), a free and open source service which helps people regain control of their online privacy by instructing organizations to delete the personal information they have collected about them. The service automates the process of sending GDPR and CCPA erasure (right to be forgotten) requests.
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![CircleCI](https://circleci.com/gh/your-digital-rights/yourdigitalrights.org.svg?style=svg)](https://app.circleci.com/pipelines/github/your-digital-rights)
[![LibraPay](https://img.shields.io/liberapay/patrons/YourDigitalRights.org.svg?logo=liberapay)](https://liberapay.com/YourDigitalRights.org/donate)

# Installation

Requires Node.js >= v15

`npm install`

# Running locally

Ensure Dynamo DB is running locally (see below).

```
export ACCESS_KEY_ID=accesskey
export SECRET_ACCESS_KEY=fakesecret
export REGION=us-east-1
export ENDPOINT=http://localhost:8000
npm run dev
```

# Installing and Running Dynamo DB Locally

Installation https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html:
```
cd ~/
mkdir environment; cd environment; mkdir dynamolocal; cd dynamolocal
wget https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz
gunzip dynamodb_local_latest.tar.gz
tar -jxvf dynamodb_local_latest.tar
```

Running:
```
> cd ~/environment/dynamolocal
> java -Djava.library.path=./DynamoDBLocal_lib/ -jar DynamoDBLocal.jar
```

## Setting up the Dynamo Tables

This is a one-time step that needs to be run for any new database, including a localone. It ensures the tables are creted. Note real (test, staging or production) environments can be updated by changing the AWS credentials.

```
export ACCESS_KEY_ID=fakeaccesskeyid
export SECRET_ACCESS_KEY=fakesecretaccesskey
export REGION=us-east-1
export ENDPOINT=http://localhost:8000
npm run setup-local-dynamo
```

# Running tests

`npm test`

# Contributions
We welcome your contributions. Please submit PRs, open issues or contact us at info@opt-out.eu.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/roughprada"><img src="https://avatars.githubusercontent.com/u/5957010?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafa</b></sub></a><br /><a href="#ideas-roughprada" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-roughprada" title="Design">🎨</a> <a href="#userTesting-roughprada" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/steevevadakkumchery"><img src="https://avatars.githubusercontent.com/u/45942491?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steeve Vadakkumchery</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=steevevadakkumchery" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=steevevadakkumchery" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/gianantoniopini"><img src="https://avatars.githubusercontent.com/u/63844628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gianantonio Pini</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=gianantoniopini" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=gianantoniopini" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://hanssprecher.com"><img src="https://avatars.githubusercontent.com/u/258820?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hans Sprecher</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=honzie" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=honzie" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/robwebdev"><img src="https://avatars.githubusercontent.com/u/1155270?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rob Chandler</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=robwebdev" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=robwebdev" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/limptwiglet"><img src="https://avatars.githubusercontent.com/u/25396?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark Gerrard</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=limptwiglet" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=limptwiglet" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/yoavaviram"><img src="https://avatars.githubusercontent.com/u/537092?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoav Aviram</b></sub></a><br /><a href="https://github.com/your-digital-rights/yourdigitalrights.org/commits?author=yoavaviram" title="Code">💻</a> <a href="https://github.com/your-digital-rights/yourdigitalrights.org/pulls?q=is%3Apr+reviewed-by%3Ayoavaviram" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-yoavaviram" title="Project Management">📆</a> <a href="#ideas-yoavaviram" title="Ideas, Planning, & Feedback">🤔</a> <a href="#fundingFinding-yoavaviram" title="Funding Finding">🔍</a> <a href="#content-yoavaviram" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<p align="center">
  <a href="https://vercel.com?utm_source=Conscious%20Digital&utm_campaign=oss">
    <img src="./public/images/powered-by-vercel.svg" height="35px" alt="Powered by Vercel" />
  </a>
</p>

