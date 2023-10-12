import axiosBaseURL from "../axios";

export const localLogin = async formData => {
  const response = await axiosBaseURL.post("/login", {
    userEmail: formData.userEmail,
    userPassword: JSON.stringify(formData.userPassword),
  });
  return response;
};
