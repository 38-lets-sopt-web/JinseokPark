import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";

const MyPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-center text-2xl font-bold text-gray-900">내 정보</h1>

      <section className="flex w-full max-w-96 flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">아이디</span>
          <span className="text-base font-bold text-gray-900">
            jin-evergreen
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">파트</span>
          <span className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
            Web
          </span>
        </div>
      </section>

      <form className="flex w-full max-w-96 flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Input label="이름" defaultValue="임시" />
          <Input label="이메일" type="email" defaultValue="임시" />
          <Input label="나이" type="number" defaultValue="24" />
        </div>

        <Button type="submit" className="mt-2">
          정보 수정
        </Button>
      </form>
    </main>
  );
};

export default MyPage;
