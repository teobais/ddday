# ddday
> Provides a **d**ouble-**d**igit representation for the requested **d**ay of a month.

## Introduction
As the naming reveals `ddday` stands for double-digit representation of a month's day

## Install
```
git clone https://github.com/toubou91/ddday
```
```
npm install
```

## Use
```javascript
// load the module
var ddday = require('index.js');

// example: 9th is represented with '9'. Convert it to '09'
ddday(new Date().getDate()) // returns '09', if current day is the 9th of the month
```

## Test
To execute tests, first install the project dependencies:

```
$ npm install
```

Then, run the tests
```
$ npm test
```
