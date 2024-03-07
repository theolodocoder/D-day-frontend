import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <PageContent />
      </div>
    </>
  );
};

export default Layout;
