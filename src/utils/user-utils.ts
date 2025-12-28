export function isUser(data: unknown): data is User {
  return (
    !!data &&
    typeof data === "object" &&
    "id" in data &&
    typeof data.id === "number" &&
    "name" in data &&
    typeof data.name === "string" &&
    "dob" in data &&
    data.dob instanceof Date &&
    Object.keys(data).length === 3
  );
}
