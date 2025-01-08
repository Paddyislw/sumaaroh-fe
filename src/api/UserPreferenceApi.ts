import axios from "axios";
import { Preference, PreferencePayload, PreferenceResponse } from "../types/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const usePreferencesApi = (email: string) => {
    const createPreference = async (payload: PreferencePayload): Promise<Preference> => {
      const response = await axios.post<PreferenceResponse>(
        `http://localhost:3000/api/preferences/${email}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.data;
    };

    const {
      mutate: savePreference,
      isPending: isSaving,
      isError,
      isSuccess,
      data: savedPreference
    } = useMutation({
      mutationFn: createPreference,
      onSuccess: () => {
        toast.success('Preferences saved successfully');
      },
      onError: (error) => {
        console.error('Error saving preferences:', error);
      }
    });
  
    return {
      savePreference,
      isSaving,
      isError,
      isSuccess,
      savedPreference
    };
  };