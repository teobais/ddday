# ddday
> Provides a **d**ouble-**d**igit representation for the requested **d**ay of a month.

![](ddday_logo.png)

## Naming
> As the naming reveals `ddday` stands for **d**ouble-**d**igit representation of a month's **d**ay. Of course, "two-digit" sounds better than "double-digit", but the latter makes the final abbreviation more funny :bowtie: .

## Reason
> Javascript's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object returns by default the numerical representation of a month's day without providing any option to easily format it. As user, I would like to have a universal formatting among days of the month (i.e. I would like the 9th of a month to be displayed as "09" and not as "9", because [there are cases](https://github.com/anniversaries/greek-namedays/blob/master/namedays.js) where either it is not always easy to modify your data or you simply do not want to.

## Install
```
npm install -g ddday
```

## Use
```javascript
// load the module
var ddday = require('ddday');

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
