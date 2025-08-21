import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface CreateJobProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateJob: React.FC<CreateJobProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState("jobDescription");
  const [jobTitle, setJobTitle] = useState("");
  const [occupation, setOccupation] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [employmentType, setEmploymentType] = useState<string>("");
  const [positionLevel, setPositionLevel] = useState<string>("");
  const [vacancies, setVacancies] = useState<number | "">("");
  const [jobFunction, setJobFunction] = useState<string>("");
  const [salaryMin, setSalaryMin] = useState<number | "">("");
  const [salaryMax, setSalaryMax] = useState<number | "">("");

  const handleNext = () => {
    if (activeStep === "jobDescription") setActiveStep("skills");
    else if (activeStep === "skills") setActiveStep("keyInformation");
    else if (activeStep === "keyInformation") setActiveStep("workplaceDetails");
    else if (activeStep === "workplaceDetails") setActiveStep("review");
  };

  const handlePrevious = () => {
    if (activeStep === "review") setActiveStep("workplaceDetails");
    else if (activeStep === "workplaceDetails") setActiveStep("keyInformation");
    else if (activeStep === "keyInformation") setActiveStep("skills");
    else if (activeStep === "skills") setActiveStep("jobDescription");
  };

  const handleSubmit = () => {
    console.log({
      jobTitle,
      occupation,
      description,
      skills,
      employmentType,
      positionLevel,
      vacancies,
      jobFunction,
      salaryMin,
      salaryMax,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-3xl rounded-lg p-6 relative shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Create Job Post</h2>

        {/* Tabs */}
        <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
            <TabsTrigger value="jobDescription">Job Description</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="keyInformation">Key Info</TabsTrigger>
            <TabsTrigger value="workplaceDetails">Workplace</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>

          {/* Step 1: Job Description */}
          <TabsContent value="jobDescription" className="mt-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-sm mb-1">Job Title</label>
                <p className="text-xs text-gray-500 mb-2">
                  Enter the job title to be displayed in the job post
                </p>
                <Input
                  placeholder="Enter Job Title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-1">Occupation</label>
                <p className="text-xs text-gray-500 mb-2">
                  Search for an occupation that fits the job title
                </p>
                <Input
                  placeholder="Search..."
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">
                Job Description & Requirements
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Write job description here..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {description.length}/20,000 characters
              </p>
            </div>
          </TabsContent>

          {/* Step 2: Skills */}
          <TabsContent value="skills" className="mt-4 space-y-6">
            <div>
              <label className="block font-semibold text-lg mb-2">Add Skills</label>
              <textarea
                value={skills.join(", ")}
                onChange={(e) => setSkills(e.target.value.split(","))}
                rows={5}
                className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="e.g., Communication, Teamwork, React, Node.js"
              />
              <p className="text-sm text-gray-500 mt-1">
                Add multiple skills separated by commas
              </p>
            </div>
          </TabsContent>

          {/* Step 3: Key Information */}
          <TabsContent value="keyInformation" className="mt-4 space-y-6">
            <div>
              <label className="block font-semibold text-sm mb-2">Employment Type</label>
              <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-2">Position Level</label>
              <select
                value={positionLevel}
                onChange={(e) => setPositionLevel(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Junior">Junior</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior">Senior</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-2">No. Vacancies</label>
              <input
                type="number"
                value={vacancies}
                onChange={(e) =>
                  setVacancies(e.target.value ? Number(e.target.value) : "")
                }
                className="w-full border rounded p-2"
                placeholder="Enter number of vacancies"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-2">Job Function</label>
              <textarea
                value={jobFunction}
                onChange={(e) => setJobFunction(e.target.value)}
                rows={4}
                className="w-full border rounded p-3"
                placeholder="Describe the job function..."
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-2">
                Gross Monthly Salary Range (SGD)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={salaryMin}
                  onChange={(e) =>
                    setSalaryMin(e.target.value ? Number(e.target.value) : "")
                  }
                  className="w-1/2 border rounded p-2"
                  placeholder="Min"
                />
                <input
                  type="number"
                  value={salaryMax}
                  onChange={(e) =>
                    setSalaryMax(e.target.value ? Number(e.target.value) : "")
                  }
                  className="w-1/2 border rounded p-2"
                  placeholder="Max"
                />
              </div>
            </div>
          </TabsContent>
{/* Step 4: Workplace */}
<TabsContent value="workplaceDetails" className="mt-4 space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Business Name */}
    <div>
      <label className="block font-semibold text-sm mb-2">Business Name</label>
      <Input
        placeholder="Enter Business Name"
        // Add state if needed e.g. value={businessName} onChange={(e)=>setBusinessName(e.target.value)}
      />
    </div>

    {/* Business Location */}
    <div>
      <label className="block font-semibold text-sm mb-2">Business Location</label>
      <select className="w-full border rounded p-2">
        <option value="">Select</option>
        <option value="Office">Office</option>
        <option value="Warehouse">Warehouse</option>
      </select>
    </div>

    {/* Street Address 1 */}
    <div>
      <label className="block font-semibold text-sm mb-2">Street Address 1</label>
      <Input placeholder="Enter Street Address" />
    </div>

    {/* Postal Code */}
    <div>
      <label className="block font-semibold text-sm mb-2">Postal Code</label>
      <Input placeholder="Enter Postal Code" />
    </div>

    {/* Country */}
    <div>
      <label className="block font-semibold text-sm mb-2">Country</label>
      <select className="w-full border rounded p-2">
        <option value="Singapore">Singapore</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>
  </div>
</TabsContent>


          {/* Step 5: Review */}
          <TabsContent value="review" className="mt-4 space-y-2">
            <h3 className="font-bold mb-2 text-lg">Review your Job Post</h3>
            <p>
              <strong>Title:</strong> {jobTitle}
            </p>
            <p>
              <strong>Occupation:</strong> {occupation}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Employment Type:</strong> {employmentType}
            </p>
            <p>
              <strong>Position Level:</strong> {positionLevel}
            </p>
            <p>
              <strong>Vacancies:</strong> {vacancies}
            </p>
            <p>
              <strong>Salary Range:</strong> {salaryMin} - {salaryMax}
            </p>
          </TabsContent>
        </Tabs>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={activeStep === "jobDescription"}
          >
            Previous
          </Button>
          {activeStep !== "review" ? (
            <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-600">
              Next
            </Button>
          ) : (
            <Button
              className="bg-green-500 text-white hover:bg-green-600"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
