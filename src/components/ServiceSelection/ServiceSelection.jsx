"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { makeupArtists } from "@/helpers/dataStore";

const eventTypes = ["Wedding", "Birthday", "Photoshoot", "Other"];

const ServiceSelection = ({ onChange, handleBack }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const [eventType, setEventType] = useState("");

  const handleSelectArtist = (artistId) => {
    setSelectedArtist(artistId);
  };

  const handleNext = () => {
    onChange &&
      onChange({
        artist: selectedArtist,
        eventType,
      });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Event Selection</h2>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Event Type
        </label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          value={eventType}
          name="eventType"
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">Select an event</option>
          {eventTypes.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Select Makeup Artist
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[
            ...new Set([
              makeupArtists.find((a) => a.id === selectedArtist),
              ...makeupArtists
                .filter((a) => a.id !== selectedArtist)
                .slice(0, 2),
            ]),
          ]
            .filter(Boolean)
            .map((artist) => (
              <div
                key={artist.id}
                className={`p-3 border rounded-lg cursor-pointer transition hover:shadow-lg ${
                  selectedArtist === artist.id
                    ? "border-primary-500"
                    : "border-gray-300"
                }`}
                onClick={() => handleSelectArtist(artist.id)}
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-center font-semibold">{artist.name}</p>
              </div>
            ))}
          <div
            className="p-3 border rounded-lg cursor-pointer flex items-center justify-center text-primary-500 font-semibold hover:shadow-lg"
            onClick={() => setShowAllArtists(true)}
          >
            Show More
          </div>
        </div>
      </div>

      {showAllArtists && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg h-[80vh] relative flex flex-col">
            <button
              className="absolute top-3 right-3"
              onClick={() => setShowAllArtists(false)}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Select a Makeup Artist
            </h3>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto flex-1 pr-1">
              {makeupArtists.map((artist) => (
                <div
                  key={artist.id}
                  className={`p-3 border rounded-lg cursor-pointer transition hover:shadow-lg ${
                    selectedArtist === artist.id
                      ? "border-primary-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedArtist(artist.id);
                    setShowAllArtists(false);
                  }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-center p-4 font-semibold">{artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Nav Content */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={handleBack}
          className="w-full sm:w-auto px-6 py-2 bg-gray-300 text-gray-800 rounded-lg cursor-pointer "
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-6 py-2 bg-primary-500 text-white rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceSelection;
