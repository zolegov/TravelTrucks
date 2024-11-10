import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
export const getCampers2 = async () => {
  const response = await axios.get("/campers");
  console.log("response: ", response.data);
  return response.data;
};

export const getCamper = async (id) => {
  const response = await axios.get(`/campers/${id}`);
  console.log("response id: ", response.data);
  return response.data;
};
