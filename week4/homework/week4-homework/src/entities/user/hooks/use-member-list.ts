import { useState, useEffect } from "react";
import { getUserList } from "../api/user";
import type { UserSummary } from "../model/types";
import { MESSAGE } from "../../../shared/constants/message";

export const useMemberList = () => {
  const [memberList, setMemberList] = useState<UserSummary[]>([]);
  useEffect(() => {
    const loadMembers = async () => {
      try {
        const response = await getUserList();

        if (response.success && response.data) {
          setMemberList(response.data.users);
        }
      } catch {
        alert(MESSAGE.MEMBER_LIST_LOAD_ERROR);
      }
    };

    loadMembers();
  }, []);

  return { memberList };
};
