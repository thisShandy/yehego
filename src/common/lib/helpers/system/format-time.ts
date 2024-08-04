export const formatTime = (inputDateTime: string) => {
  // Create a new Date object from the input date-time string
  const date = new Date(inputDateTime);

  // Get hours and minutes from the Date object
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format hours and minutes with leading zeros if necessary
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Combine hours and minutes into the desired format
  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
};
