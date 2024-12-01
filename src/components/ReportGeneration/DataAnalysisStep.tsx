import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const DataAnalysisStep = () => {
  const [analyzing, setAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [completedAnalysis, setCompletedAnalysis] = useState<string[]>([]);

  useEffect(() => {
    const analysisSteps = [
      "Emissions Data Verification",
      "Risk Assessment",
      "Data Quality Check",
      "Regulatory Compliance",
      "Scenario Analysis"
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          return 100;
        }
        if (prev % 20 === 0) {
          setCompletedAnalysis(prev => [...prev, analysisSteps[currentStep]]);
          currentStep++;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (analyzing) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Analyzing data...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
              <div className="space-y-2">
                {completedAnalysis.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-green-600 animate-fade-in">
                    <CheckCircle className="w-4 h-4" />
                    <span>{step} complete</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Emissions Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-500">Valid</p>
              <p className="text-sm text-muted-foreground">All data points verified</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Scope 1 Emissions:</span>
                  <span className="font-medium">12,500 tCO2e</span>
                </li>
                <li className="flex justify-between">
                  <span>Scope 2 Emissions:</span>
                  <span className="font-medium">8,300 tCO2e</span>
                </li>
                <li className="flex justify-between">
                  <span>Scope 3 Emissions:</span>
                  <span className="font-medium">45,200 tCO2e</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Risk Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-orange-500">Review Needed</p>
              <p className="text-sm text-muted-foreground">2 items require attention</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  Transition risk data incomplete
                </li>
                <li className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  Physical risk assessment pending
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Data Quality Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Data Completeness</span>
                <span className="text-sm text-gray-600">85%</span>
              </div>
              <Progress value={85} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Data Accuracy</span>
                <span className="text-sm text-gray-600">92%</span>
              </div>
              <Progress value={92} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Data Consistency</span>
                <span className="text-sm text-gray-600">78%</span>
              </div>
              <Progress value={78} className="w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataAnalysisStep;