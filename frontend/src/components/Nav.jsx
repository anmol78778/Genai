import { MessagesSquare } from 'lucide-react'
import React from 'react'

function Nav() {
  // const { conversations, selectedConversation } = useSelector(state => state.conversation);

  return (
    <div className="h-14 flex items-center gap-2.5 justify-between px-5 border-b border-white/[0.06] bg-[#0d0f14]">
      <div>
        <MessagesSquare/>
      </div>
      <div>
        {/* {selectedConversation?.title || "New Chat"} */}
      </div>
    </div>
  )
}

export default Nav
