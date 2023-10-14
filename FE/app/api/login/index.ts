import axiosBaseURL from "../../axios";

export const localLogin = async formData => {
  const response = await axiosBaseURL.post("/local-login", {
    userEmail: formData.userEmail,
    userPassword: JSON.stringify(formData.userPassword),
  });
  return response;
};
