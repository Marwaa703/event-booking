import api, { handleError } from "./axiosConfig";

export const login = async (email, password) => {
  try {
    const response = await api.post("user", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const signUp = async (name, email, password) => {
  try {
    const response = await api.post("user", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
