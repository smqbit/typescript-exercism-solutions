function getYearDetails(year: number) {
  return {
    isDivisibleHelper: (number: number) => {
      return year % number === 0;
    },
  };
}

function isLeapYear(year: number) {
  const yearDetails = getYearDetails(year);
  return (
    (yearDetails.isDivisibleHelper(4) && !yearDetails.isDivisibleHelper(100)) ||
    yearDetails.isDivisibleHelper(400)
  );
}

export default isLeapYear;
