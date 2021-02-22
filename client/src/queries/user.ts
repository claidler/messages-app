import { getQuery, postQuery } from './';

export const login = async (formData: FormData): Promise<Response> => {
	const response = await postQuery.executeQuery('/login', formData);
	return response;
};

export const logout = async (): Promise<Response> => {
	const response = await getQuery.executeQuery('/logout');
	return response;
};

export const register = async (formData: FormData): Promise<Response> => {
	const response = await postQuery.executeQuery('/user', formData);
	return response;
};

export const getUser = async (): Promise<Response> => {
	const response = await getQuery.executeQuery('/user');
	return response;
};
