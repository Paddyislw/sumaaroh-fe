import { Navigate, Route, Routes } from "react-router-dom";
import FreeProposalPage from "../pages/FreeProposalPage";
import WeddingPreferencePage from "../pages/WeddingPreferencePage";
import ConfirmationPage from "../pages/ConfirmationPage";
import UserDetailsPage from "../pages/UserDetailsPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<FreeProposalPage />} path="/free-proposal" />
        <Route element={<WeddingPreferencePage />} path="/wedding-preference" />
        <Route element={<ConfirmationPage />} path="/confirmation" />
        <Route element={<UserDetailsPage />} path="/user-details" />
        <Route path="*" element={<Navigate to="/user-details" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
