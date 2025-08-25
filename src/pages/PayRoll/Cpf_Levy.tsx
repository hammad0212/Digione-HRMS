import { FC } from "react";
import { Pencil, Trash2 } from "lucide-react";

interface CPFRow {
  age: string;
  employer: number;
  employee: number;
  total: number;
}

interface LevyRow {
  nationality: string;
  amount: number;
}

const Cpf_Levy: FC = () => {
  const cpfData: CPFRow[] = [
    { age: "55 and below", employer: 17, employee: 20, total: 37 },
    { age: "Above 55 to 60", employer: 13, employee: 13, total: 26 },
    { age: "Above 60 to 65", employer: 9, employee: 7.5, total: 16.5 },
    { age: "Above 65", employer: 7.5, employee: 5, total: 12.5 },
  ];

  const levyData: LevyRow[] = [
    { nationality: "India", amount: 750 },
    { nationality: "China", amount: 700 },
    { nationality: "Sri Lanka", amount: 800 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* CPF Table */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <h2 className="text-base md:text-lg font-bold mb-3">CPF</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th colSpan={5} className="px-3 md:px-4 py-2 text-left">
                  Contribution Rate From 1 Jan 2016 <br />
                  (For Monthly Wage &gt; $750)
                </th>
              </tr>
              <tr className="bg-blue-500 text-white">
                <th className="px-3 md:px-4 py-2 text-left">Employee's Age (Years)</th>
                <th className="px-3 md:px-4 py-2 text-left">By Employer (% Of Wage)</th>
                <th className="px-3 md:px-4 py-2 text-left">By Employee (% Of Wage)</th>
                <th className="px-3 md:px-4 py-2 text-left">Total (% Of Wage)</th>
                <th className="px-3 md:px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cpfData.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 md:px-4 py-2">{row.age}</td>
                  <td className="px-3 md:px-4 py-2">{row.employer}</td>
                  <td className="px-3 md:px-4 py-2">{row.employee}</td>
                  <td className="px-3 md:px-4 py-2">{row.total}</td>
                  <td className="px-3 md:px-4 py-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
                        <Pencil size={14} />
                      </button>
                      <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Levy Table */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <h2 className="text-base md:text-lg font-bold mb-3">Levy</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th colSpan={3} className="px-3 md:px-4 py-2 text-left">
                  Contribution Rate From 1 Jan 2016
                </th>
              </tr>
              <tr className="bg-blue-500 text-white">
                <th className="px-3 md:px-4 py-2 text-left">Nationality</th>
                <th className="px-3 md:px-4 py-2 text-left">Levy Amount ($)</th>
                <th className="px-3 md:px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {levyData.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 md:px-4 py-2">{row.nationality}</td>
                  <td className="px-3 md:px-4 py-2">{row.amount}</td>
                  <td className="px-3 md:px-4 py-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
                        <Pencil size={14} />
                      </button>
                      <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cpf_Levy;
