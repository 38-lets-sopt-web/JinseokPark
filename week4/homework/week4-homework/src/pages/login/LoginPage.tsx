import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";

import type { SubmitEvent, ChangeEvent } from "react";

import { useLogin } from "../../features/auth/hooks/use-login";

import { ROUTES } from "../../shared/constants/routes";

const LoginPage = () => {
  const [form, setForm] = useState({
    loginId: "",
    password: "",
  });

  const { login, isLoading, errorMessage } = useLogin();
  const navigate = useNavigate();

  const isValid = form.loginId.trim() !== "" && form.password.trim() !== "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(form);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">SOPT MEMBERS</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-96 flex-col gap-4"
      >
        <div className="flex flex-col gap-3">
          <Input
            label="아이디"
            name="loginId"
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
          <Input
            label="비밀번호"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        {errorMessage && (
          <p className="text-sm font-medium text-red-500 ">{errorMessage}</p>
        )}

        <div className="flex flex-col gap-2 pt-2">
          <Button type="submit" disabled={isLoading || !isValid}>
            로그인
          </Button>
          <Button
            type="button"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => {
              navigate(ROUTES.SIGNUP);
            }}
          >
            회원가입
          </Button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
