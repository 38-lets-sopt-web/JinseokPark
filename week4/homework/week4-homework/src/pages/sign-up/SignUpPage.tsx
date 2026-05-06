import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import Select from "../../shared/components/Select";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const partOptions = ["웹", "iOS", "안드로이드"];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
    else console.log("회원가입 완료");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">회원가입</h1>
      </header>

      <form
        onSubmit={handleNext}
        className="flex w-full max-w-[320px] flex-col gap-4"
      >
        <div className="flex flex-col gap-3">
          {step === 1 && (
            <Input label="아이디" placeholder="아이디를 입력해주세요" />
          )}

          {step === 2 && (
            <>
              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <Input
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </>
          )}

          {step === 3 && (
            <>
              <Input label="이름" placeholder="이름을 입력해주세요" />
              <Input
                label="이메일"
                type="email"
                placeholder="이메일을 입력해주세요"
              />
              <Input
                label="나이"
                type="number"
                placeholder="나이를 입력해주세요"
              />
              <Select label="파트" options={partOptions} />
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <Button type="submit">{step === 3 ? "회원가입" : "다음"}</Button>

          <div className="flex justify-center gap-2 text-sm">
            <span className="text-gray-500">이미 계정이 있나요?</span>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline"
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
