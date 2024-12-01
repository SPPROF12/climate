import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, FileText, BarChart2, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LocationStep from "./LocationStep";
import DocumentUploadStep from "./DocumentUploadStep";
import DataAnalysisStep from "./DataAnalysisStep";
import FinalReviewStep from "./FinalReviewStep";

const steps = [
  {
    id: 1,
    title: "Location Selection",
    icon: MapPin,
    description: "Select your facility location",
  },
  {
    id: 2,
    title: "Document Upload",
    icon: FileText,
    description: "Upload relevant documents",
  },
  {
    id: 3,
    title: "Data Analysis",
    icon: BarChart2,
    description: "Review and verify data",
  },
  {
    id: 4,
    title: "Report Generation",
    icon: CheckCircle,
    description: "Generate final report",
  },
];

const ReportWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [location, setLocation] = useState("San Francisco, CA");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Annual_Report_2023.pdf", size: "2.4 MB" },
    { name: "Sustainability_Data.xlsx", size: "1.1 MB" },
  ]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      toast({
        title: `Step ${currentStep} completed`,
        description: "Moving to next step",
      });
      
      if (currentStep === 2) {
        simulateUploadProgress();
      }
    } else {
      toast({
        title: "Report Generation Complete",
        description: "Redirecting to report view",
      });
      navigate("/reports");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      simulateUploadProgress();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Generate TCFD Report</h2>
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                step.id === currentStep
                  ? "text-primary"
                  : step.id < currentStep
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            >
              <step.icon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <LocationStep 
              location={location} 
              onLocationChange={handleLocationChange} 
            />
          )}
          {currentStep === 2 && (
            <DocumentUploadStep 
              uploadProgress={uploadProgress}
              uploadedFiles={uploadedFiles}
              onFileUpload={handleFileUpload}
            />
          )}
          {currentStep === 3 && <DataAnalysisStep />}
          {currentStep === 4 && <FinalReviewStep />}
          
          <div className="mt-6 flex justify-between">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            <div className="ml-auto">
              <Button onClick={handleNext}>
                {currentStep === steps.length ? "Generate Report" : "Next Step"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportWizard;