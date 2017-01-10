timeString = '12:32 34:01 15:23 9:27 55:22 25:56'

function timeStringApplication(times) {
  const seconds = times.split(' ').map((time) =>
  time.split(':')
  ).reduce((secs, entry) => {
    return secs + parseInt(entry[0] * 60) + parseInt(entry[1])
  }, 0)
  const miliseconds = 1000 * seconds
  return decimalToTime(new Date(miliseconds))
}

function decimalToTime(date) {
  return date.toUTCString().split(" ")[4]
}

function assert(expected, error) {
  if (!expected) throw new Error(error)
}
assert(timeStringApplication(timeString) === '02:32:41', 'Time was not correct')
