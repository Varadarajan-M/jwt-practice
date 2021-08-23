import { hash, compare } from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> =>
	hash(password, 12);

export const comparePassword = async (
	password: string,
	userPassword: string,
): Promise<boolean> => compare(password, userPassword);
