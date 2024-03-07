import { Route, Routes } from "react-router-dom";
import routes from "../routes";

const PageContent = () => {
  return (
    <div className="bg-[#05F900] flex w-full text-black">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default PageContent;
