import { useState } from "react"
import { Edit, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const initialPayrollTypes = [
  { id: 1, payName: "Daily Basic Pay" },
  { id: 2, payName: "Overtime Pay" },
  { id: 3, payName: "Daily Meal Incentive" },
  { id: 4, payName: "Daily Transport Incentive" },
  { id: 5, payName: "Sunday Incentive" },
  { id: 6, payName: "PH Incentive" },
  { id: 7, payName: "KPI Incentive" },
]

export default function PayrollTypeSetup() {
  const [payrollTypes, setPayrollTypes] = useState(initialPayrollTypes)
  const [searchTerm, setSearchTerm] = useState("")
  const [newPayType, setNewPayType] = useState("")

  const filteredPayrollTypes = payrollTypes.filter(type =>
    type.payName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddPayType = () => {
    if (newPayType.trim()) {
      const newId = Math.max(...payrollTypes.map(p => p.id)) + 1
      setPayrollTypes([...payrollTypes, { id: newId, payName: newPayType.trim() }])
      setNewPayType("")
    }
  }

  const handleDeletePayType = (id) => {
    setPayrollTypes(payrollTypes.filter(type => type.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Employee</p>
                  <p className="text-3xl font-bold">03</p>
                </div>
                <div className="opacity-20">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="mt-2 text-white hover:bg-white/20">
                More info →
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Today Working</p>
                  <p className="text-3xl font-bold">02</p>
                </div>
                <div className="opacity-20">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="mt-2 text-white hover:bg-white/20">
                More info →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Search and Add Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Payroll Type Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Pay Type:"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
                <Button variant="secondary" className="bg-white text-teal-600 hover:bg-white/90">
                  SEARCH
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Add New Payroll Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Pay Type Name:"
                  value={newPayType}
                  onChange={(e) => setNewPayType(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
                <Button 
                  onClick={handleAddPayType}
                  variant="secondary" 
                  className="bg-white text-emerald-600 hover:bg-white/90"
                >
                  ADD
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payroll Type Master Table */}
        <Card className="bg-card border shadow-elegant">
          <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-primary/10">
            <CardTitle className="text-primary font-bold">Payroll Type Name Master</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5 hover:bg-primary/10">
                  <TableHead className="text-primary font-semibold">SL NO</TableHead>
                  <TableHead className="text-primary font-semibold">Pay Name</TableHead>
                  <TableHead className="text-primary font-semibold text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayrollTypes.map((type, index) => (
                  <TableRow key={type.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{type.payName}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="h-8 w-8 p-0 bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDeletePayType(type.id)}
                          className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600 text-white border-red-500"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}