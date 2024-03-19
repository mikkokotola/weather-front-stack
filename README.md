# Frontend stack
This repo creates an AWS-based frontend stack using S3 and Cloudfront. The code also deploys the frontend code to the S3 bucket.

## How to point to your frontend and change resource names
The resource names and pointer to the frontend code are in the file [frontend-resources.ts](lib/resources/frontend-resources.ts). The most important is the pointer on line 30. Currently it deploys all the code in a sister directory of this repo, in the path `../weatherfront/dist/weatherfront`.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Dependencies
- AWS CLI
- AWS CDK
- Typescript
- Node and npm

## Other notes
The `cdk.json` file tells the CDK Toolkit how to execute the app.
