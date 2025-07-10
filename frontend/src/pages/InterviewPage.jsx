import React from "react";

const StartInterview = () => {
    const handleStartInterview = async () => {
        const token = localStorage.getItem("token"); // Get the JWT token from localStorage

        try {
            const response = await fetch("http://localhost:5001/user/interview", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Interview created successfully:", data.interview);
                // Redirect or update UI as needed
            } else {
                console.error("Error creating interview:", data.message);
            }
        } catch (error) {
            console.error("Failed to create interview:", error);
        }
    };

    return (
        <button
            onClick={handleStartInterview}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
            Start Interview
        </button>
    );
};

export default StartInterview;