"use client";

import { useState } from "react";
import { User, Calendar, Clock, HeartPulse, Video, FileText, Check } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: string[];
}

const doctors: Doctor[] = [
  { id: "doc-1", name: "Dr. Sarah Jenkins", specialty: "Cardiology & Preventive Care", availability: ["09:00 AM", "11:30 AM", "02:00 PM"] },
  { id: "doc-2", name: "Dr. Marcus Chen", specialty: "General Medicine & Diagnostics", availability: ["10:00 AM", "01:30 PM", "04:00 PM"] },
  { id: "doc-3", name: "Dr. Elena Rostova", specialty: "Neurology & Cognitive Health", availability: ["08:30 AM", "11:00 AM", "03:30 PM"] },
  { id: "doc-4", name: "Dr. David Kojo", specialty: "Pediatrics & Family Wellness", availability: ["09:30 AM", "12:30 PM", "03:00 PM"] },
];

export default function BookingForm() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0].id);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const selectedDoctor = doctors.find((doc) => doc.id === selectedDoctorId) || doctors[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime || !selectedDate) return;

    // Generate random reference
    const ref = "OYL-MED-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setSelectedTime("");
    setSelectedDate("");
    setSymptoms("");
  };

  // Get next 5 dates for selection (excluding weekends or just simple list)
  const getNextDates = () => {
    const dates = [];
    const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
    
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        raw: d.toISOString().split("T")[0],
        formatted: d.toLocaleDateString("en-US", options),
      });
    }
    return dates;
  };

  const availableDates = getNextDates();

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-neutral-gray max-w-4xl mx-auto">
      {!bookingConfirmed ? (
        <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Doctor & Details Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-neutral-gray">
              <HeartPulse className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-secondary">Telehealth Consultation Scheduler</h3>
            </div>

            {/* Choose Practitioner */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                <User className="h-4 w-4 mr-1 text-primary" />
                Select Specialist
              </label>
              <select
                value={selectedDoctorId}
                onChange={(e) => {
                  setSelectedDoctorId(e.target.value);
                  setSelectedTime("");
                }}
                className="w-full bg-light-bg border border-neutral-gray/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary font-semibold"
              >
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} ({doc.specialty})
                  </option>
                ))}
              </select>
            </div>

            {/* Symptoms Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                <FileText className="h-4 w-4 mr-1 text-primary" />
                Brief Symptoms / Notes
              </label>
              <textarea
                placeholder="E.g., Routine checkup, chronic back pain, prescription renewal..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={3}
                className="w-full bg-light-bg border border-neutral-gray/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary placeholder:text-slate-400"
                required
              ></textarea>
            </div>
          </div>

          {/* Date & Time Selectors */}
          <div className="lg:col-span-5 bg-light-bg rounded-2xl p-6 border border-neutral-gray/50 flex flex-col justify-between space-y-6">
            
            {/* Dates Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-primary" />
                Available Dates
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                {availableDates.map((date) => (
                  <button
                    key={date.raw}
                    type="button"
                    onClick={() => setSelectedDate(date.raw)}
                    className={`py-2 px-1.5 rounded-xl text-center text-xs font-semibold border transition-all ${
                      selectedDate === date.raw
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-secondary border-neutral-gray hover:bg-neutral-gray/30"
                    }`}
                  >
                    {date.formatted}
                  </button>
                ))}
              </div>
            </div>

            {/* Times Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                <Clock className="h-4 w-4 mr-1 text-primary" />
                Available Timeslots
              </label>
              <div className="grid grid-cols-3 gap-2">
                {selectedDoctor.availability.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-1 rounded-xl text-center text-xs font-semibold border transition-all ${
                      selectedTime === time
                        ? "bg-secondary text-accent border-secondary"
                        : "bg-white text-secondary border-neutral-gray hover:bg-neutral-gray/30"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!selectedTime || !selectedDate}
              className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white transition-all text-xs font-bold tracking-wide uppercase flex items-center justify-center disabled:opacity-50 cursor-pointer"
            >
              Book Virtual Consultation
            </button>
          </div>
        </form>
      ) : (
        /* Booking Confirmation Receipt */
        <div className="text-center max-w-md mx-auto py-8 space-y-6">
          <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-primary">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-secondary">Appointment Confirmed!</h3>
            <p className="text-xs text-slate-500 font-light">
              Your appointment is fully logged. A secure calendar invite and email link have been sent.
            </p>
          </div>

          {/* Ticket styling */}
          <div className="bg-light-bg border border-neutral-gray/80 rounded-2xl p-6 text-left relative overflow-hidden space-y-4 shadow-inner">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="flex justify-between border-b border-dashed border-slate-300 pb-3">
              <div>
                <p className="text-[10px] text-slate-400 font-light">Ref ID</p>
                <p className="text-sm font-mono font-bold text-secondary">{bookingRef}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-light">Format</p>
                <p className="text-xs font-bold text-primary flex items-center justify-end">
                  <Video className="h-3.5 w-3.5 mr-1" />
                  HD Telehealth
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-slate-400 font-light">Practitioner</p>
                <p className="text-xs font-bold text-secondary">{selectedDoctor.name}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-light">Specialty</p>
                <p className="text-xs font-bold text-secondary truncate">{selectedDoctor.specialty.split(" & ")[0]}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-light">Date</p>
                <p className="text-xs font-bold text-secondary">
                  {availableDates.find((d) => d.raw === selectedDate)?.formatted || selectedDate}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-light">Time</p>
                <p className="text-xs font-bold text-secondary">{selectedTime}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl border border-neutral-gray text-secondary hover:bg-neutral-gray/40 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
}
