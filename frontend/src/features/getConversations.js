// import api from "../utils/axios";

import api from "../../utils/axios";


export const getConversations =async(conversationId)=>{

 try {
    const { data } =await api.get(`/api/chat/get-conversations`);
//  console.log(data)
 return data;
 } catch (error) {
    console.log(error)
    return []
 }

};