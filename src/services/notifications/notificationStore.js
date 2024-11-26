import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useNotificationStore = create(
  devtools(
    immer((set) => ({
      notifications: [],

      addNotification: (type, message, delay = 4000) => {
        const id = Date.now();
        set((state) => {
          state.notifications.push({ id, type, message: message ?? "Error" });
        });

        setTimeout(() => {
          set((state) => {
            state.notifications = state.notifications.filter(
              (notification) => notification.id !== id
            );
          });
        }, delay);
      },
    })),
    { name: "notifications" }
  )
);

export default useNotificationStore;
