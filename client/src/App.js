import PageLayout from "./pages/PageLayout";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Fun from "./pages/Fun";
import School from "./pages/School";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <PageLayout>
        <Routes>
          <Route path="/">
            <Route path="profile" element={<Profile />} />
            <Route path="work" element={<Work />} />
            <Route index element={<Home />} />
            <Route path="school" element={<School />} />
            <Route path="fun" element={<Fun />} />
          </Route>
        </Routes>
    </PageLayout>
  );
}

export default App;
