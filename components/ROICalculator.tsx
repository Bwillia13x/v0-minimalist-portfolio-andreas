"use client";

import { useState, useEffect } from "react";
import { calculateROI, roiDefaults, pitchData } from "@/data/pitch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function ROICalculator() {
  const [inputs, setInputs] = useState(roiDefaults);
  const [results, setResults] = useState(calculateROI(
    roiDefaults.cancelsPerDay,
    roiDefaults.showRate,
    roiDefaults.rebookRate,
    roiDefaults.avgTicket,
    roiDefaults.daysPerMonth
  ));

  useEffect(() => {
    const newResults = calculateROI(
      inputs.cancelsPerDay,
      inputs.showRate,
      inputs.rebookRate,
      inputs.avgTicket,
      inputs.daysPerMonth
    );
    setResults(newResults);
  }, [inputs]);

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  return (
    <Card className="bg-[var(--ps-surface)] border-[var(--ps-border)]">
      <CardHeader>
        <CardTitle className="text-lg">ROI Calculator</CardTitle>
        <p className="text-sm text-[var(--ps-muted)]">
          Estimate monthly revenue recovery from no-show rebooking
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cancelsPerDay" className="text-sm">
              Daily No-Shows
            </Label>
            <Input
              id="cancelsPerDay"
              type="number"
              value={inputs.cancelsPerDay}
              onChange={(e) => handleInputChange('cancelsPerDay', e.target.value)}
              className="bg-[var(--ps-bg)] border-[var(--ps-border)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="showRate" className="text-sm">
              Show Rate (%)
            </Label>
            <Input
              id="showRate"
              type="number"
              value={inputs.showRate}
              onChange={(e) => handleInputChange('showRate', e.target.value)}
              className="bg-[var(--ps-bg)] border-[var(--ps-border)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rebookRate" className="text-sm">
              Rebook Rate (%)
            </Label>
            <Input
              id="rebookRate"
              type="number"
              value={inputs.rebookRate}
              onChange={(e) => handleInputChange('rebookRate', e.target.value)}
              className="bg-[var(--ps-bg)] border-[var(--ps-border)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avgTicket" className="text-sm">
              Avg Ticket ($)
            </Label>
            <Input
              id="avgTicket"
              type="number"
              value={inputs.avgTicket}
              onChange={(e) => handleInputChange('avgTicket', e.target.value)}
              className="bg-[var(--ps-bg)] border-[var(--ps-border)]"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--ps-bg)] rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                ${results.recoveredRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-[var(--ps-muted)]">
                Monthly Revenue Recovered
              </div>
            </div>
            <div className="p-4 bg-[var(--ps-bg)] rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {results.recoveredBookings}
              </div>
              <div className="text-sm text-[var(--ps-muted)]">
                Bookings Recovered/Month
              </div>
            </div>
          </div>

          {/* Pilot Payback */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Pilot Investment Payback</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-[var(--ps-bg)] rounded">
                <div className="text-lg font-bold">${pitchData.priceBands.pilotA.toLocaleString()}</div>
                <div className="text-xs text-[var(--ps-muted)]">Pilot A</div>
                <Badge variant="outline" className="mt-1 text-xs">
                  {results.pilotPaybackMonths.pilotA} months
                </Badge>
              </div>
              <div className="text-center p-2 bg-[var(--ps-bg)] rounded">
                <div className="text-lg font-bold">${pitchData.priceBands.pilotB.toLocaleString()}</div>
                <div className="text-xs text-[var(--ps-muted)]">Pilot B</div>
                <Badge variant="outline" className="mt-1 text-xs">
                  {results.pilotPaybackMonths.pilotB} months
                </Badge>
              </div>
              <div className="text-center p-2 bg-[var(--ps-bg)] rounded">
                <div className="text-lg font-bold">${pitchData.priceBands.pilotC.toLocaleString()}</div>
                <div className="text-xs text-[var(--ps-muted)]">Pilot C</div>
                <Badge variant="outline" className="mt-1 text-xs">
                  {results.pilotPaybackMonths.pilotC} months
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
