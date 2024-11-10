import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const axiosInstance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  
  validateStatus: (status) => {
    return status < 500; 
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

      const response = await axiosInstance.get("/campers", { params });

      
      if (response.status === 404) {
        
        return rejectWithValue("No campers found for your query");
      }

      return response.data.items;
    } catch (error) {
      
      if (error.response) {
        if (error.response.status === 404) {
          
          return rejectWithValue("No campers found for your query");
        }
        
        return rejectWithValue(
          error.response?.data || "Error fetching campers"
        );
      }

     
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
    const currentItemsCount = state.camper.trucks.length; 
    try {
      const response = await axiosInstance.get(`/campers`);
      return response.data; 
    } catch (error) {
      throw new Error("Error loading more campers.");
    }
  }
);
