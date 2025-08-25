import { useState } from "react";
import {
  FaUser,
  FaDollarSign,
  FaCalendarAlt,
  FaTimesCircle,
  FaClock,
  FaSignOutAlt,
  FaStar,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { Upload } from "lucide-react";

const EmpPaySetup: React.FC = () => {
  const tabs: string[] = [
    "Particulars",
    "PayrollSetup",
    "Courses Details",
    "Pass Details",
    "SIR Check",

    "Notices",
  ];

  const [activeTab, setActiveTab] = useState("Particulars");

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="space-y-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold">3</h2>
            <p>Total Employee</p>
          </div>
          <div className="bg-green-400 text-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold">2</h2>
            <p>Today Working</p>
          </div>
          <div className="bg-orange-400 text-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold">1</h2>
            <p>Today MC</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold">2</h2>
            <p>Contractor</p>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-teal-400 p-4 rounded-lg mb-6">
          <form className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="text-white whitespace-nowrap">
              Candidate Name:
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="p-2 rounded border w-full sm:w-auto"
            />
            <input
              type="date"
              className="p-2 rounded border w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Employee Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Employee Table */}
          <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Employee Details</h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                + Add New
              </button>
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2">SLNO</th>
                  <th className="p-2">Emp Name</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    name: "ASIK",
                    role: "Web Developer",
                    dept: "28/08/2017",
                  },
                  {
                    id: 2,
                    name: "Kannan",
                    role: "Software Developer",
                    dept: "28/08/2014",
                  },
                  {
                    id: 3,
                    name: "Sidhik",
                    role: "Accounts",
                    dept: "28/08/2018",
                  },
                ].map(
                  (emp: {
                    id: number;
                    name: string;
                    role: string;
                    dept: string;
                  }) => (
                    <tr key={emp.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{emp.id}</td>
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.role}</td>
                      <td className="p-2">{emp.dept}</td>
                      <td className="p-2 flex gap-2 justify-center">
                        <button className="bg-blue-500 p-2 rounded text-white">
                          <FaUser />
                        </button>
                        <button className="bg-yellow-500 p-2 rounded text-white">
                          <FaDollarSign />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Right - Employee Detail Panel */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg mb-4">Employee Details</h3>

            {/* Status Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-red-500 text-white p-3 rounded text-center">
                <FaCalendarAlt className="mx-auto mb-1" />
                <p>Leave</p>
                <span className="font-bold">04</span>
              </div>
              <div className="bg-red-400 text-white p-3 rounded text-center">
                <FaTimesCircle className="mx-auto mb-1" />
                <p>Leave Cancellation</p>
                <span className="font-bold">00</span>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded text-center">
                <FaClock className="mx-auto mb-1" />
                <p>Attendance</p>
                <span className="font-bold">02</span>
              </div>
              <div className="bg-green-500 text-white p-3 rounded text-center">
                <FaSignOutAlt className="mx-auto mb-1" />
                <p>Outdoor</p>
                <span className="font-bold">00</span>
              </div>
              <div className="bg-yellow-500 text-white p-3 rounded text-center">
                <p>Overtime</p>
                <span className="font-bold">00</span>
              </div>
              <div className="bg-orange-500 text-white p-3 rounded text-center">
                <p>My Grievance</p>
                <span className="font-bold">00</span>
              </div>
            </div>

            {/* Tabs & Content */}
            <div className="w-full">
              {/* Tabs */}
              <div className="flex border-b mb-4 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 whitespace-nowrap border-b-2 font-medium transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full overflow-y-auto pt-4"
                  >
                    {activeTab === "Particulars" && (
                      <div className="grid grid-cols-2 gap-4">
                        {/* Application Info */}
                        <div>
                          <label className="font-medium">Application No.</label>
                          <input
                            type="text"
                            // value={selectedCandidate.applicationNo}
                            readOnly
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Date/Time</label>
                          <input
                            type="text"
                            placeholder="MM/DD/YYYY"
                            className="w-full p-2 border rounded"
                          />
                        </div>

                        <div>
                          <label className="font-medium">
                            Position Applied
                          </label>
                          <input
                            type="text"
                            placeholder="Enter position"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Department</label>
                          <input
                            type="text"
                            // value={selectedCandidate.department}
                            readOnly
                            className="w-full p-2 border rounded"
                          />
                        </div>

                        {/* Full Name / Nationality / NRIC */}
                        <div>
                          <label className="font-medium">Full Name</label>
                          <input
                            type="text"
                            // value={selectedCandidate.name}
                            readOnly
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Nationality</label>
                          <select className="w-full p-2 border rounded">
                            <option>Singapore</option>
                            <option>India</option>
                            <option>Malaysia</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-medium">NRIC / FIN</label>
                          <input
                            type="text"
                            placeholder="G*******Q"
                            className="w-full p-2 border rounded"
                          />
                        </div>

                        {/* DOB, Age, Gender */}
                        <div>
                          <label className="font-medium">Date of Birth</label>
                          <input
                            type="date"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Age</label>
                          <input
                            type="number"
                            placeholder="Age"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Gender</label>
                          <select className="w-full p-2 border rounded">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-medium">Race</label>
                          <input
                            type="text"
                            placeholder="Race"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Religion</label>
                          <select className="w-full p-2 border rounded">
                            <option>Muslim</option>
                            <option>Hindu</option>
                            <option>Christian</option>
                          </select>
                        </div>

                        {/* Address & Contact */}
                        <div className="col-span-2">
                          <label className="font-medium">
                            Residence Address
                          </label>
                          <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Postal Code</label>
                          <input
                            type="text"
                            placeholder="Postal Code"
                            className="w-full p-2 border rounded"
                          />
                        </div>

                        <div>
                          <label className="font-medium">Email ID</label>
                          <input
                            type="email"
                            // value={selectedCandidate.email}
                            readOnly
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Home Telephone</label>
                          <input
                            type="text"
                            placeholder="+65 98765432"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Mobile</label>
                          <input
                            type="text"
                            // value={selectedCandidate.mobile}
                            readOnly
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                    )}
                    {activeTab === "PayrollSetup" && (
                      <div className="overflow-x-auto">
                        {/* Employee Info Header */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium">
                              Employee No.
                            </label>
                            <input
                              type="text"
                              value="1001"
                              readOnly
                              className="w-full border rounded p-2 bg-gray-100"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium">
                              Employee Name
                            </label>
                            <input
                              type="text"
                              value="Kannan"
                              readOnly
                              className="w-full border rounded p-2 bg-gray-100"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium">
                              Department
                            </label>
                            <input
                              type="text"
                              value="Lashing (PSA)"
                              readOnly
                              className="w-full border rounded p-2 bg-gray-100"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium">
                              Designation/Role
                            </label>
                            <input
                              type="text"
                              value="LW"
                              readOnly
                              className="w-full border rounded p-2 bg-gray-100"
                            />
                          </div>
                        </div>

                        {/* Payroll Table */}
                        <table className="min-w-full border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-blue-500 text-white">
                              <th className="p-2 border">
                                Singapore Pay Type Name
                              </th>
                              <th className="p-2 border">Pay Rate</th>
                              <th className="p-2 border">Boxs/Trips (Min)</th>
                              <th className="p-2 border">Boxs/Trips (Max)</th>
                              <th className="p-2 border">Work Hours</th>
                              <th className="p-2 border">
                                Effective From (Mnts)
                              </th>
                              <th className="p-2 border">Payroll Start Date</th>
                              <th className="p-2 border">Select</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              "Daily Basic Salary",
                              "Overtime Pay",
                              "Daily Meal Incentive",
                              "Daily Transport Incentive",
                              "Sunday Incentive",
                              "PH Incentive",
                              "KPI Incentive",
                              "Performance Incentive",
                            ].map((payType, index) => (
                              <tr
                                key={index}
                                className="border-t hover:bg-gray-50"
                              >
                                <td className="p-2 border font-medium">
                                  {payType}
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="text"
                                    className="w-full border rounded p-1"
                                    placeholder="Enter value"
                                  />
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="text"
                                    className="w-full border rounded p-1"
                                    placeholder="Enter value"
                                  />
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="text"
                                    className="w-full border rounded p-1"
                                    placeholder="Enter value"
                                  />
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="text"
                                    className="w-full border rounded p-1"
                                    placeholder="Enter value"
                                  />
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="text"
                                    className="w-full border rounded p-1"
                                    placeholder="Enter value"
                                  />
                                </td>
                                <td className="p-2 border">
                                  <input
                                    type="date"
                                    className="w-full border rounded p-1"
                                  />
                                </td>
                                <td className="p-2 border text-center">
                                  <input type="checkbox" className="w-4 h-4" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {activeTab === "Courses Details" && (
                      <div className="p-6 bg-gray-50 min-h-screen">
                        {/* Form Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 items-end">
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Course Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Course"
                              className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Course Apply Date
                            </label>
                            <input
                              type="date"
                              className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Course Starting Date
                            </label>
                            <input
                              type="date"
                              className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Course Ending Date
                            </label>
                            <input
                              type="date"
                              className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex gap-4 mb-6 justify-end">
                          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition">
                            +
                          </button>
                          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition">
                            ⟳
                          </button>
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-auto rounded-lg shadow">
                          <table className="min-w-full border border-gray-200 bg-white">
                            <thead>
                              <tr className="bg-blue-500 text-white text-left">
                                <th className="p-3 border">Course Name</th>
                                <th className="p-3 border">
                                  Course Apply Date
                                </th>
                                <th className="p-3 border">
                                  Course Starting Date
                                </th>
                                <th className="p-3 border">
                                  Course Ending Date
                                </th>
                                <th className="p-3 border text-center">
                                  Status
                                </th>
                                <th className="p-3 border text-center">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t hover:bg-gray-50 transition">
                                <td className="p-3 border">Forklift</td>
                                <td className="p-3 border">12/05/2019</td>
                                <td className="p-3 border">18/05/2019</td>
                                <td className="p-3 border">18/06/2019</td>
                                <td className="p-3 border text-center">
                                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    Pass
                                  </span>
                                </td>
                                <td className="p-3 border text-center">
                                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition">
                                    ✎
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    {activeTab === "Pass Details" && (
                      <div className="p-4 space-y-6">
                        {/* ---------------- Pass Entry Form ---------------- */}
                        <div className="grid grid-cols-4 gap-4 items-end">
                          <div>
                            <label className="block mb-1  ">Type of Pass</label>
                            <select className="border p-2 w-full rounded">
                              <option>Passport</option>
                              <option>India Driving License</option>
                              <option>Singapore Driving License</option>
                              <option>Bigfoot HQ</option>
                              <option>GLS</option>
                            </select>
                          </div>

                          <div>
                            <label className="block mb-1">Issued Date</label>
                            <input
                              type="date"
                              className="border p-2 w-full rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1">Expiry Date</label>
                            <input
                              type="date"
                              className="border p-2 w-full rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1">Issued By</label>
                            <input
                              type="text"
                              className="border p-2 w-full rounded"
                            />
                          </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                          <button className="bg-green-500 text-white px-3 py-2 rounded">
                            ＋
                          </button>
                          <button className="bg-yellow-500 text-white px-3 py-2 rounded">
                            ⟳
                          </button>
                        </div>

                        {/* ---------------- Pass Table ---------------- */}
                        <table className="w-full border-collapse border border-gray-300 mt-4">
                          <thead>
                            <tr className="bg-blue-500 text-white">
                              <th className="border p-2">Pass Name</th>
                              <th className="border p-2">Apply Date</th>
                              <th className="border p-2">Issued Date</th>
                              <th className="border p-2">Expiry Date</th>
                              <th className="border p-2">Issued By</th>
                              <th className="border p-2">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Passport</td>
                              <td className="border p-2">12/05/2019</td>
                              <td className="border p-2">18/05/2019</td>
                              <td className="border p-2">18/06/2019</td>
                              <td className="border p-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded">
                                  Pass
                                </span>
                              </td>
                              <td className="border p-2 flex gap-2 justify-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                  ＋
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                  🗑
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                  ✎
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">
                                India Driving License
                              </td>
                              <td className="border p-2">12/05/2019</td>
                              <td className="border p-2">18/05/2019</td>
                              <td className="border p-2">18/06/2019</td>
                              <td className="border p-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded">
                                  Pass
                                </span>
                              </td>
                              <td className="border p-2 flex gap-2 justify-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                  ＋
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                  🗑
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                  ✎
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">
                                Singapore Driving License
                              </td>
                              <td className="border p-2">12/05/2019</td>
                              <td className="border p-2">18/05/2019</td>
                              <td className="border p-2">18/06/2019</td>
                              <td className="border p-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded">
                                  Pass
                                </span>
                              </td>
                              <td className="border p-2 flex gap-2 justify-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                  ＋
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                  🗑
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                  ✎
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">Bigfoot HQ</td>
                              <td className="border p-2">12/05/2019</td>
                              <td className="border p-2">18/05/2019</td>
                              <td className="border p-2">18/06/2019</td>
                              <td className="border p-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded">
                                  Pass
                                </span>
                              </td>
                              <td className="border p-2 flex gap-2 justify-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                  ＋
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                  🗑
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                  ✎
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">GLS</td>
                              <td className="border p-2">12/05/2019</td>
                              <td className="border p-2">18/05/2019</td>
                              <td className="border p-2">18/06/2019</td>
                              <td className="border p-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded">
                                  Pass
                                </span>
                              </td>
                              <td className="border p-2 flex gap-2 justify-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                  ＋
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                  🗑
                                </button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                  ✎
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    {activeTab === "SIR Check" && <></>}
                    {activeTab === "Notices" && (
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Notices for </h2>

                        {/* Form Section */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                          {/* Document Type */}
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Document Type
                            </label>
                            <div className="flex gap-2">
                              <select className="border border-gray-300 rounded px-1 py-2 w-full focus:ring-2 focus:ring-blue-400">
                                <option>Change of Personal</option>
                                <option>Employment Cessation</option>
                                <option>Faulty Pass Replacement</option>
                              </select>
                              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                +
                              </button>
                            </div>
                          </div>

                          {/* Date */}
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Date
                            </label>
                            <input
                              type="date"
                              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          {/* File Upload */}
                          <div className="max-w-[200px]">
                            <label className="block text-sm font-medium mb-1 font-bold">
                              Upload Document
                            </label>
                            <div className="border-2 border-dashed border-gray-400 rounded-md p-3 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition w-full">
                              <input
                                type="file"
                                id="fileUpload"
                                className="hidden"
                              />
                              <label
                                htmlFor="fileUpload"
                                className="flex flex-col items-center justify-center cursor-pointer"
                              >
                                <Upload className="h-6 w-6 text-blue-500 mb-1" />
                                <span className="text-xs text-gray-600">
                                  Click to upload
                                </span>
                                <span className="text-[10px] text-gray-400">
                                  PDF, PNG, JPG (max 5MB)
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-300 rounded-lg shadow-sm">
                            <thead>
                              <tr className="bg-blue-600 text-white">
                                <th className="border border-gray-300 px-4 py-3 text-left text-sm">
                                  Document Name
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-center text-sm">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                "Change of Personal Data Form",
                                "Employment Cessation Clearance",
                                "Faulty Pass Replacement",
                              ].map((doc, idx) => (
                                <tr
                                  key={idx}
                                  className="hover:bg-gray-50 transition-colors duration-150"
                                >
                                  <td className="border border-gray-300 px-4 py-3 text-sm">
                                    {doc}
                                  </td>
                                  <td className="border border-gray-300 px-4 py-3 text-center flex justify-center gap-3">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                      📄
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                      🗑
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpPaySetup;
