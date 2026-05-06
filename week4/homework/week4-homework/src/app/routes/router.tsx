import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/sign-up/SignUpPage";
import MyPage from "../../pages/mypage/MyPage";
import MemberListPage from "../../pages/members/list/MemberListPage";
import MemberDetailPage from "../../pages/members/detail/MemberDetailPage";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  {
    path: "/mypage",
    element: <Layout />,
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
