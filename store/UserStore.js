import { create } from "zustand";

const useUserStore = create((set) => ({
  userDetails: null,
  setUserDetails: (data) => {
    set(() => ({ userDetails: data }));
  },
}));

export default useUserStore;
