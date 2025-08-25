import { Upload } from "lucide-react";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";


import { motion, AnimatePresence } from "framer-motion";
interface Employe {
  id: number;
  name: string;
  role: string;
  department: string;
  date: string;
  applicationNo: string;
   email?: string;
  mobile?: string;
   profilePic?: string;
  
}
const Course: React.FC = () => {
  const tabs = [
    "Particulars",
    "Education/Employment",
    "Course Details",
  ];
  const [selectedCandidate, setSelectedCandidate] = useState<Employe | null>(
      null
    );
  const [activeTab, setActiveTab] = useState("Particulars");
  const [Employe] = useState<Employe[]>([
      {
        id: 1,
        name: "ASIK",
        role: "Web Developer",
        department: "IT",
        date: "28/08/2017",
        applicationNo: "APP001",
      },
      {
        id: 2,
        name: "Kannan",
        role: "Software Developer",
        department: "HR",
        date: "28/08/2014",
        applicationNo: "APP002",
      },
      {
        id: 3,
        name: "Sidhik",
        role: "Accounts",
        department: "Finance",
        date: "28/08/2018",
        applicationNo: "APP003",
      },
    ]);


  

  return (
     <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
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
      {/* ✅ Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">3</h2>
          <p>Total Employee</p>
        </div>
        <div className="bg-green-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">2</h2>
          <p>Today Working</p>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">1</h2>
          <p>Today MC</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">2</h2>
          <p>Contractor</p>
        </div>
      </div>

      {/* ✅ Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ✅ Left Side: Employee List */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <h2 className="font-bold text-lg">Termination Employee Lists</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 w-full sm:w-auto justify-center">
              <FaUserPlus /> Add New
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="px-3 py-2 border">SLNO</th>
                  <th className="px-3 py-2 border">Candidate Name</th>
                  <th className="px-3 py-2 border">Date</th>
                  <th className="px-3 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {Employe.map((c, i) => (
                  <tr key={c.id} className="border text-center">
                    <td className="px-3 py-2 border">{i + 1}</td>
                    <td className="px-3 py-2 border">{c.name}</td>
                    <td className="px-3 py-2 border">{c.date}</td>
                    <td className="px-3 py-2 border">
                      <button
                        onClick={() => setSelectedCandidate(c)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm sm:text-base"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Right Side: Candidate Details */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Candidate Details</h3>

          {!selectedCandidate ? (
            <p className="text-gray-500">👈 Please select a candidate</p>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex border-b mb-4 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 -mb-px border-b-2 font-medium transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Candidate Info */}
              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-[400px] overflow-y-auto scrollbar-hide pt-4"
                  >
{activeTab === "Particulars" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Profile Photo */}
   {/*  */}


    {/* Application Info */}
    <div>
      <label className="font-medium">Application No.</label>
      <input
        type="text"
        value={selectedCandidate.applicationNo}
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
      <label className="font-medium">Position Applied</label>
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
        value={selectedCandidate.department}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>

    {/* Full Name / Nationality / NRIC */}
    <div>
      <label className="font-medium">Full Name</label>
      <input
        type="text"
        value={selectedCandidate.name}
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
      <input type="date" className="w-full p-2 border rounded" />
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
    <div className="col-span-1 md:col-span-2">
      <label className="font-medium">Residence Address</label>
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
        value={selectedCandidate.email}
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
        value={selectedCandidate.mobile}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
)}


{activeTab === "Education/Employment" && (
  <div className="p-4 space-y-6">
    {/* ---------------- Education Section ---------------- */}
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Course Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">From</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Organisation Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">To</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1">Qualification Obtained</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          +
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          ⟳
        </button>
      </div>
    </div>

    {/* Education Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white text-sm md:text-base">
            <th className="border border-gray-300 p-2">Course Name</th>
            <th className="border border-gray-300 p-2">Organisation Name</th>
            <th className="border border-gray-300 p-2">From</th>
            <th className="border border-gray-300 p-2">To</th>
            <th className="border border-gray-300 p-2">Qualification Obtained</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key={row}>
              <td className="border p-2">Secondary / SPM</td>
              <td className="border p-2">Jurong Secondary School, Singapore</td>
              <td className="border p-2">1995</td>
              <td className="border p-2">2000</td>
              <td className="border p-2">Secondary level</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  ✎
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ---------------- Employment Section ---------------- */}
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Do you intend to study further?</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="studyFurther" /> Yes
            </label>
            <label>
              <input type="radio" name="studyFurther" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-1">Specify</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Computer Literacy</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="computerLiteracy" /> Yes
            </label>
            <label>
              <input type="radio" name="computerLiteracy" /> No
            </label>
          </div>
        </div>
      </div>

      <h3 className="font-semibold underline mb-2">Employment History</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Employer Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Start Date</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Job Position</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Last Salary</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Reason for Leaving</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">⟳</button>
      </div>
    </div>

    {/* Employment Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-blue-500 text-white text-sm md:text-base">
            <th className="border p-2">Employer Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Job Position</th>
            <th className="border p-2">Last Salary</th>
            <th className="border p-2">Reason For Leaving</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key={row}>
              <td className="border p-2">ACBC Logistics Pte Ltd Singapore</td>
              <td className="border p-2">01/05/2017</td>
              <td className="border p-2">31/12/2020</td>
              <td className="border p-2">Logistics Supervisor</td>
              <td className="border p-2">$4200</td>
              <td className="border p-2">Career growth</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  ✎
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ---------------- Additional Section ---------------- */}
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Current / Last Gross Salary($)</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Salary Expected($)</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Spoken Language's</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Written Language's</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1">If selected, When can you start</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>
    </div>
  </div>
)}





{activeTab === "Course Details" && (
  <div className="p-4 space-y-6">
  {/* ---------------- Pass Entry Form ---------------- */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
    <div>
      <label className="block mb-1 text-sm font-medium">Type of Pass</label>
      <select className="border p-2 w-full rounded">
        <option>Passport</option>
        <option>India Driving License</option>
        <option>Singapore Driving License</option>
        <option>Bigfoot HQ</option>
        <option>GLS</option>
      </select>
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">Issued Date</label>
      <input
        type="date"
        className="border p-2 w-full rounded"
      />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">Expiry Date</label>
      <input
        type="date"
        className="border p-2 w-full rounded"
      />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">Issued By</label>
      <input
        type="text"
        className="border p-2 w-full rounded"
      />
    </div>
  </div>

  <div className="flex gap-2 mt-3 flex-wrap">
    <button className="bg-green-500 text-white px-3 py-2 rounded text-sm sm:text-base">
      ＋
    </button>
    <button className="bg-yellow-500 text-white px-3 py-2 rounded text-sm sm:text-base">
      ⟳
    </button>
  </div>

  {/* ---------------- Pass Table ---------------- */}
  <div className="overflow-x-auto mt-4">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-blue-500 text-white text-sm sm:text-base">
          <th className="border p-2">Pass Name</th>
          <th className="border p-2">Apply Date</th>
          <th className="border p-2">Issued Date</th>
          <th className="border p-2">Expiry Date</th>
          <th className="border p-2">Issued By</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {[
          "Passport",
          "India Driving License",
          "Singapore Driving License",
          "Bigfoot HQ",
          "GLS",
        ].map((item, idx) => (
          <tr key={idx} className="text-sm sm:text-base">
            <td className="border p-2">{item}</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                ✎
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
            </>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Course;



//  <div className="col-span-1 md:col-span-2 flex flex-col items-center mb-4">
//   <div className="relative">
//     {/* Profile Image */}
//     <img
//       src={selectedCandidate.profilePic || "https://via.placeholder.com/120"}
//       alt="Profile"
//       className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-blue-400 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
//       onClick={() => document.getElementById("profileUpload")?.click()}
//     />

//     {/* Hidden File Input */}
//     <input
//       type="file"
//       id="profileUpload"
//       accept="image/*"
//       className="hidden"
//       onChange={(e) => {
//         const file = e.target.files?.[0];
//         if (file) {
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             setSelectedCandidate((prev: any) => ({
//               ...prev,
//               profilePic: reader.result,
//             }));
//           };
//           reader.readAsDataURL(file);
//         }
//       }}
//     />
//   </div>
//   <p className="text-gray-500 mt-2 text-xs md:text-sm">
//     Click on the image to upload
//   </p>
// </div>