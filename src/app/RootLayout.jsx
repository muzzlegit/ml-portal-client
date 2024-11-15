import { AuthService } from "http/index";
import useAuthStore from "modules/authorization/store/authStore";
import { useState } from "react";
import useNotificationStore from "services/notifications/notificationStore";
import { Form, Layout } from "./RootLayout.styled";

const RootLayout = () => {
  const [email, setEmail] = useState("muzzlestore@gmail.com");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const isAuth = useAuthStore((state) => state.isAuth);

  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );
  return (
    <Layout>
      <Form>
        <label>text</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            AuthService.registration(email, password, "bag", "#000000");
            console.log({ email, password, icon: "bag", color: "#000000" });
          }}
        >
          register
        </button>
        {isAuth ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={async (e) => {
              e.preventDefault();
              const response = await login(email, password);
              response
                ? addNotification("success", "Вход выполнен успешно")
                : addNotification(
                    "error",
                    "Ошибка при логине, попробуйте еще раз"
                  );
            }}
          >
            login
          </button>
        )}
      </Form>
      <button
        onClick={() => {
          addNotification("info", "Сейчас будет нотификация");
        }}
      >
        INFO
      </button>
      <button
        onClick={() => {
          addNotification("success", "Сейчас будет нотификация");
        }}
      >
        SUCCESS
      </button>{" "}
      <button
        onClick={() => {
          addNotification("warn", "Сейчас будет нотификация");
        }}
      >
        WARN
      </button>{" "}
      <button
        onClick={() => {
          addNotification("error", "Сейчас будет нотификация");
        }}
      >
        ERROR
      </button>
    </Layout>
  );
};

export default RootLayout;
