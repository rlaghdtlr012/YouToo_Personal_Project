import ValidationInput from "../components/UI/Input";
import { ValidationErrorTextStyle } from "../components/UI/InputStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from "next/router";
import { localLogin } from "../app/api/login";
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

const Join = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormInput>({ mode: "onChange" });

  const onSubmit = async formData => {
    try {
      const response = await localLogin(formData);
      router.push("/Home");
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
        <ValidationErrorTextStyle
          styleOverrides={loginErrorMessageStyle}
        ></ValidationErrorTextStyle>
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
export default Join;
