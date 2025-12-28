import { User } from "../types/user";

export function isUser(data: unknown): data is User {
  return (
    !!data &&
    typeof data === "object" &&
    "id" in data &&
    typeof data.id === "number" &&
    "name" in data &&
    typeof data.name === "string" &&
    "dob" in data &&
    typeof data.dob === "string" &&
    new Date(data.dob) !== null &&
    Object.keys(data).length === 3
  );
}
