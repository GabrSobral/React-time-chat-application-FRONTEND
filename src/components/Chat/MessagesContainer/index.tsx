import { useEffect, useLayoutEffect, useRef, useState } from 'react'
// import { FaAngleDown } from 'react-icons/fa'

import { UserOne } from './UserOne'
import { UserTwo } from './UserTwo'

import styles from './styles.module.scss'
import api from '../../../services/api'
import { useAuth } from '../../../contexts/AuthContext'
import { useRooms } from '../../../contexts/RoomsContext'
import { Loading } from './Loading'

export const MessagesContainer = () => {
  const container = useRef<HTMLDivElement>(null);
  const scrollMessage = useRef<HTMLDivElement>(null);
  const { selectedRoom, roomActions, isFocused } = useRooms();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(true);
  const { myId } = useAuth();

  const scrollToDown = () => {
    scrollMessage.current && scrollMessage.current.scrollIntoView();
  }

  useEffect(() => {
    const containerRef = container.current;
    if(!containerRef) return;
    
    if(containerRef.offsetHeight + containerRef.scrollTop >= 
       containerRef.scrollHeight - 100)
      scrollToDown();
  }, [ selectedRoom?.messages.length ])

  useEffect(() => {
    const containerRef = container.current;
    
    if(!containerRef || !selectedRoom?.messages) 
    return;
    
    const onScroll = () => {
      const { offsetHeight, scrollTop, scrollHeight } = containerRef;

      if(offsetHeight + scrollTop <= scrollHeight - 100) 
        setIsVisible(true);
      else
        setIsVisible(false);

      if(selectedRoom?.hasAllMessages) return;
        
      if(selectedRoom?.messages.length  <= 49 && selectedRoom.hasMessages) 
        return roomActions.setHasAllMessages(selectedRoom._id);
        
      if(scrollTop !== 0) return;

      setIsLoading(true);
      const last_message = selectedRoom?.messages[0]._id;
      api.get(`/room/messages/list/${selectedRoom._id}?last_message=${last_message}`)
        .then(({ data }) => {
          if(data.length !== 0) 
            roomActions.addPrevMessages(data);
          else
            roomActions.setHasAllMessages(selectedRoom._id);
        })
        .finally(() => setIsLoading(false));
    }
    
    containerRef.addEventListener("scroll", onScroll);

    return () => containerRef.removeEventListener("scroll", onScroll);
  },[roomActions, container.current, selectedRoom])
  
  return(
    <div className={`${styles.container} ${!isFocused && styles.blur}`} ref={container}>
      { (!selectedRoom?.hasMessages || isLoading) && <Loading/> }
      { selectedRoom?.messages.map(message => 
        myId !== message.user ? 
          <UserTwo message={message} key={message._id}/> :
          <UserOne message={message} key={message._id}/>
      )}

      <div ref={scrollMessage}/>
      
      { isVisible && 
        <button type='button' onClick={scrollToDown} className={styles.go_to_down}> 
          {/* <FaAngleDown size={15} color="#919191"/>  */}
        </button>
      }
    </div>
  )
}