import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import MemberInfoCard from "./components/MemberInfo";
import MemberCardList from "./components/MemberCardList";

const MemberListPage = () => {
  const mockMembers = [
    { id: 1, name: "멤버 1", part: "Web" },
    { id: 2, name: "멤버 2", part: "Web" },
    { id: 3, name: "멤버 3", part: "Web" },
    { id: 4, name: "멤버 4", part: "Web" },
    { id: 5, name: "멤버 5", part: "Web" },
    { id: 6, name: "멤버 6", part: "Web" },
  ];

  return (
    <main className="flex flex-col items-center gap-12 p-8">
      <section className="flex w-full max-w-96 flex-col gap-6">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          회원 조회
        </h1>
        <div className="flex flex-col gap-4">
          <Input label="회원 ID" type="number" placeholder="ID를 입력하세요" />
          <Button className="w-full">검색</Button>
        </div>

        <MemberInfoCard
          title="검색 결과"
          data={{
            username: "jin-evergreen",
            name: "진석",
            email: "jin@sopt.org",
            age: 24,
            part: "Web",
          }}
        />
      </section>

      <section className="flex w-full max-w-5xl flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-900">전체 멤버</h2>
        <MemberCardList members={mockMembers} />
      </section>
    </main>
  );
};

export default MemberListPage;
