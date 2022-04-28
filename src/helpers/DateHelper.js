export const getCountdownDate = (addDays = 1) => {
  const today = new Date();
  const finalDate = new Date(today);
  finalDate.setDate(today.getDate() + addDays);

  return finalDate.toDateString();
}

export const formatCountdown = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return `${days}:${hours}:${minutes}:${seconds}`;
}
