import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
const axiosInstance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  // Ваша базова URL
  validateStatus: (status) => {
    return status < 500; // Приймає всі статуси < 500, тобто навіть 404
  },
});
export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (filters, { rejectWithValue }) => {
    try {
      const params = {};

      if (filters.location) params.location = filters.location;

      ["AC", "kitchen", "automatic", "TV", "bathroom"].forEach((item) => {
        if (filters[item]) {
          params[item] = true;
        }
      });

      if (filters.form) params.form = filters.form;

      console.log("Axios request params:", params);
      const response = await axiosInstance.get("/campers", { params });

      // Якщо сервер повертає статус 404
      if (response.status === 404) {
        console.log("No campers found for your query");
        return rejectWithValue("No campers found for your query");
      }

      console.log("response.status:", response.status);
      console.log("response.data:", response.data);

      return response.data.items;
    } catch (error) {
      // Перевірка, чи є у помилки відповідь
      if (error.response) {
        if (error.response.status === 404) {
          console.log("No campers found for your query");
          return rejectWithValue("No campers found for your query");
        }
        // Логування для інших помилок
        console.error("Error fetching campers:", error.response);
        return rejectWithValue(
          error.response?.data || "Error fetching campers"
        );
      }

      // Якщо помилка не з response
      console.error("Error fetching campers:", error);
      return rejectWithValue("Error fetching campers");
    }
  }
);

export const getCamper = createAsyncThunk(
  "campers/getCamper",
  async (id, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCampers = createAsyncThunk(
  "campers/loadMoreCampers",
  async (_, { getState }) => {
    const state = getState();
    const currentItemsCount = state.camper.trucks.length; // кількість уже завантажених елементів
    try {
      const response = await axiosInstance.get(`/campers`);
      return response.data; // Повертає масив нових елементів
    } catch (error) {
      throw new Error("Error loading more campers.");
    }
  }
);
