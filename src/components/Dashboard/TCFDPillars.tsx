import { Shield, Lightbulb, Target, BarChart } from "lucide-react";

const TCFDPillars = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Governance",
      description: "Board oversight and management's role",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Climate-related risks and opportunities",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Processes for identifying and managing risks",
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: BarChart,
      title: "Metrics & Targets",
      description: "Assessment and management of risks",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${pillar.color} p-3 rounded-full w-fit mb-4`}>
            <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
          </div>
          <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
          <p className="text-gray-600 text-sm">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TCFDPillars;