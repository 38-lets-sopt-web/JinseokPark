import { useState, useEffect } from "react";
import { getUserProfile } from "../api/user";
import { getUserId } from "../../../shared/utils/storage";
import type { User } from "../model/types";

import { MESSAGE } from "../../../shared/constants/message";

export const useUserProfile = () => {
  const [userData, setUserData] = useState<User | null>(null);

  const userId = getUserId();

  useEffect(() => {
    if (!userId) {
      return;
    }

    const loadUser = async () => {
      try {
        const response = await getUserProfile(userId);
        if (response.success && response.data) {
          setUserData(response.data);
        }
      } catch {
        alert(MESSAGE.MEMBER_PROFILE_ERROR);
      }
    };

    loadUser();
  }, [userId]);

  return { userData };
};
