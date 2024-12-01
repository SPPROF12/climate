import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

const FinalReviewStep = () => {
  const [generating, setGenerating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGenerating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const tcfdReport = `The Alexandra Park Apartments, located at 121_91 Augusta Ave. in Toronto, is a 14-storey high-rise residential building. Given Toronto's evolving climate patterns, it's crucial to assess the climate-related risks and opportunities pertinent to this property. This report aligns with the Task Force on Climate-related Financial Disclosures (TCFD) framework, focusing on governance, strategy, risk management, and metrics and targets.

1. Governance

Oversight of Climate Risks: The property management team is responsible for monitoring and addressing climate-related risks. This includes integrating climate considerations into maintenance schedules, capital improvement plans, and tenant communications.

2. Strategy

Identified Climate Change Risks:

Physical Risks:

Acute: Increased frequency of extreme weather events, such as heatwaves and heavy rainfall, leading to potential flooding.
Chronic: Rising average temperatures and urban heat island effects.
Transition Risks:

Policy and Legal: Stricter building codes and energy efficiency regulations.
Market: Growing tenant demand for climate-resilient and energy-efficient buildings.
Reputation: The need to uphold a reputation for environmental responsibility.
Projected Climate Impacts:

Short-term (5–10 years):

Increase in the number of days with temperatures exceeding 30°C, from an average of 8 days in the 1950s to about 18 days per year currently. 
CBC
More intense rainfall events, elevating the risk of urban flooding.
Medium-term (10–30 years):

Further rise in the frequency and intensity of heatwaves.
Increased precipitation variability, with potential for both heavy rainfall and drought conditions.
Long-term (50–100 years):

Significant temperature increases, with projections indicating up to 60 days of temperatures over 30°C by the 2080s. 
CBC
Heightened risk of severe weather events, including storms and flooding.
3. Risk Management

Physical Risk Mitigation:

Heatwaves:

Install energy-efficient cooling systems and improve insulation to maintain indoor comfort.
Implement green roofs and increase urban greenery to mitigate the urban heat island effect.

Flooding:

Elevate critical building systems above potential flood levels.
Enhance drainage systems and use permeable materials to reduce surface runoff.
Transition Risk Management:

Policy Compliance:

Regularly update building practices to comply with evolving energy efficiency and building codes.
Market Adaptation:

Promote the building's sustainability features to attract environmentally conscious tenants.

4. Metrics and Targets

Energy Consumption:

Aim to reduce energy usage by 20% over the next 5 years through efficiency upgrades.

Greenhouse Gas Emissions:

Set a target to decrease emissions by 15% within 5 years, aligning with city-wide climate goals.

Water Usage:

Implement water-saving fixtures to achieve a 10% reduction in water consumption over 3 years.
Recommendations

Green Roofs and Permeable Pavements:

Install green roofs to reduce heat absorption and manage stormwater.
Use permeable pavements to decrease surface runoff and mitigate flooding risks.
Energy Efficiency Upgrades:

Replace outdated HVAC systems with energy-efficient models.
Install LED lighting and motion sensors in common areas to reduce electricity consumption.

Tenant Engagement:

Educate residents on energy-saving practices and provide resources for reducing individual carbon footprints.
Regular Climate Risk Assessments:

Conduct periodic reviews of climate-related risks and update mitigation strategies accordingly.
By proactively addressing these climate-related risks and implementing sustainable practices, Alexandra Park Apartments can enhance its resilience and continue to provide a safe and comfortable environment for its residents.`;

  if (generating) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Generating final report...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
              <div className="text-sm text-gray-600">
                Compiling data and generating visualizations...
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-700 font-medium">Report Ready for Generation</p>
        <p className="text-sm text-green-600">All required sections completed</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">TCFD Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={tcfdReport}
            readOnly
            className="min-h-[400px] font-mono text-sm"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Report Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { name: "Governance", details: "Board oversight and management's role" },
                { name: "Strategy", details: "Climate-related risks and opportunities" },
                { name: "Risk Management", details: "Identification and assessment processes" },
                { name: "Metrics & Targets", details: "Emissions data and climate goals" },
              ].map((section) => (
                <li
                  key={section.name}
                  className="flex items-center gap-2 text-sm group"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{section.name}</span>
                    <p className="text-muted-foreground text-xs mt-0.5">{section.details}</p>
                  </div>
                  <span className="ml-auto text-green-500">Complete</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Report Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Key Findings</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Total emissions: 66,000 tCO2e</li>
                  <li>• Climate risk level: Medium-High</li>
                  <li>• Adaptation measures: In progress</li>
                  <li>• Mitigation strategy: Developed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recommendations</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Enhance emissions monitoring</li>
                  <li>• Implement water conservation</li>
                  <li>• Develop transition plan</li>
                  <li>• Set science-based targets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinalReviewStep;
