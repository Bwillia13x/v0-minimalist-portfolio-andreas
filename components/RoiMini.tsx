"use client"

import { useState } from "react"
import { calculateROI } from "@/data/pitch"

interface RoiMiniProps {
  className?: string
}

export function RoiMini({ className = "" }: RoiMiniProps) {
  const [inputs, setInputs] = useState({
    cancelsPerDay: 2,
    showRate: 60,
    rebookRate: 40,
    avgTicket: 70,
    daysPerMonth: 26
  })

  const results = calculateROI(
    inputs.cancelsPerDay,
    inputs.showRate,
    inputs.rebookRate,
    inputs.avgTicket,
    inputs.daysPerMonth
  )

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    const numValue = parseInt(value) || 0
    setInputs(prev => ({ ...prev, [field]: numValue }))
  }

  return (
    <div className={`p-6 border border-border rounded-lg bg-card ${className}`}>
      <h3 className="font-medium mb-4">ROI Calculator</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            Daily No-Shows
          </label>
          <input
            type="number"
            value={inputs.cancelsPerDay}
            onChange={(e) => handleInputChange('cancelsPerDay', e.target.value)}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-background"
            min="0"
            max="20"
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            Show Rate (%)
          </label>
          <input
            type="number"
            value={inputs.showRate}
            onChange={(e) => handleInputChange('showRate', e.target.value)}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-background"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            Rebook Rate (%)
          </label>
          <input
            type="number"
            value={inputs.rebookRate}
            onChange={(e) => handleInputChange('rebookRate', e.target.value)}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-background"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            Avg Ticket ($)
          </label>
          <input
            type="number"
            value={inputs.avgTicket}
            onChange={(e) => handleInputChange('avgTicket', e.target.value)}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-background"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border/50">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Monthly Revenue Recovered</span>
          <span className="font-medium text-primary">${results.recoveredRevenue.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Pilot A Payback</span>
          <span className="text-xs text-muted-foreground">
            {results.pilotPaybackMonths.pilotA === Infinity ? '∞' : `${results.pilotPaybackMonths.pilotA} months`}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Pilot B Payback</span>
          <span className="text-xs text-muted-foreground">
            {results.pilotPaybackMonths.pilotB === Infinity ? '∞' : `${results.pilotPaybackMonths.pilotB} months`}
          </span>
        </div>
      </div>
    </div>
  )
}
