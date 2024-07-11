const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    const numsAsStrings = req.query.nums.split(',');
    const nums = convertAndValidateNumsArray(numsAsStrings);

    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }

    const result = {
      operation: "mean",
      result: findMean(nums)
    };

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.get('/median', (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    const numsAsStrings = req.query.nums.split(',');
    const nums = convertAndValidateNumsArray(numsAsStrings);

    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }

    const result = {
      operation: "median",
      result: findMedian(nums)
    };

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.get('/mode', (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    const numsAsStrings = req.query.nums.split(',');
    const nums = convertAndValidateNumsArray(numsAsStrings);

    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }

    const result = {
      operation: "mode",
      result: findMode(nums)
    };

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err,
    message: err.message
  });
});

app.listen(3000, () => {
  console.log(`Server starting on port 3000`);
});
