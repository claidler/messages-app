import { useEffect, useState } from 'react';
import { MessageList } from './MessageList';
import {
	createMessage,
	getMessages,
	deleteMessage,
	updateMessage,
} from 'src/queries/message';
import { IMessage } from 'src/types/message';
import styles from './form.module.css';

export const MessageForm: React.FC = () => {
	const [message, setMessage] = useState<string>();
	const [selectedMessage, setSelectedMessage] = useState<IMessage>();
	const [userMessages, setUserMessages] = useState<IMessage[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>();

	const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		setMessage(event.currentTarget.value);
	};
	const onGetMessages = async () => {
		const response = await getMessages();
		const messages = await response.json();
		setUserMessages(messages.data);
	};

	useEffect(() => {
		onGetMessages();
	}, []);

	const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		try {
			evt.preventDefault();
			if (!message) {
				setErrorMessage('Please input a message.');
				return;
			}
			const formData = new FormData();
			formData.append('message', message);
			const response = selectedMessage
				? await updateMessage(selectedMessage.id, formData)
				: await createMessage(formData);
			if (response.ok) {
				setErrorMessage('');
				setMessage('');
				setSelectedMessage(undefined);
				onGetMessages();
			} else {
				const responseError = await response.json();
				setErrorMessage(responseError.message);
			}
		} catch (err) {
			setErrorMessage(
				'Unable to process your request at this time, please try again later.'
			);
			console.error(err);
		}
	};
	const onSelectedMessage = (message: IMessage) => {
		setSelectedMessage(message);
	};
	const onDeleteMessage = async () => {
		if (!selectedMessage) return;
		try {
			await deleteMessage(selectedMessage.id);
			onGetMessages();
			setSelectedMessage(undefined);
		} catch (err) {
			setErrorMessage('Unable to delete message');
			console.error(err);
		}
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className={`${styles.form} ${styles.messageForm}`}
			>
				<input
					placeholder={selectedMessage ? selectedMessage.message : 'Message'}
					value={message}
					onChange={(evt) => onInputChange(evt)}
				/>
				<button type="submit">
					{`${selectedMessage ? 'Update' : 'Add'} Message`}
				</button>
				{selectedMessage && (
					<button
						type="button"
						className={styles.deleteButton}
						onClick={onDeleteMessage}
					>
						Delete
					</button>
				)}
				<div className={styles.errorMessage}>{errorMessage}</div>
			</form>
			{userMessages.length > 0 && (
				<MessageList
					messages={userMessages}
					onSelectedMessage={onSelectedMessage}
				/>
			)}
		</div>
	);
};
