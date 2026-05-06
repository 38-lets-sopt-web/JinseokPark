import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/sign-up/SignupPage";
import MyPage from "../../pages/mypage/MyPage";
import MemberListPage from "../../pages/members/list/MemberListPage";
import MemberDetailPage from "../../pages/members/detail/MemberDetailPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  {
    path: "/mypage",
    children: [
      { index: true, element: <MyPage /> },
      {
        path: "members",
        children: [
          { index: true, element: <MemberListPage /> },
          { path: ":memberId", element: <MemberDetailPage /> },
        ],
      },
    ],
  },
]);
