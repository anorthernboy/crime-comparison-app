import axios from "axios";
import { googleAPI } from "./config";
const googleRequest = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode"
});
const policeRequest = axios.create({
  baseURL: "https://data.police.uk/api/crimes-street"
});

export const getLocations = async (currentPostcode, newPostcode) => {
  const locations = await axios.all([
    googleRequest.get(`/json?address=${currentPostcode}&key=${googleAPI}`),
    googleRequest.get(`/json?address=${newPostcode}&key=${googleAPI}`)
  ]);
  return locations;
};

export const getCrimes = async (currentLocation, newLocation) => {
  const crimes = await axios.all([
    policeRequest.get(
      `/all-crime?lat=${currentLocation.lat}&lng=${currentLocation.lng}`
    ),
    policeRequest.get(
      `/all-crime?lat=${newLocation.lat}&lng=${newLocation.lng}`
    )
  ]);
  return crimes;
};
