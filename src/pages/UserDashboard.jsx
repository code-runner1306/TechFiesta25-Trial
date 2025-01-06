import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const location = useLocation();
  const userReports = location.state?.userReports || [];

  return (
    <>
      {!userReports.length ? (
        <div className="ml-16 mt-12 font-sans text-base">
          No incidents reported yet
        </div>
      ) : (
        userReports.map((incident) => (
          <div
            key={incident.IncidentID}
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
                    : "bg-black"
                } rounded-full`}
              >
                {incident.Severity}
              </span>
            </div>
            <div className="mt-4">
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
              <p className="text-gray-600">
                <span className="font-bold text-xl">Status:</span>{" "}
                <span
                  className={`${
                    incident.Status ? "text-green-600" : "text-red-600"
                  } font-bold text-xl`}
                >
                  {incident.Status ? "Completed" : "Not Completed"}
                </span>
              </p>
              <div className="mt-2 bg-gray-100 border border-gray-300 rounded-lg p-4">
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

export default UserDashboard;
