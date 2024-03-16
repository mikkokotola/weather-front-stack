#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WeatherFrontStackStack } from '../lib/weather-front-stack-stack';

const app = new cdk.App();
new WeatherFrontStackStack(app, 'WeatherFrontStackStack');
