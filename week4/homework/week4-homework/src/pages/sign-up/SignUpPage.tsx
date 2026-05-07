import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import Select from "../../shared/components/Select";

import type { SubmitEvent, ChangeEvent } from "react";
import type { SignUpRequest } from "../../features/auth/model/types";

import { useSignUp } from "../../features/auth/hooks/use-signup";

import { MESSAGE } from "../../shared/constants/message";

const partOptions = ["웹", "iOS", "안드로이드"];

const idRegex = /^[a-zA-Z0-9]{4,20}$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { signUp, isLoading } = useSignUp();

  const [form, setForm] = useState({
    loginId: "",
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
    age: 0,
    part: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const isIdValid = idRegex.test(form.loginId);

  const isPasswordValid = passwordRegex.test(form.password);
  const isPasswordMatch =
    form.password.length > 0 && form.password === form.passwordCheck;

  const isNameValid = form.name.length > 0 && form.name.length <= 10;
  const isEmailValid = emailRegex.test(form.email);
  const isAgeValid = form.age > 0 && !isNaN(Number(form.age));
  const isPartValid = form.part !== "";

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      const signUpData: SignUpRequest = {
        loginId: form.loginId,
        password: form.password,
        name: form.name,
        email: form.email,
        age: form.age,
        part: form.part,
      };
      signUp(signUpData);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">회원가입</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[320px] flex-col gap-4"
      >
        <div className="flex flex-col gap-3">
          {step === 1 && (
            <Input
              label="아이디"
              name="loginId"
              placeholder="아이디를 입력해주세요"
              onChange={handleChange}
              isError={form.loginId.length > 0 && !isIdValid}
              errorMessage={MESSAGE.ID_NOTICE}
            />
          )}

          {step === 2 && (
            <>
              <Input
                label="비밀번호"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleChange}
                isError={form.password.length > 0 && !isPasswordValid}
                errorMessage={MESSAGE.PASSWORD_NOTICE}
              />
              <Input
                label="비밀번호 확인"
                name="passwordCheck"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={handleChange}
                isError={form.passwordCheck.length > 0 && !isPasswordMatch}
                errorMessage={MESSAGE.PASSWORD_DISMATCH}
              />
            </>
          )}

          {step === 3 && (
            <>
              <Input
                label="이름"
                name="name"
                placeholder="이름을 입력해주세요"
                onChange={handleChange}
                isError={form.name.length > 0 && !isNameValid}
                errorMessage={MESSAGE.NAME_NOTICE}
              />
              <Input
                label="이메일"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={handleChange}
                isError={form.email.length > 0 && !isEmailValid}
                errorMessage={MESSAGE.EMAIL_NOTICE}
              />
              <Input
                label="나이"
                name="age"
                type="number"
                placeholder="나이를 입력해주세요"
                onChange={handleChange}
                // 나이는 type="number"로 제한해두었기에, 따로 에러 메시지는 구현하지 않았습니다.
              />
              <Select
                label="파트"
                name="part"
                options={partOptions}
                onChange={handleChange}
              />
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <Button
            type="submit"
            disabled={
              isLoading ||
              (step === 1 && !isIdValid) ||
              (step === 2 && (!isPasswordValid || !isPasswordMatch)) ||
              (step === 3 &&
                (!isNameValid || !isEmailValid || !isAgeValid || !isPartValid))
            }
          >
            {step === 3 ? "회원가입" : "다음"}
          </Button>

          <div className="flex justify-center gap-2 text-sm">
            <span className="text-gray-500">이미 계정이 있나요?</span>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-blue-600 hover:underline"
            >
              로그인
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
