import { IMessage } from 'src/types/message';
import styles from './form.module.css';

type MessageListProps = {
	messages: IMessage[];
	onSelectedMessage: (messageId: IMessage) => void;
};

export const MessageList: React.FC<MessageListProps> = ({
	messages,
	onSelectedMessage,
}) => {
	return (
		<div>
			<div className={styles.selectMessage}>
				Select a message to update or delete:{' '}
			</div>
			<div className={styles.messageList}>
				{messages.map((message) => (
					<div onClick={() => onSelectedMessage(message)}>
						{message.message}
					</div>
				))}
			</div>
		</div>
	);
};
