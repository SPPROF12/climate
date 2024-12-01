import { BarChart2, FileText, PlusCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: BarChart2, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: PlusCircle, label: "New Report", path: "/generate-report" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors ${
                  location.pathname === item.path ? "bg-gray-100 text-primary" : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;