function stringLength(str) {
  const length = str.length;
  if (length < 1 || length > 10) {
    throw new Error('String length must be between 1 and 10 characters.');
  }
  return length;
}
