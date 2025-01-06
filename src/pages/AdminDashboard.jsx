import { useContext } from "react";
import { IncidentsContext } from "../context/IncidentsContext";

const AdminDashboard = () => {
  const { incidents, setIncidents } = useContext(IncidentsContext);

  const handleClick = (index) => {
    const updatedIncidents = [...incidents];
    updatedIncidents[index].Status = true;
    setIncidents(updatedIncidents);
  };

  return (
    <>
      {incidents.length === 0 ? (
        <div className="ml-16 mt-12 font-sans text-base">
          No incidents reported yet
        </div>
      ) : (
        incidents.map((incident, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border hover:-translate-y-5 cursor-pointer transition-all mt-14"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">
                {incident.IncidentID}
              </h3>
              <span
                className={`px-3 py-1 text-xl font-bold text-white ${
                  incident.Severity === "High"
                    ? "bg-red-500"
                    : incident.Severity === "Medium"
                    ? "bg-yellow-500"
                    : incident.Severity === "Low"
                    ? "bg-green-500"
                    : "bg-black text-white"
                } rounded-full`}
              >
                {incident.Severity}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                <span className="font-bold">Name:</span> {incident.Name}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Type:</span> {incident.IncidentType}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Location:</span> {incident.Location}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Description:</span>{" "}
                {incident.Description}
              </p>
              <br />
              {incident.Status ? (
                <span className="text-green-600 font-bold text-xl">
                  Completed
                </span>
              ) : (
                <button
                  onClick={() => handleClick(index)}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg border-2 border-green-600 hover:bg-green-900 hover:text-black hover:border-green-600 hover:border-2"
                >
                  Mark as Completed
                </button>
              )}
              <div className="mt-2 bg-gray-100 border border-gray-300 rounded-lg p-4 relative">
                <p className="font-bold text-gray-700">Uploaded File:</p>
                {incident.file ? (
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold">Name:</span>{" "}
                      {incident.file.name}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">Type:</span>{" "}
                      {incident.file.type}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">Size:</span>{" "}
                      {incident.file.size} KB
                    </p>
                    <a
                      href={`/path/to/file/${incident.file.name}`} // Update this with the actual file URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all "
                      style={{ textDecoration: "none" }}
                    >
                      View File
                    </a>
                  </div>
                ) : (
                  <p className="text-gray-600">No file uploaded.</p>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default AdminDashboard;
