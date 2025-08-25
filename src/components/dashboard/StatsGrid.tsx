import { PayrollCard } from "./PayrollCard";
import { ChartCard } from "./ChartCard";
import { SummaryWidget } from "./SummaryWidget";

const payrollData = [
  { title: "PAYROLL - PSA", period: "Payroll Period : Jan 2021", pending: 52, complete: 112, variant: "primary" as const },
  { title: "PAYROLL - GLS", period: "Payroll Period : Jan 2021", pending: 22, complete: 30, variant: "secondary" as const },
  { title: "PAYROLL - DKSH", period: "Payroll Period : Jan 2021", pending: 15, complete: 10, variant: "success" as const },
  { title: "PAYROLL - LSH", period: "Payroll Period : Jan 2021", pending: 5, complete: 10, variant: "warning" as const },
  { title: "PAYROLL - YRI", period: "Payroll Period : Jan 2021", pending: 30, complete: 20, variant: "primary" as const },
  { title: "PAYROLL - VMO", period: "Payroll Period : Jan 2021", pending: 52, complete: 85, variant: "destructive" as const },
  { title: "PAYROLL - MEDI", period: "Payroll Period : Jan 2021", pending: 15, complete: 30, variant: "success" as const },
  { title: "PAYROLL - FFDC", period: "Payroll Period : Jan 2021", pending: 60, complete: 90, variant: "warning" as const }
];

const summaryWidgets = [
  { title: "Total Employees", value: "1,247", change: "+12%", trend: "up" as const, icon: "users" as const, color: "primary" as const },
  { title: "Pending Leaves", value: "45", change: "-8%", trend: "down" as const, icon: "calendar" as const, color: "warning" as const },
  { title: "Active Employees", value: "1,156", change: "+3%", trend: "up" as const, icon: "user-check" as const, color: "success" as const },
  { title: "Approval Complete", value: "112", change: "+15%", trend: "up" as const, icon: "check-circle" as const, color: "success" as const },
  { title: "New Joiners (Month)", value: "28", change: "+45%", trend: "up" as const, icon: "user-plus" as const, color: "primary" as const },
  { title: "Pending Approvals", value: "23", change: "-12%", trend: "down" as const, icon: "clock" as const, color: "warning" as const },
  { title: "Payroll Processed", value: "1,089", change: "+2%", trend: "up" as const, icon: "dollar-sign" as const, color: "success" as const },
  { title: "Training Sessions", value: "16", change: "+25%", trend: "up" as const, icon: "graduation-cap" as const, color: "primary" as const }
];

const chartData = {
  payroll: [
    { name: "PSA", value: 164, color: "hsl(210 100% 56%)" },
    { name: "GLS", value: 52, color: "hsl(168 100% 50%)" },
    { name: "DKSH", value: 25, color: "hsl(142 70% 45%)" },
    { name: "LSH", value: 15, color: "hsl(45 90% 55%)" },
    { name: "YRI", value: 50, color: "hsl(0 70% 55%)" },
    { name: "VMO", value: 137, color: "hsl(280 100% 50%)" },
    { name: "MEDI", value: 45, color: "hsl(30 100% 50%)" },
    { name: "FFDC", value: 150, color: "hsl(200 100% 50%)" }
  ],
  compliance: [
    { name: "PENDING", value: 145, color: "hsl(168 100% 50%)" },
    { name: "REJECTED", value: 23, color: "hsl(0 70% 55%)" },
    { name: "APPROVED", value: 275, color: "hsl(210 100% 56%)" }
  ],
  claims: [
    { name: "PENDING", value: 89, color: "hsl(210 100% 56%)" },
    { name: "REJECTED", value: 12, color: "hsl(0 70% 55%)" },
    { name: "APPROVED", value: 234, color: "hsl(168 100% 50%)" }
  ],
  leaves: [
    { name: "PENDING", value: 45, color: "hsl(210 100% 56%)" },
    { name: "REJECTED", value: 8, color: "hsl(0 70% 55%)" },
    { name: "APPROVED", value: 167, color: "hsl(168 100% 50%)" }
  ]
};

export function StatsGrid() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Summary Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryWidgets.map((widget, index) => (
          <SummaryWidget
            key={index}
            title={widget.title}
            value={widget.value}
            change={widget.change}
            trend={widget.trend}
            icon={widget.icon}
            color={widget.color}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          />
        ))}
      </div>

      {/* Chart Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
        <ChartCard title="PAYROLL" data={chartData.payroll} />
        <ChartCard title="COMPLIANCE" data={chartData.compliance} />
        <ChartCard title="CLAIMS" data={chartData.claims} />
        <ChartCard title="LEAVES" data={chartData.leaves} />
      </div>

      {/* Payroll Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
        {payrollData.map((card, index) => (
          <PayrollCard
            key={index}
            title={card.title}
            period={card.period}
            pending={card.pending}
            complete={card.complete}
            variant={card.variant}
            className="animate-scale-in relative overflow-visible"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
