const TimeConverter = function (value) {
  // The received value is seconds.

  let d_minutes = value % (60 * 60);
  let minutes = Math.floor(d_minutes / 60);

  let d_seconds = d_minutes % 60;
  let seconds = Math.floor(d_seconds);
  return `${minutes}: ${seconds}`;
}

export default TimeConverter;