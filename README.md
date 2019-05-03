## Activity Tracker Data Generator

This repo is used to generate random activity data for a set of random users - think FitBit style of data.

## How to Use the Script

1. Install dependencies with `npm install`
1. Run the main script to generate all data with `node index.js` (the files generated are written to the `output` directory)

## Adjust the Data

In the `index.js` file, there are some paramters you can adjust to change the data. The number of users to be generated and number of days of data generated for each user can be adjusted with these global variables:

```js
global.numUsers = 2;
global.numDays = 5;
```

In the `src` directory, there are files for generating kinds of data (hydration, sleep, etc.). Within these files, there are random numbers within a range that are generated for data:

```js
generateValueWithinRange([minumum value], [maximum value], [decimal precision of the generated value]);
```

## Data Model

**Users**

```
[
  {
    "id": [integer],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number],
    "dailyStepGoal": [integer]
  },
  ...more users
]
```

**Activity**

```
[
  {
    "userID": [integer],
    "activityData": [
      {
        "date": [string DD/MM/YYY],
        "numSteps": [integer],
        "minutesActive": [integer],
        "flightsOfStairs": [integer]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

**Hydration**

```
[
  {
    "userID": [integer],
    "hydrationData": [
      {
        "date": [string DD/MM/YYY],
        "numOunces": [integer]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

**Sleep**

```
[
  {
    "userID": [integer],
    "sleepData": [
      {
        "date": [string DD/MM/YYY],
        "hoursSlept": [number],
        "sleepQuality": [number]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

