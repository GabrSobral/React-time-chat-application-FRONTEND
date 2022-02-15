import { format } from 'date-fns'

import { MdDoneAll } from 'react-icons/md'
import { useAuth } from '../../../../contexts/AuthContext.js'
import { SendingSVG } from '../../../../images/sending.jsx';
import ArrowRight from '../../../../images/message_arrow_right.svg';
import { useRooms } from '../../../../contexts/RoomsContext/index.js';
import styles from './styles.module.scss'

export function UserOne({ message }){
  const formattedMessageDate = format(new Date(message.timestamp), "HH:mm");
  const { myId } = useAuth();
  const { selectMessageToAnswer } = useRooms();

  return(
    <div 
      className={styles.user_one} 
      key={message._id}
      onClick={() => selectMessageToAnswer(message)}
    >
      <span className={styles.arrow_right}>
       <img src={ArrowRight} alt="arrow of popup" />
      </span>

      { message.referencedTo &&
        <div className={styles.referencedTo_container}>
          <span className={styles.my_name}>{myId === message.referencedTo.user ? "Você":message.user}</span>
          <span>{message.referencedTo.message}</span>
        </div>
      }
      <div className={styles.message_content_container}>
      <p className={styles.message}>{message.message}</p>
        <div className={styles.time_and_receiver}>
          <span className={styles.time}>{formattedMessageDate}</span>
          { message.received ? 
            <MdDoneAll size={16} fill={message.viewed ? "#30B1E7" : "#A6ADA0"}/> :
            <SendingSVG/>
          }
        </div>
      </div>
    </div>
  )
}