import { useState, useEffect } from "react";
import { getUserProfile } from "../api/user";
import { getUserId } from "../../../shared/utils/storage";
import type { User } from "../model/types";

import { MESSAGE } from "../../../shared/constants/message";

interface UseUserProfileParams {
  userId: number;
}

export const useUserProfile = (params?: UseUserProfileParams) => {
  const [userData, setUserData] = useState<User | null>(null);
  const targetUserId = params?.userId ?? getUserId();

  useEffect(() => {
    if (!targetUserId) {
      return;
    }

    const loadUser = async () => {
      try {
        const response = await getUserProfile(targetUserId);
        if (response.success && response.data) {
          setUserData(response.data);
        }
      } catch {
        alert(MESSAGE.MEMBER_PROFILE_ERROR);
      }
    };

    loadUser();
  }, [targetUserId]);

  return { userData };
};
