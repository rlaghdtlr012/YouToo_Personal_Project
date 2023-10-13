import ValidationInput from "../components/UI/Input";
import { ValidationErrorTextStyle } from "../components/UI/InputStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { localLogin } from "../api/login";
import { emailRegEx } from "../utils/regex";
import DefaultButton from "../components/UI/Button";

const MainCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleImg = styled.img`
  height: 59px;
  width: 226px;
  margin-top: 104px;
`;

const loginErrorMessageStyle = {
  margin: "20px 0px",
};

const disabledLoginBtnStyle = {
  backgroundColor: "#D9D9D9",
};

interface FormInput {
  userEmail: string;
  userPassword: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormInput>({ mode: "onChange" });

  const onSubmit = async formData => {
    try {
      const response = await localLogin(formData);
      console.log(response.data);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationInput
          register={register("userEmail", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: emailRegEx,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
          label={"이메일"}
          placeholder={"example@example.com"}
          asterisk={false}
        />
        <ValidationErrorTextStyle>
          {errors.userEmail && errors.userEmail.message}
        </ValidationErrorTextStyle>

        <ValidationInput
          register={register("userPassword", {
            required: "비밀번호를 입력해 주세요.",
          })}
          type={"password"}
          label={"비밀번호"}
          placeholder={"********"}
          asterisk={false}
        />
        <ValidationErrorTextStyle>
          {errors.userPassword && errors.userPassword.message}
        </ValidationErrorTextStyle>
        <ValidationErrorTextStyle styleOverrides={loginErrorMessageStyle}>
          {/* {errors.userEmail || errors.userPassword
            ? '이메일 또는 비밀번호를 잘못 입력하셨습니다. 입력하신 내용을 다시 확인해 주세요.'
            : null} */}
        </ValidationErrorTextStyle>
        {!isDirty ? (
          <DefaultButton
            styleOverrides={disabledLoginBtnStyle}
            label={"로그인"}
          />
        ) : (
          <DefaultButton label={"로그인"} />
        )}
      </form>
    </>
  );
};
export default Login;
