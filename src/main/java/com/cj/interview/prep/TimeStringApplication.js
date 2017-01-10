timeString = '12:32 34:01 15:23 9:27 55:22 25:56'

function timeStringApplication(times) {
  // Separate into individual times
  const newTimes = times.split(' ')
  // Count and combine times
  const result = newTimes.map((time) => {
    return time.split(':')
  }).reduce((a, b) => {
    console.log('b: ', b)
    a += parseInt(b[0] * 60) + parseInt(b[1])
    return a
  }, 0)
  return decimalToTime(result)
}

function decimalToTime(secs) {
  return new Date(secs*1000).toUTCString().split(" ")[4]
}

function assert(expected, error) {
  if (!expected) {
    throw new Error(error)
  }
  return console.log(true)
}
assert(timeStringApplication(timeString) === '02:32:41', 'Time was not correct')
