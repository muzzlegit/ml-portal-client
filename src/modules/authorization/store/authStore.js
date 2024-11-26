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
          isRegister: false,
          userColor: "#BB0A01",
          token: null,

          setAuth: (isAuth) =>
            set({
              isAuth,
            }),
          setIsRegister: (isRegister) =>
            set({
              isRegister,
            }),
          setUser: (user) => set({ user }),
          setToken: (token) => set({ token }),

          register: async (email, password, userIcon, userColor) => {
            try {
              const response = await AuthService.registration(
                email,
                password,
                userIcon,
                userColor
              );
              set({
                isRegister: true,
              });
              return {
                status: response.status,
                message: response?.data?.message,
              };
            } catch (error) {
              return {
                message: error?.response?.data?.message,
              };
            }
          },
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
              return {
                status: response.status,
                message: response?.data?.message,
              };
            } catch (error) {
              return { message: error?.response?.data?.message };
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
