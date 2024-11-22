import Providers from "./Providers";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Providers>{<AppRouter />}</Providers>
    </>
  );
}

export default App;
