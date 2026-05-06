import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">SOPT MEMBERS</h1>
      </header>

      <form className="flex w-full max-w-96 flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Input label="아이디" placeholder="아이디를 입력해주세요" />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button type="submit">로그인</Button>
          <Button
            type="button"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            회원가입
          </Button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
