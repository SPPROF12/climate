import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Building2, Thermometer, Droplets, Wind } from "lucide-react";

const Reports = () => {
  const emissionsData = [
    { year: '2020', scope1: 850, scope2: 1200, scope3: 1800 },
    { year: '2021', scope1: 800, scope2: 1100, scope3: 1700 },
    { year: '2022', scope1: 750, scope2: 950, scope3: 1600 },
    { year: '2023', scope1: 700, scope2: 900, scope3: 1500 },
  ];

  const climateRisks = [
    { risk: 'Heat Stress', current: 45, future: 65 },
    { risk: 'Water Stress', current: 35, future: 55 },
    { risk: 'Flooding', current: 40, future: 70 },
    { risk: 'Winter Storms', current: 55, future: 75 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">TCFD Report - Alexandra Park Apartments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Location Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Facility Type</h3>
                <p>14-Story Residential Building</p>
              </div>
              <div>
                <h3 className="font-semibold">Total Floor Area</h3>
                <p>180,000 sq ft</p>
              </div>
              <div>
                <h3 className="font-semibold">Occupancy</h3>
                <p>396 Units</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Climate Risk Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-orange-500 mb-4">58/100</div>
            <p className="text-gray-600">Medium exposure to climate risks, with winter storms and flooding as primary concerns</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>GHG Emissions Trend (tCO2e)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="scope1" name="Scope 1 (Direct)" fill="#0EA5E9" />
                <Bar dataKey="scope2" name="Scope 2 (Electricity)" fill="#22C55E" />
                <Bar dataKey="scope3" name="Scope 3 (Indirect)" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Physical Climate Risks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={climateRisks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="risk" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="current" name="Current Risk" stroke="#0EA5E9" />
                <Line type="monotone" dataKey="future" name="2050 Projection" stroke="#F97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5" />
              Water Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Current Water Stress</h3>
                <p>Low-Medium (35%)</p>
              </div>
              <div>
                <h3 className="font-semibold">Projected 2050 Water Stress</h3>
                <p className="text-orange-500">Medium (55%)</p>
              </div>
              <div>
                <h3 className="font-semibold">Annual Water Consumption</h3>
                <p>95,000 cubic meters</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="h-5 w-5" />
              Energy Transition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Renewable Energy Use</h3>
                <p>45% of total consumption</p>
              </div>
              <div>
                <h3 className="font-semibold">Energy Efficiency Projects</h3>
                <p>4 active projects</p>
              </div>
              <div>
                <h3 className="font-semibold">Carbon Price Exposure</h3>
                <p>CAD 65/tCO2e</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;