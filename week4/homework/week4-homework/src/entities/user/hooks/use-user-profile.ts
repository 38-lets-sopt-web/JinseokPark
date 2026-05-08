import { useEffect, useState } from "react";

import { getUserProfile } from "../api/user";
import { getUserId } from "../../../shared/utils/storage";

import type { User } from "../model/types";

import { MESSAGE } from "../../../shared/constants/message";

interface UseUserProfileParams {
  userId?: number;
}

export const useUserProfile = (params?: UseUserProfileParams) => {
  const [userData, setUserData] = useState<User | null>(null);

  const targetUserId = params === undefined ? getUserId() : params.userId;

  useEffect(() => {
    if (!targetUserId || Number.isNaN(targetUserId)) {
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
