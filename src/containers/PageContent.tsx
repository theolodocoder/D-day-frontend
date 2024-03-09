import { Route, Routes } from "react-router-dom";
import routes from "../routes";

const PageContent = () => {
  return (
    <div className="bg-[#059301] flex w-full text-white items-center overflow-hidden h-full">
      <div className="mx-auto min-w-[90%]">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default PageContent;
