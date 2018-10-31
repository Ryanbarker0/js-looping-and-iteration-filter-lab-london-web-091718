// Code your solution in this file
function findMatching(drivers, query) {
  let driverName = drivers.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1)
  return driverName
}

function fuzzyMatch(drivers, query) {
  let result = drivers.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) === 0)
  console.log(result)
  return result
}

function matchName(drivers, query) {
  let result = drivers.filter(driversObject => driversObject.name === query)
  return result
}
