import { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import "./Booking.css";

const Booking: FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [showForm, setShowForm] = useState(false);

  const handleDateChange = (newDate: Date | Date[]) => {
    setDate(newDate);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Section - Calendar Full Box */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center">📅 Event Calendar</h2>

          {/* Calendar takes full height inside box */}
          <div className="flex-1 flex items-center justify-center">
  <Calendar
    onChange={handleDateChange}
    // value={date}
    selectRange={false}
    className="custom-calendar w-full h-full"
  />
</div>

          <p className="mt-4 text-center text-gray-700 text-sm">
            Selected Date:{" "}
            <span className="font-semibold">
              {Array.isArray(date)
                ? `${date[0].toDateString()} - ${date[1].toDateString()}`
                : date.toDateString()}
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-96 bg-white shadow-lg p-6 overflow-y-auto">
        {/* Stats - Always Visible */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-400 text-white rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">45</span>
            <span>Total Events</span>
            <button className="mt-2 px-3 py-1 bg-white text-green-600 rounded text-xs hover:bg-gray-100">
              More info →
            </button>
          </div>
          <div className="bg-green-400 text-white rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold">7</span>
            <span>Today Events</span>
            <button className="mt-2 px-3 py-1 bg-white text-green-600 rounded text-xs hover:bg-gray-100">
              More info →
            </button>
          </div>
        </div>

        {/* Add New Event Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="event-form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="font-semibold text-lg mb-3">Add New Event</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">Starts at</label>
                    <input
                      type="time"
                      className="w-full border rounded px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Ends at</label>
                    <input
                      type="time"
                      className="w-full border rounded px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">
                      Default Visibility
                    </label>
                    <select className="w-full border rounded px-3 py-2 text-sm">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Event Color</label>
                    <input type="color" className="w-full h-10 rounded" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Location</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="Enter Location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Remarks</label>
                  <textarea
                    className="w-full border rounded px-3 py-2 text-sm"
                    rows={3}
                    placeholder="Enter Remarks"
                  />
                </div>
                <button className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600">
                  Save Event
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
