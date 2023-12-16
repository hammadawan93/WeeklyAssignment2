// 17 days=2 weeks and 3 days

// 1 week=7days/7
// 2 weeks=14days/7

function weeksAndRemainingDays(days: number) {
  let weeks = days / 7;
  let roundedWeeks = Math.round(weeks);
  let remainingDays = days % 7;
  console.log(`${days}days=${roundedWeeks}weeks and ${remainingDays}days`);
}
weeksAndRemainingDays(17);
weeksAndRemainingDays(14);
