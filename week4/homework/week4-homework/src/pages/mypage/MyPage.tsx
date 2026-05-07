import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { useUserProfile } from "../../entities/user/hooks/use-user-profile";
import { useUpdateUser } from "../../entities/user/hooks/use-update-user";

import type { SubmitEvent } from "react";

const MyPage = () => {
  const { userData } = useUserProfile();
  const { updateUser, isUpdating } = useUpdateUser();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");

    if (typeof name !== "string" || typeof email !== "string" || age === null) {
      return;
    }

    const updateData = {
      name,
      email,
      age: Number(age),
    };

    updateUser(updateData);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-center text-2xl font-bold text-gray-900">내 정보</h1>

      <section className="flex w-full max-w-96 flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">아이디</span>
          <span className="text-base font-bold text-gray-900">
            {userData?.loginId}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">파트</span>
          <span className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
            {userData?.part}
          </span>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-96 flex-col gap-4"
      >
        <div className="flex flex-col gap-3">
          <Input label="이름" name="name" defaultValue={userData?.name} />
          <Input
            label="이메일"
            type="email"
            name="email"
            defaultValue={userData?.email}
          />
          <Input
            label="나이"
            type="number"
            name="age"
            defaultValue={userData?.age}
          />
        </div>

        <Button type="submit" className="mt-2" disabled={isUpdating}>
          정보 수정
        </Button>
      </form>
    </main>
  );
};

export default MyPage;
