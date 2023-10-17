import axiosBaseURL from "../../axios";
import { RegisterValues } from "../type";

export const localLogin = async formData => {
  const response = await axiosBaseURL.post("/local-login", {
    userEmail: formData.userEmail,
    userPassword: formData.userPassword,
  });
  return response;
};

export const registerUser = async (formData: RegisterValues) => {
  const response = await axiosBaseURL.post<string>("/register", {
    email: formData.userEmail,
    name: formData.userName,
    password: formData.userPassword,
  });
  return response;
};
