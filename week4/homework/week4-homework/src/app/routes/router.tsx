import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/sign-up/SignUpPage";
import MyPage from "../../pages/mypage/MyPage";
import MemberListPage from "../../pages/members/list/MemberListPage";
import MemberDetailPage from "../../pages/members/detail/MemberDetailPage";
import Layout from "../layout/Layout";

import { ROUTES } from "../../shared/constants/routes";

export const router = createBrowserRouter([
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SIGNUP, element: <SignUpPage /> },
  {
    path: ROUTES.MYPAGE,
    element: <Layout />,
    children: [
      { index: true, element: <MyPage /> },
      {
        path: "members",
        children: [
          { index: true, element: <MemberListPage /> },
          { path: ":userId", element: <MemberDetailPage /> },
        ],
      },
    ],
  },
]);
