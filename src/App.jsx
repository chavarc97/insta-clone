import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/pageLayout/PageLayout";
import HomePage from "./pages/homePage/HomePage";
import AuthPage from "./pages/authPage/AuthPage";
//import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        {/* <ToastContainer /> */}
      </PageLayout>
    </>
  );
}

export default App;
