import { useNavigate } from "react-router-dom";
import { removeUserId, getUserId } from "../utils/storage";
import { useUserProfile } from "../../entities/user/hooks/use-user-profile";

import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const id = getUserId();
  const { userData } = useUserProfile({ userId: id ?? undefined });

  const handleLogout = () => {
    removeUserId();
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex w-full items-center justify-between bg-blue-500 px-8 py-4">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold text-white">SOPT MEMBERS</p>
        <p className="text-sm text-white">안녕하세요 {userData?.name}님</p>
      </div>

      <nav className="flex items-center gap-6 text-sm font-medium text-white">
        <Link to="/mypage" className="hover:underline">
          내 정보
        </Link>
        <Link to="/mypage/members" className="hover:underline">
          회원 조회
        </Link>
        <button className="hover:underline" onClick={handleLogout}>
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;
