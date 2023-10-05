import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
