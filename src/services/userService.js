export const registerUserAPI = async (userData) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Failed to save user details"
      );
    }
    return data;
  } 
  catch (error) {
    if (
      error.message === "Failed to fetch" ||  error.name === "TypeError"
    ) {
      throw new Error(
        "Unable to connect to backend server (http://localhost:8080). Please start Spring Boot."
      );
    }
    throw error;
  }
};