import { Upload, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface DocumentUploadStepProps {
  uploadProgress: number;
  uploadedFiles: Array<{ name: string; size: string }>;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DocumentUploadStep = ({
  uploadProgress,
  uploadedFiles,
  onFileUpload,
}: DocumentUploadStepProps) => {
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (uploadProgress === 100) {
      setScanning(true);
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanning(false);
            toast({
              title: "Document Analysis Complete",
              description: "All files have been processed and validated",
            });
            return 100;
          }
          return prev + 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [uploadProgress, toast]);

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="mx-auto w-12 h-12 text-gray-400 mb-4" />
        <Label htmlFor="file-upload" className="cursor-pointer">
          <span className="text-primary hover:text-primary/90">Click to upload</span>
          {" or drag and drop"}
        </Label>
        <Input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={onFileUpload}
          multiple
          accept=".pdf,.docx,.xlsx"
        />
        <p className="text-sm text-muted-foreground mt-2">
          PDF, DOCX, XLSX up to 10MB each
        </p>
      </div>

      {uploadProgress > 0 && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Uploading files...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="w-full" />
        </div>
      )}

      {scanning && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Scanning documents for compliance...</span>
            <span>{scanProgress}%</span>
          </div>
          <Progress value={scanProgress} className="w-full" />
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Uploaded Documents:</h4>
          <ul className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded animate-fade-in"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{file.size}</span>
                  {scanning ? (
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentUploadStep;