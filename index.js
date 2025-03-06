// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(0, 2);
const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fareMultiplier) => (fare) => fare * fareMultiplier;

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;

const selectDifferentDrivers = (arrayOfDrivers, selectingDrivers) => selectingDrivers(arrayOfDrivers);

