import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface LocationStepProps {
  location: string;
  onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationStep = ({ location, onLocationChange }: LocationStepProps) => {
  const [loadingMap, setLoadingMap] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [progress, setProgress] = useState(0);

  // Alexandra Park Apartments coordinates
  const latitude = 43.6488;
  const longitude = -79.4037;

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoadingMap(false);
    }, 2000);

    // Simulate data loading with progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingData(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="location">Facility Location</Label>
        <Input
          id="location"
          placeholder="Enter location"
          value="91 Augusta Ave #309, Toronto, ON M5T 2L2, Canada"
          onChange={onLocationChange}
        />
      </div>
      
      {loadingMap ? (
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="w-8 h-8 text-blue-500 animate-bounce mx-auto" />
            <p className="text-sm text-gray-600">Loading map data...</p>
          </div>
        </div>
      ) : (
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`}
            style={{ border: 0 }}
            className="rounded-lg"
          />
        </div>
      )}

      {loadingData ? (
        <Card className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Loading location data...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </Card>
      ) : (
        <Card className="bg-blue-50 p-4">
          <h4 className="font-medium text-blue-700">Location Details</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-600">
            <li>Building Type: 14-Story Residential Building</li>
            <li>Climate Zone: Cool-Humid (Zone 6)</li>
            <li>Risk Level: Medium (Score: 58/100)</li>
            <li>Regional Regulations: 
              <ul className="ml-4 mt-1">
                <li>• Toronto Green Standard (TGS Version 4)</li>
                <li>• Ontario Building Code (OBC)</li>
                <li>• Canada Green Building Council Standards</li>
              </ul>
            </li>
          </ul>
        </Card>
      )}
    </div>
  );
};

export default LocationStep;