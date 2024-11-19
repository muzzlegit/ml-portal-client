import { AuthService } from "http/index";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  devtools(
    immer(
      persist(
        (set) => ({
          user: null,
          isAuth: false,
          activeForm: null,
          userColor: "#FFF",
          token: null,

          setAuth: (isAuth) =>
            set({
              isAuth,
            }),
          setActiveForm: (formType) =>
            set({
              activeForm: formType,
            }),
          setUser: (user) => set({ user }),
          setToken: (token) => set({ token }),

          login: async (email, password) => {
            try {
              const response = await AuthService.login(email, password);
              if (!response || !response?.data)
                throw new Error("Authentication failed");
              const { user, token } = response.data;
              if (!user || !token) throw new Error("Authentication failed");
              set({
                isAuth: true,
                user,
                token,
              });
              return true;
            } catch (error) {
              console.log(error.message);
              return false;
            }
          },
          logout: async () => {
            try {
              const response = await AuthService.logout();
              if (response?.status === 200) {
                set({
                  isAuth: false,
                  user: null,
                  token: null,
                });
                return true;
              } else {
                // throw new Error("Logout failed");
                return false;
              }
            } catch (error) {
              console.log(error.message);
            }
          },
        }),
        {
          name: "auth-storage",
          partialize: (state) => ({
            token: state.token,
            userColor: state.userColor,
          }),
        }
      )
    ),
    { name: "auth-store" }
  )
);

export default useAuthStore;
