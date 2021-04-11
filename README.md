Source code for [YourDigitalRights.org](https://yourdigitalrights.org/), a free and open source service which helps people regain control of their online privacy by instructing organizations to delete the personal information they have collected about them. The service automates the process of sending GDPR and CCPA erasure (right to be forgotten) requests.

[![CircleCI](https://circleci.com/gh/opt-out-eu/yourdigitalrights.org.svg?style=svg)](https://circleci.com/gh/opt-out-eu/yourdigitalrights.org)

# Installation

Requires Node.js >= v8

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
npm run setup-dynamo
```

# Running tests

`npm test`

# Contributions
We welcome your contributions. Please submit PRs, open issues or contact us at info@opt-out.eu.
