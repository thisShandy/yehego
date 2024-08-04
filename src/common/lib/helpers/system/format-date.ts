export const formatDate = (inputDate: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Create a new Date object from the input date string
  const date = new Date(inputDate);

  // Get the day of the week (0 - 6, where 0 is Sunday, 1 is Monday, etc.)
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

  // Get the month and format it
  const month = months[date.getMonth()];

  // Get the day of the month
  const day = date.getDate();

  // Combine these into the desired format
  const formattedDate = `${dayOfWeek} ${month} ${day}`;

  return formattedDate;
};
