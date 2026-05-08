import { useNavigate, useParams } from "react-router-dom";

import Button from "../../../shared/components/Button";
import MemberInfoCard from "../list/components/MemberInfo";
import { useUserProfile } from "../../../entities/user/hooks/use-user-profile";

const MemberDetailPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  const parsedUserId = userId ? Number(userId) : undefined;

  const { userData } = useUserProfile({
    userId: parsedUserId,
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex min-h-[calc(100vh-84px)] w-full flex-col items-center justify-center p-8">
      <section className="flex w-full max-w-96 flex-col gap-6">
        <h1 className="text-center text-xl font-bold text-gray-900">
          멤버 상세 정보
        </h1>

        {userData ? (
          <MemberInfoCard
            title={`${userData.name} 님의 프로필`}
            data={{
              username: userData.loginId,
              name: userData.name,
              email: userData.email,
              age: userData.age,
              part: userData.part,
            }}
          />
        ) : (
          <div className="py-20 text-center text-gray-500">
            정보를 불러오는 중입니다...
          </div>
        )}

        <Button className="w-full" onClick={handleBack}>
          ← 뒤로가기
        </Button>
      </section>
    </main>
  );
};

export default MemberDetailPage;
