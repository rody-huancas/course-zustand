import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import { customSessionStorages } from "../storages/session.storage";
// import { firebaseStorage } from "../storages/firebase.storage";
// import { logger } from "../middlewares/logger.middleware";
import { useWeddingBoundStore } from '../wedding/index';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set({ firstName: value }, false, "setFirstName"),
  setLastName: (value: string) => set({ lastName: value }, false, "setLastName"),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: "person-storage",
      // storage: customSessionStorages,
      // storage: firebaseStorage,
    })
  )
);

usePersonStore.subscribe((nextState, /*prevState*/) => {
  const {firstName, lastName} = nextState;
  useWeddingBoundStore.getState().setFirstName(firstName)
  useWeddingBoundStore.getState().setLastName(lastName)
})