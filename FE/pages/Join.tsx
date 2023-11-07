import { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import ValidationInput from "../components/UI/Input";
import { ValidationErrorTextStyle } from "../components/UI/InputStyle";
import { emailRegEx, passwordRegEx } from "../utils/regex";
import DefaultButton from "../components/UI/Button";
import { useMutation } from "react-query";
import { registerUser } from "../app/api/login";

const TitleImg = styled.img`
  height: 59px;
  width: 226px;
  margin-top: 104px;
`;

const disabledLoginBtnStyle = {
  marginTop: "60px",
  backgroundColor: "#D9D9D9",
};

const activeLoginBtnStyle = {
  marginTop: "60px",
};

interface FormInput {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

const Join = () => {
  const router = useRouter();
  const { mutate } = useMutation(registerUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<FormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInput> = formData => {
    mutate(formData);
  };

  const passwordInput = useRef<string | null>(null);
  passwordInput.current = watch("userPassword");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationInput
          register={register("userName", {
            required: "이름을 입력해 주세요.",
            minLength: {
              value: 2,
              message: "이름은 2~3자로 입력해 주세요.",
            },
            maxLength: {
              value: 5,
              message: "이름은 2~5자로 입력해 주세요.",
            },
          })}
          label={"이름"}
          placeholder={"이름"}
          asterisk={true}
        />
        <ValidationErrorTextStyle>
          {errors.userName && errors.userName.message}
        </ValidationErrorTextStyle>

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
          asterisk={true}
        />
        <ValidationErrorTextStyle>
          {errors.userEmail && errors.userEmail.message}
        </ValidationErrorTextStyle>
        <ValidationInput
          register={register("userPassword", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: passwordRegEx,
              message: "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
            },
          })}
          type="password"
          label={"비밀번호"}
          placeholder={"**********"}
          asterisk={true}
        />
        <ValidationErrorTextStyle>
          {errors.userPassword && errors.userPassword.message}
        </ValidationErrorTextStyle>
        <ValidationInput
          register={register("userPasswordConfirm", {
            required: true,
            validate: value => value === passwordInput.current,
          })}
          type="password"
          label={"비밀번호 확인"}
          placeholder={"**********"}
          asterisk={true}
        />
        <ValidationErrorTextStyle>
          {errors.userPasswordConfirm && "비밀번호를 확인해 주세요."}
        </ValidationErrorTextStyle>
        {!isDirty ? (
          <DefaultButton
            styleOverrides={disabledLoginBtnStyle}
            label={"회원가입"}
          />
        ) : (
          <DefaultButton
            styleOverrides={activeLoginBtnStyle}
            label={"회원가입"}
          />
        )}
      </form>
    </>
  );
};
export default Join;
