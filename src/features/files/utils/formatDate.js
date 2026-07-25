function formatDate(date) {
  const inputDate = new Date(date);

  if (Number.isNaN(inputDate.getTime())) {
    return "Invalid Date";
  }

  const today = new Date();

  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const startOfInput = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  );

  const difference =
    (startOfToday - startOfInput) /
    (1000 * 60 * 60 * 24);

  if (difference === 0) {
    return "Today";
  }

  if (difference === 1) {
    return "Yesterday";
  }

  return inputDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default formatDate;