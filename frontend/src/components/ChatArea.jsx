import React, { useEffect } from 'react'
import Nav from './Nav'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
import getMessages from '../features/getMessages';
// import  getMessages  from '../features/getMessages'
function ChatArea() {
    const {  selectedConversation } = useSelector(state => state.conversation);
    const dispatch=useDispatch()
    
    useEffect(()=>{
      const getMsg=async () => {
        if(selectedConversation){
          const data=await getMessages(selectedConversation?._id)
          dispatch(setMessages(data))
        }
      }
      getMsg(); 
    },[selectedConversation])

//     useEffect(() => {
//   const getMsg = async () => {
//     if (selectedConversation) {
//       const data = await getMessages(selectedConversation._id);
//       dispatch(setMessages(data));
//     }
//   };

//   getMsg();
// }, [selectedConversation, dispatch]);
  return (
    <div className='flex-1 flex flex-col'>
      <Nav/>
      <MessageList/>
      <ChatInput/>
    </div>
  )
}

export default ChatArea
