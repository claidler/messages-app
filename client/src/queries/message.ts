import { getQuery, postQuery, patchQuery, deleteQuery } from './';

export const getMessages = async (): Promise<Response> => {
	const response = await getQuery.executeQuery('/messages');
	return response;
};

export const createMessage = async (formData: FormData): Promise<Response> => {
	const response = await postQuery.executeQuery('/message', formData);
	return response;
};

export const updateMessage = async (
	messageId: number,
	formData: FormData
): Promise<Response> => {
	const response = patchQuery.executeQuery(`/message/${messageId}`, formData);
	return response;
};

export const deleteMessage = async (messageId: number): Promise<Response> => {
	const response = deleteQuery.executeQuery(`/message/${messageId}`);
	return response;
};
