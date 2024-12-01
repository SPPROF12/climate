import DocumentUpload from "@/components/Dashboard/DocumentUpload";
import TCFDPillars from "@/components/Dashboard/TCFDPillars";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const previousReports = [
  {
    id: 1,
    name: "Alexandra Park Apartments TCFD Report",
    date: "2024-03-15",
    status: "Completed",
    type: "Annual Assessment",
  },
  {
    id: 2,
    name: "Toronto Portfolio Climate Risk Analysis",
    date: "2024-02-28",
    status: "In Review",
    type: "Portfolio Assessment",
  }
];

const Index = () => {
  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to TCFD Reporter
          </h2>
          <p className="text-gray-600">
            Start by generating a new report or explore the TCFD pillars
          </p>
        </div>
        <Link to="/generate-report">
          <Button className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate New Report
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent Reports</h3>
            <Link to="/reports" className="text-blue-600 hover:text-blue-700 text-sm">
              View All Reports
            </Link>
          </div>
          <div className="grid gap-4">
            {previousReports.map((report) => (
              <Card key={report.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">{report.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.type}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'Completed' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">TCFD Framework</h3>
          <TCFDPillars />
        </section>
      </div>
    </>
  );
};

export default Index;