import { create } from "zustand";

// export const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   messages: [],
//   setMessages: (messages) => set({ messages }),
// }));
export const useChats = create((set) => ({
  allChats: [],
  setAllChats: (AllChats) => {
    console.log("Updating AllChats:", AllChats);
    set(AllChats);
  },
}));

export const useAllUsers = create((set) => ({
  allUsers: [],
  setAllUsers: (users) => {
    console.log("Updating allUsers:", users); // Log when allUsers is being updated
    set({ allUsers: users });
  },
}));
useAllUsers.subscribe((state) => console.log("allUsers:", state.allUsers));
