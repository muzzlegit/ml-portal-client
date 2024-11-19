import RootLayout from "app/RootLayout";
import Home from "app/pages/Home";
import { AuthForm } from "modules/authorization";
import { BattleCalc } from "modules/battleCalc";
import { RatingCalc } from "modules/ratingCalc";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<AuthForm />} />
          <Route path="rating-calc" element={<RatingCalc />} />
          <Route path="battle-calc" element={<BattleCalc />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
