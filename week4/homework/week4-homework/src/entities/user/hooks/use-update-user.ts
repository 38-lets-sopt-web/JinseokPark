import { useState } from "react";
import { patchMyProfile } from "../api/user";
import { getUserId } from "../../../shared/utils/storage";
import type { UserUpdateRequest } from "../model/types";

import { MESSAGE } from "../../../shared/constants/message";

export const useUpdateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const userId = getUserId();

  const updateUser = async (updateData: UserUpdateRequest) => {
    if (!userId) {
      alert(MESSAGE.NO_LOGIN_DATA);
      return;
    }

    setIsUpdating(true);
    try {
      const response = await patchMyProfile(userId, updateData);
      if (response.success) {
        alert(MESSAGE.PROFILE_EDIT_SUCCESS);
        location.reload();
      }
    } catch {
      alert(MESSAGE.PROFILE_EDIT_FAILED);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateUser, isUpdating };
};
