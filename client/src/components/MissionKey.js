import React from "react";

const MissionKey = () => {
  return (
    <div className="my-3" style={{ display: "flex" }}>
      <p>
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      <p style={{ marginLeft: 20 }}>
        <span className="px-3 mr-2 bg-danger" /> = Failed
      </p>
    </div>
  );
};

export default MissionKey;
