import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-[300px] h-screen">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px] overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
