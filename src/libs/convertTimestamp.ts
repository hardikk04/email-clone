export function convertTimestamp(isoString: string): string {
  const date = new Date(isoString);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = date.getFullYear();
  return `${month}/${year}`;
}

export function convertTimestampExact(isoString: string): string {
  const date = new Date(isoString);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}
