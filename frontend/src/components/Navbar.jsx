import { MessagesSquare } from 'lucide-react'
import React from 'react'
import { useSelector } from "react-redux";
function Nav() {
  const {  selectedConversation } = useSelector(state => state.conversation);
  const {messages}=useSelector(state=>state.message)
  return (
    <div className="h-14 flex items-center gap-2.5 justify-between px-5 border-b border-white/[0.06] bg-[#0d0f14]">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
        <MessagesSquare/>
      </div>
      <div>
        {selectedConversation?.title || "New Chat"}
      </div>
      <div>
        {messages?.length} MEsssages
      </div>
    </div>
  )
}

export default Nav
