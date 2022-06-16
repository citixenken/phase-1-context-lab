/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (x) {
    return x.date;
  });

  let grandWages = eligibleDates.reduce(
    function (accum, date) {
      return accum + wagesEarnedOnDate.call(this, date);
    }.bind(this),
    0
  );

  return grandWages;
};

//================
// Your code here
const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (employeeArrayData) {
  return employeeArrayData.map(function (array) {
    return createEmployeeRecord(array);
  });
};

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}

function hoursWorkedOnDate(specificDate) {
  let inEventDate = this.timeInEvents.find((x) => x.date === specificDate);
  let outEventDate = this.timeOutEvents.find((x) => x.date === specificDate);

  return (outEventDate.hour - inEventDate.hour) / 100; // (200 / 2)
}

function wagesEarnedOnDate(specificDate) {
  let wageOnDate = hoursWorkedOnDate.call(this, specificDate) * this.payPerHour;
  return wageOnDate;
}
//   const allWagesFor = (employeeRecord) => {
//     let eligibleDates = employeeRecord.timeInEvents.map(function (x) {
//       return x.date;
//     });

//     let grandWages = eligibleDates.reduce(function (accum, specificDate) {
//       return accum + wagesEarnedOnDate(employeeRecord, specificDate);
//     }, 0);

//     return grandWages;
//   };
function findEmployeeByFirstName(employeeArrayData, firstName) {
  return employeeArrayData.find(function (record) {
    return record.firstName === firstName;
  });
}

function calculatePayroll(employeeRecord) {
  return employeeRecord.reduce(function (accum, record) {
    return accum + allWagesFor.call(record);
  }, 0);
}
