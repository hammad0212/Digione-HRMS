import React, { useState } from "react";

interface Template {
  name: string;
  file: File;
}

const Template_Master: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    { name: "Employment Cessation Clearance", file: null as any },
    { name: "Faulty Pass Replacement", file: null as any },
    { name: "Suspension Letter", file: null as any },
    { name: "Release Passport", file: null as any },
    { name: "Resigned Without Notice", file: null as any },
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [newTemplateFile, setNewTemplateFile] = useState<File | null>(null);

  const handleAddTemplate = () => {
    if (!newTemplateName || !newTemplateFile) {
      alert("Please enter a template name and select a PDF file.");
      return;
    }
    const newTemplate: Template = { name: newTemplateName, file: newTemplateFile };
    setTemplates([...templates, newTemplate]);
    setShowForm(false);
    setNewTemplateName("");
    setNewTemplateFile(null);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* -------- Left Side: Template List -------- */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full lg:w-2/5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Template <span className="font-bold">Lists</span>
            </h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
            >
              + ADD NEW
            </button>
          </div>

          {/* -------- Add New Template Form -------- */}
          {showForm && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <input
                type="text"
                placeholder="Document Type"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  if (e.target.files) setNewTemplateFile(e.target.files[0]);
                }}
                className="w-full mb-2"
              />
              <button
                onClick={handleAddTemplate}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Upload
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm">
                  <th className="border p-2 w-16">SL.NO</th>
                  <th className="border p-2">Document Template</th>
                  <th className="border p-2 w-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((template, index) => (
                  <tr key={index} className="text-gray-700 text-sm">
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2">{template.name}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => setSelectedTemplate(template)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      >
                        👁
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -------- Right Side: PDF Viewer -------- */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Template</h2>
          <div className="w-full h-[500px] border rounded-lg overflow-hidden">
            {selectedTemplate ? (
              selectedTemplate.file ? (
                <iframe
                  src={URL.createObjectURL(selectedTemplate.file)}
                  title="PDF Viewer"
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No PDF file uploaded for this template
                </div>
              )
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a template to preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template_Master;
