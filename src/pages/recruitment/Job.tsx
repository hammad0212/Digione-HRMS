import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Download,
  Phone,
  Mail,
  Eye,
  ArrowLeft,
  Edit3,
  Share2,
} from "lucide-react";
import CreateJobModal from "./CreateJobModal";

const Job = () => {
  const [activeTab, setActiveTab] = useState("open");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [applicationStatus, setApplicationStatus] = useState("pending");
const [isModalOpen, setIsModalOpen] = useState(false);

  const jobPosts = [
    {
      id: 1,
      title: "SALES EXECUTIVE",
      postedDate: "February 19, 2016",
      currentDate: "16 Sept 2020",
      applicants: 2,
      candidates: [
        {
          name: "NG YITENG ADLEY",
          position: "Co Founder/Working Partner",
          company: "Barking Dogs Design Pte Ltd",
          appliedDate: "20 Sept 2020",
          phone: "9876 5432",
          email: "ng.yiteng@example.com",
          downloadDate: "16 Jul",
          skills: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
        },
        {
          name: "Syed",
          position: "Co Founder/Working Partner",
          appliedDate: "20 Sept 2020",
          downloadDate: "16 Jul",
          phone: "9123 4567",
          email: "syed@example.com",
          skills: ["React", "Tailwind", "Node.js"],
        },
      ],
    },
    {
      id: 2,
      title: "MARKETING MANAGER",
      postedDate: "March 10, 2018",
      currentDate: "20 Sept 2020",
      applicants: 1,
      candidates: [
        {
          name: "Sarah Lee",
          position: "Marketing Lead",
          company: "TechWorld Pte Ltd",
          appliedDate: "18 Sept 2020",
          phone: "9234 5678",
          email: "sarah.lee@example.com",
          downloadDate: "14 Jul",
          skills: ["SEO", "Content Writing", "Analytics"],
        },
      ],
    },
  ];

  const educationHistory = [
    {
      period: "June 2010 - April 2013",
      qualification: "Secondary / SPM",
      institution: "Jurong East, Singapore",
    },
    {
      period: "June 2013 - April 2015",
      qualification: "Diploma in System Admin",
      institution: "Jurong Secondary School, Singapore",
    },
  ];

  const workExperience = [
    {
      period: "May 2015 - July 2017",
      company: "ACBC Logistics Pte Ltd Singapore",
      position: "Logistics Supervisor",
    },
    {
      period: "Sept 2017 - Dec 2020",
      company: "ACBC Logistics Pte Ltd Singapore",
      position: "Logistics Supervisor",
    },
  ];

  const scheduleData = [
    {
      name: "Face to Face Interview",
      dateTime: "10/11/2020 09:30",
      organizer: "HR 1",
    },
    {
      name: "Orientation Class",
      dateTime: "10/11/2020 10:30",
      organizer: "HR 2",
    },
    {
      name: "VMO and Safety",
      dateTime: "10/11/2020 11:00",
      organizer: "HR 3",
    },
  ];
const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className="p-4 md:p-6 space-y-6 overflow-y-hidden">
      {/* HEADER: Tabs + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {["open", "close", "offer"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "secondary"}
              onClick={() => {
                setActiveTab(tab);
                setSelectedJob(null);
                setSelectedCandidate(null);
              }}
            >
              {tab === "open" && <>Open <Badge className="ml-2">3</Badge></>}
              {tab === "close" && <>Close <Badge className="ml-2">1</Badge></>}
              {tab === "offer" && <>Offer Letter <Badge className="ml-2">2</Badge></>}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Button className="bg-blue-500 text-white flex items-center gap-1"  onClick={handleOpenModal}>
            <Plus className="w-4 h-4"  /> CREATE JOB POST
            
          </Button>
          <CreateJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <Input placeholder="Job Title" className="w-full sm:w-44" />
          <Input type="date" placeholder="Job Post Date" className="w-full sm:w-44" />
          <Button className="bg-blue-500 text-white w-full sm:w-auto">SUBMIT</Button>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="lg:col-span-2 space-y-4">
          {!selectedJob ? (
            jobPosts.map((job) => (
              <Card
                key={job.id}
                className="bg-cyan-50 shadow cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                    <div>
                      <p className="text-sm text-gray-500">
                        Posted on {job.postedDate}
                      </p>
                      <CardTitle className="text-lg font-bold">
                        {job.title}
                      </CardTitle>
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        {job.applicants} Applicant{job.applicants > 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Edit3 className="w-5 h-5 text-orange-500 hover:text-orange-700 cursor-pointer" />
                      <Share2 className="w-5 h-5 text-blue-500 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          ) : (
            <Card className="bg-white shadow">
              <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <CardTitle className="text-lg font-bold">
                  Applicants for {selectedJob.title}
                </CardTitle>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSelectedJob(null);
                    setSelectedCandidate(null);
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Jobs
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedJob.candidates.map((candidate, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 last:border-b-0 gap-2"
                  >
                    <div>
                      <h4 className="font-semibold">{candidate.name}</h4>
                      <p className="text-sm text-gray-600">{candidate.position}</p>
                      <Badge className="mt-1">APPLICANT</Badge>
                      <p className="text-xs mt-1">
                        Applied on {candidate.appliedDate}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedCandidate(candidate)}
                      >
                        <Eye className="w-4 h-4 mr-2" /> View Details
                      </Button>
                      <p className="text-xs mt-1">
                        Downloaded {candidate.downloadDate}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-1">
          {selectedCandidate ? (
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-orange-500">
                      {selectedCandidate.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      {selectedCandidate.position}{" "}
                      {selectedCandidate.company && `, ${selectedCandidate.company}`}
                    </p>
                    <Badge className="mt-1">APPLICANT</Badge>
                    <p className="text-xs mt-1">
                      Applied on {selectedCandidate.appliedDate}
                    </p>
                  </div>
                  <Select
                    value={applicationStatus}
                    onValueChange={setApplicationStatus}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Application Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="selected">Selected</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="waiting">Waiting For Approval</SelectItem>
                      <SelectItem value="offered">Offered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  {selectedCandidate.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      {selectedCandidate.email}
                    </div>
                  )}
                  {selectedCandidate.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      {selectedCandidate.phone}
                    </div>
                  )}
                </div>

                <Button variant="outline" className="mt-4">
                  <Download className="w-4 h-4 mr-2" /> Get Resume
                </Button>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="flex gap-2 overflow-x-auto">
                    {["overview","skills","education","experience","appointment"].map((tab) => (
                      <TabsTrigger key={tab} value={tab} className="min-w-[110px] flex-1 text-center">
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="overview" className="mt-4">
                    <h4 className="font-semibold text-orange-500">{selectedCandidate.name}</h4>
                    <p>{selectedCandidate.position}</p>
                    <Badge className="mt-1">APPLICANT</Badge>
                    <p className="text-xs mt-1">Applied on {selectedCandidate.appliedDate}</p>
                  </TabsContent>

                  <TabsContent value="skills" className="mt-4">
                    {selectedCandidate.skills?.length ? (
                      <div className="flex gap-2 flex-wrap overflow-x-auto">
                        {selectedCandidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    ) : <p className="text-gray-500 text-sm">No skills available.</p>}
                  </TabsContent>

                  <TabsContent value="education" className="mt-4 space-y-3 overflow-x-auto">
                    {educationHistory.map((edu, i) => (
                      <div key={i}>
                        <p className="font-medium">{edu.period}</p>
                        <p>{edu.qualification}</p>
                        <p className="text-sm">{edu.institution}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="experience" className="mt-4 space-y-3">
                    {workExperience.map((work, i) => (
                      <div key={i}>
                        <p className="font-medium">{work.period}</p>
                        <p>{work.company}</p>
                        <p className="text-sm">{work.position}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="appointment" className="mt-4 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Schedule Name</TableHead>
                          <TableHead>Date / Time</TableHead>
                          <TableHead>Organizer</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {scheduleData.map((schedule, i) => (
                          <TableRow key={i}>
                            <TableCell>{schedule.name}</TableCell>
                            <TableCell>{schedule.dateTime}</TableCell>
                            <TableCell>{schedule.organizer}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="flex items-center justify-center h-full p-6 text-gray-500">
              Select an applicant to view details
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
