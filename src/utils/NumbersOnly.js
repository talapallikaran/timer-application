const NumbersOnly = function (value) {
  const re = /^[0-9\b]+$/;
  if (value === '' || re.test(value)) {
    return value;
  }
  return null;
}

export default NumbersOnly;