/* Your Code Here */
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}
function loadEmployeeRecord(empRecord, arr) {
  empRecord.firstName = arr[0];
  empRecord.familyName = arr[1];
  empRecord.title = arr[2];
  empRecord.payPerHour = arr[3];
  empRecord.timeInEvents = [];
  empRecord.timeOutEvents = [];
  return empRecord;
}


function createEmployeeRecords(arr) {
  return arr.map(function(empArr) {
    return createEmployeeRecord(empArr);
  });
}
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');

  if (!date || !hour) {
    throw new Error('Invalid date format');
  }

  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  };

  this.timeInEvents.push(timeInEvent);

  return this;
}
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  })
  return this
}function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  if (!timeIn || !timeOut) {
    return undefined;
  }
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  if (hoursWorked === undefined) {
    return undefined;
  }
  return hoursWorked * this.payPerHour;
}

function allWagesFor(empRecord) {
  const datesWorked = empRecord.timeInEvents.map(event => event.date);
  return totalWages;const employeeRecord = {
    timeInEvents: {
      "2023-04-01": { type: "TimeIn", hour: 9 },
      "2023-04-02": { type: "TimeIn", hour: 10 },
      "2023-04-03": { type: "TimeIn", hour: 11 }
    },
    timeOutEvents: {
      "2023-04-01": { type: "TimeOut", hour: 17 },
      "2023-04-02": { type: "TimeOut", hour: 18 },
      "2023-04-03": { type: "TimeOut", hour: 19 }
    },
    wagesEarnedOnDate(date) {
      const hoursWorked = (this.timeOutEvents[date].hour - this.timeInEvents[date].hour) / 100;
      return hoursWorked * this.payPerHour;
    },
    payPerHour: 21
  };
  function allWagesFor() {
    const availableDates = Object.keys(this.timeInEvents); // find available dates
    const totalWages = availableDates.reduce((acc, date) => acc + wagesEarnedOnDate.call(this, date), 0); // accumulate pay for each date
    return totalWages;
  }
  const totalWages = allWagesFor.call(employeeRecord);
  console.log(totalWages); // output: 378

}
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(empRecord => empRecord.firstName === firstName);
}
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPay, empRecord) => totalPay + allWagesFor(empRecord), 0);
}
    
