import { InputError } from "../types/errors/input-error";
import { User } from "../types/user";

const users: User[] = [];

export function readUser(id: number): User | null {
  return users.find((user) => user.id === id) ?? null;
}

export function readUsers(): User[] {
  return users;
}

export function createUser(id: number, name: string, dob: Date): void {
  if (users.some((user) => user.id === id)) {
    throw new InputError("an user with the same 'id' already exists");
  }

  users.push({ id, name, dob });
}
