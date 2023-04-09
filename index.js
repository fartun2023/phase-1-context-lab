function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
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
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
}

function hoursWorkedOnDate(date) {
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

function allWagesFor() {
  const availableDates = this.timeInEvents.map(event => event.date);
  const totalWages = availableDates.reduce((acc, date) => acc + wagesEarnedOnDate.call(this, date), 0);
  return totalWages;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(empRecord => empRecord.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPay, empRecord) => totalPay + allWagesFor.call(empRecord), 0);
}