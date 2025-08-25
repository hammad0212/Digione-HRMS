import React, { useState } from "react"
import { Edit, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface PayrollTemplate {
  id: number
  templateName: string
  nationality: string
  department: string
  role: string
  payTypes: { name: string; rate: number }[]
}

const initialTemplates: PayrollTemplate[] = [
  {
    id: 1,
    templateName: "Template 1",
    nationality: "Singaporean",
    department: "HR Dept - 1",
    role: "Role 1",
    payTypes: [
      { name: "Daily Basic Salary", rate: 40 },
      { name: "Overtime Pay", rate: 7.5 },
      { name: "Daily Meal Incentive", rate: 10 },
    ],
  },
  {
    id: 2,
    templateName: "Template 2",
    nationality: "Malaysian",
    department: "HR Dept - 2",
    role: "Role 2",
    payTypes: [
      { name: "Daily Basic Salary", rate: 35 },
      { name: "Overtime Pay", rate: 6.5 },
    ],
  },
]

const PayrollSetup: React.FC = () => {
  const [templates, setTemplates] =
    useState<PayrollTemplate[]>(initialTemplates)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const [templateName, setTemplateName] = useState("")
  const [nationality, setNationality] = useState("")
  const [department, setDepartment] = useState("")
  const [role, setRole] = useState("")
  const [payTypeName, setPayTypeName] = useState("")
  const [payRate, setPayRate] = useState("")

  const handleAddPayType = () => {
    if (!payTypeName || !payRate) return
    setTemplates((prev) =>
      prev.map((t, i) =>
        i === prev.length - 1
          ? {
              ...t,
              payTypes: [
                ...t.payTypes,
                { name: payTypeName, rate: parseFloat(payRate) },
              ],
            }
          : t
      )
    )
    setPayTypeName("")
    setPayRate("")
  }

  const handleSaveTemplate = () => {
    const newTemplate: PayrollTemplate = {
      id: templates.length + 1,
      templateName,
      nationality,
      department,
      role,
      payTypes: [],
    }
    setTemplates([...templates, newTemplate])
    setTemplateName("")
    setNationality("")
    setDepartment("")
    setRole("")
  }

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  // 🔑 handle inline editing
  const handleRateChange = (
    templateId: number,
    payTypeIndex: number,
    newRate: string
  ) => {
    setTemplates((prev) =>
      prev.map((t) =>
        t.id === templateId
          ? {
              ...t,
              payTypes: t.payTypes.map((pt, idx) =>
                idx === payTypeIndex
                  ? { ...pt, rate: parseFloat(newRate) || 0 }
                  : pt
              ),
            }
          : t
      )
    )
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-white-100">
      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end mb-6">
        <Input
          placeholder="Template Name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
        <Select value={nationality} onValueChange={setNationality}>
          <SelectTrigger>
            <SelectValue placeholder="Select Nationality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Singaporean">Singaporean</SelectItem>
            <SelectItem value="Malaysian">Malaysian</SelectItem>
            <SelectItem value="Foreigner">Foreigner</SelectItem>
          </SelectContent>
        </Select>
        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger>
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="HR Dept - 1">HR Dept - 1</SelectItem>
            <SelectItem value="HR Dept - 2">HR Dept - 2</SelectItem>
            <SelectItem value="HR Dept - 3">HR Dept - 3</SelectItem>
          </SelectContent>
        </Select>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger>
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Role 1">Role 1</SelectItem>
            <SelectItem value="Role 2">Role 2</SelectItem>
            <SelectItem value="Role 3">Role 3</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Input
            placeholder="Pay Type Name"
            value={payTypeName}
            onChange={(e) => setPayTypeName(e.target.value)}
          />
          <Button
            onClick={handleAddPayType}
            className="bg-blue-500 hover:bg-blue-400 text-white"
          >
            <Plus size={16} />
          </Button>
        </div>
        <Input
          placeholder="Pay Rate"
          value={payRate}
          onChange={(e) => setPayRate(e.target.value)}
        />
        <Button
          onClick={handleSaveTemplate}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          SAVE
        </Button>
      </div>

      {/* Template List */}
      <div className="space-y-4">
        {templates.map((t) => (
          <Card key={t.id}>
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-blue-400 text-white flex justify-between items-center p-3">
                <span className="font-semibold">{t.nationality}</span>
                <span>{t.department}</span>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Edit size={16} />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => toggleExpand(t.id)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        expandedId === t.id ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* Expandable Table */}
              {expandedId === t.id && (
                <div className="p-3 bg-white text-black">
                  {t.payTypes.length > 0 ? (
                    <table className="w-full border text-sm">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-2 py-1">Pay Type Name</th>
                          <th className="border px-2 py-1">Nationality</th>
                          <th className="border px-2 py-1">Department</th>
                          <th className="border px-2 py-1">Role</th>
                          <th className="border px-2 py-1">Pay Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {t.payTypes.map((pt, i) => (
                          <tr key={i}>
                            <td className="border px-2 py-1">{pt.name}</td>
                            <td className="border px-2 py-1">
                              {t.nationality}
                            </td>
                            <td className="border px-2 py-1">{t.department}</td>
                            <td className="border px-2 py-1">{t.role}</td>
                            <td className="border px-2 py-1">
                              <Input
                                type="number"
                                value={pt.rate}
                                onChange={(e) =>
                                  handleRateChange(t.id, i, e.target.value)
                                }
                                className="w-24"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-500">No Pay Types added.</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PayrollSetup
