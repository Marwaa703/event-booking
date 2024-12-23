import api, { handleError } from "./axiosConfig";

export const fetchEvents = async () => {
  try {
    const response = await api.get("events");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const fetchEventById = async (id) => {
  try {
    if (!id) throw new Error("Event ID is required");
    const response = await api.get(`events/${id}`);
    if (!response.data) throw new Error("Event not found");
    return response.data;
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};
