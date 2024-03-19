import { create } from "zustand";

// export const UseConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   messages: [],
//   setMessages: (messages) => set({ messages }),
// }));
const useAllUsers = create((set) => ({
  allUsers: [],
  setAllUsers: (users) => {
    console.log("Updating allUsers:", users); // Log when allUsers is being updated
    set({ allUsers: users });
  },
}));
useAllUsers.subscribe((state) => console.log("allUsers:", state.allUsers));
export default useAllUsers;
