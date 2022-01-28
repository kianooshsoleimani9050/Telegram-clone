export const handleDate = (date) => {
  if (date) {
    const dateTime = new Date(date);
    return new Intl.DateTimeFormat("en-Us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dateTime);
  } else {
    return "";
  }
};
