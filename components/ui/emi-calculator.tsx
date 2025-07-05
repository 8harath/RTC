"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

interface EMICalculatorProps {
  className?: string
  showApplyButton?: boolean
  compact?: boolean
}

export function EMICalculator({ 
  className = "", 
  showApplyButton = true, 
  compact = false 
}: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState([5000000])
  const [interestRate, setInterestRate] = useState([8.5])
  const [loanTenure, setLoanTenure] = useState([20])
  const [emi, setEmi] = useState(0)

  // EMI Calculation
  useEffect(() => {
    const P = loanAmount[0]
    const r = interestRate[0] / 12 / 100
    const n = loanTenure[0] * 12
    
    if (P > 0 && r > 0 && n > 0) {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      setEmi(Math.round(emiValue))
    } else {
      setEmi(0)
    }
  }, [loanAmount, interestRate, loanTenure])

  const totalInterest = Math.max(0, (emi * loanTenure[0] * 12 - loanAmount[0]))
  const totalAmount = emi * loanTenure[0] * 12
  const monthlyIncomeNeeded = emi * 3

  return (
    <Card className={`${className} border-orange-100 shadow-lg`}>
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center mb-2">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <Calculator className="w-5 h-5 text-orange-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">EMI Calculator</CardTitle>
        </div>
        {!compact && (
          <p className="text-gray-600">Calculate your monthly EMI with our interactive tool</p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className={`grid ${compact ? 'gap-4' : 'lg:grid-cols-2 gap-8'}`}>
          <div className="space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Loan Amount
              </label>
              <div className="space-y-3">
                <Input
                  type="number"
                  value={loanAmount[0]}
                  onChange={(e) => setLoanAmount([Number(e.target.value) || 0])}
                  placeholder="Enter loan amount"
                  className="text-lg font-semibold text-gray-900 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  min="100000"
                  max="10000000"
                  step="100000"
                />
                <div className="text-sm text-gray-600">₹{loanAmount[0].toLocaleString()}</div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  max={10000000}
                  min={100000}
                  step={100000}
                  className="w-full [&>.relative]:bg-orange-100 [&_[role=slider]]:bg-orange-600 [&_[role=slider]]:border-orange-600 [&_[role=slider]]:shadow-md"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>₹1L</span>
                  <span>₹1Cr</span>
                </div>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Interest Rate
              </label>
              <div className="space-y-3">
                <Input
                  type="number"
                  value={interestRate[0]}
                  onChange={(e) => setInterestRate([Number(e.target.value) || 0])}
                  placeholder="Enter interest rate"
                  className="text-lg font-semibold text-gray-900 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  min="6"
                  max="15"
                  step="0.1"
                />
                <div className="text-sm text-gray-600">{interestRate[0]}% per annum</div>
                <Slider
                  value={interestRate}
                  onValueChange={setInterestRate}
                  max={15}
                  min={6}
                  step={0.1}
                  className="w-full [&>.relative]:bg-orange-100 [&_[role=slider]]:bg-orange-600 [&_[role=slider]]:border-orange-600 [&_[role=slider]]:shadow-md"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>6%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Loan Tenure
              </label>
              <div className="space-y-3">
                <Input
                  type="number"
                  value={loanTenure[0]}
                  onChange={(e) => setLoanTenure([Number(e.target.value) || 0])}
                  placeholder="Enter loan tenure"
                  className="text-lg font-semibold text-gray-900 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  min="1"
                  max="30"
                  step="1"
                />
                <div className="text-sm text-gray-600">{loanTenure[0]} years</div>
                <Slider
                  value={loanTenure}
                  onValueChange={setLoanTenure}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full [&>.relative]:bg-orange-100 [&_[role=slider]]:bg-orange-600 [&_[role=slider]]:border-orange-600 [&_[role=slider]]:shadow-md"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 shadow-inner border border-orange-200">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-orange-800 mb-2">₹{emi.toLocaleString()}</div>
              <div className="text-gray-700 font-medium">Monthly EMI</div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="text-gray-700 font-medium">Principal Amount:</span>
                <span className="font-bold text-gray-900">₹{loanAmount[0].toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="text-gray-700 font-medium">Total Interest:</span>
                <span className="font-bold text-gray-900">₹{totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-orange-200">
                <span className="text-gray-700 font-medium">Total Amount:</span>
                <span className="font-bold text-orange-800 text-lg">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {!compact && (
              <div className="mt-6 pt-4 border-t border-orange-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-gray-600 mb-1">Loan-to-Value</div>
                    <div className="font-semibold text-gray-900">
                      {loanAmount[0] > 0 ? ((loanAmount[0] / (loanAmount[0] * 1.2)) * 100).toFixed(1) : 0}%
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-gray-600 mb-1">Monthly Income Needed</div>
                    <div className="font-semibold text-gray-900">₹{monthlyIncomeNeeded.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            )}

            {showApplyButton && (
              <Link href="/contact" className="block mt-4">
                <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white font-semibold">
                  Apply for Loan
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
