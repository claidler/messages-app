import bcrypt from 'bcryptjs';

export const createPassword = async (password: string): Promise<string> => {
	try {
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export const comparePassword = async (
	password: string,
	otherPassword: string
): Promise<boolean> => {
	try {
		const isValid = await bcrypt.compare(otherPassword, password);
		return isValid;
	} catch (err) {
		return err;
	}
};
