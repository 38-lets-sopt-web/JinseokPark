import { useState } from "react";

import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import MemberInfoCard from "./components/MemberInfo";
import MemberCardList from "./components/MemberCardList";

import type { SubmitEvent } from "react";

import { useUserProfile } from "../../../entities/user/hooks/use-user-profile";
import { useMemberList } from "../../../entities/user/hooks/use-member-list";

const MemberListPage = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [targetId, setTargetId] = useState<number | undefined>(undefined);
  const { userData } = useUserProfile(
    targetId ? { userId: targetId } : undefined,
  );
  const { memberList } = useMemberList();

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTargetId(Number(searchId));
  };

  return (
    <main className="flex flex-col items-center gap-12 p-8">
      <section className="flex w-full max-w-96 flex-col gap-6">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          회원 조회
        </h1>
        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <Input
            label="회원 ID"
            type="number"
            placeholder="ID를 입력하세요"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <Button className="w-full" type="submit">
            검색
          </Button>
        </form>

        {userData && (
          <MemberInfoCard
            title="검색 결과"
            data={{
              username: userData.loginId,
              name: userData.name,
              email: userData.email,
              age: userData.age,
              part: userData.part,
            }}
          />
        )}
      </section>

      <section className="flex w-full max-w-5xl flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-900">전체 멤버</h2>
        <MemberCardList members={memberList ?? []} />
      </section>
    </main>
  );
};

export default MemberListPage;
