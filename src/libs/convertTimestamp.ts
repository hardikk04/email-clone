interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export function convertTimestamp(timestamp: Timestamp): string {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
  const month = date.toLocaleString("default", { month: "long" }); // Full month name
  const year = date.getFullYear(); // Year
  return `${month} ${year}`;
}

export function convertTimestampExact(timestamp: Timestamp): string {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
  const day = date.getDate(); // Get day of the month
  const month = date.toLocaleString("default", { month: "long" }); // Full month name
  const year = date.getFullYear(); // Year
  return `${day} ${month} ${year}`;
}
