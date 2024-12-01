import { Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">TCFD Reporter</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            US
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;