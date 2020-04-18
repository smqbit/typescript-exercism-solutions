function isLeapYear(year: number) {
  const isDivisibleBy = (number: number) => {
    return year % number === 0;
  };
  if ((isDivisibleBy(4) && !isDivisibleBy(100)) || isDivisibleBy(400)) {
    return true;
  } else return false;
}

export default isLeapYear;
