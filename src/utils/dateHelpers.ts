function formatTime(date: Date) {
  // Get hours and minutes
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Determine AM/PM
  let period = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12; // Midnight
  }

  // Construct formatted time string
  let formattedTime = hours + ":" + `${minutes < 10 ? "0" : ""}${minutes}` + period;

  return formattedTime;
}

export { formatTime };
