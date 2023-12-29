import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";

export const Display = () => {
  const [response, setResponse] = useState<string>("");

  const getResults = async () => {
    try {
      const APIresponse = await axios.get("http://localhost:8000/api/score/");
      console.log("Response: ", response);
      setResponse(APIresponse.data);
    } catch (error) {
      console.error("Error during file upload", error);
      setResponse("❌ Failed to fetch data.");
    }
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto bg-white shadow-md p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Display your results
        </h2>
        <div className="text-center">
          <Button
            variant="contained"
            className="text-center"
            onClick={getResults}
            style={{ backgroundColor: "#1f2937", color: "white" }}
          >
            Get Results
          </Button>
        </div>
        {/* {response && <p className="mt-4">{"Data: [ " + response + " ]"}</p>} */}
        {Array.isArray(response) ? (
          response.length > 0 ? (
            <div className="mt-4">
              <p>Data: [</p>
              <ul>
                {response.map((item, index) => (
                  <li key={index}>{JSON.stringify(item)}</li>
                ))}
              </ul>
              <p>]</p>
            </div>
          ) : (
            <p>No data available.</p>
          )
        ) : (
          <p>{response}</p>
        )}
      </div>
    </>
  );
};

export default Display;
