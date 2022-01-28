import { useState } from "react";
import { ApiCallHandler } from "../utils/common/api-calls-handler";

export const useUpdateUserProfile = ({
  method,
  path,
  query,
  onSuccess,
  onError,
}) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ errorMsg: "", isError: false });
  const [loading, setLoading] = useState(false);
  const mutate = async (body) => {
    setLoading(true);
    const { status, _resToJson } = await ApiCallHandler(
      method,
      path + `${query ? "?" + query : ""}`,
      body
    );
    if (status === 200) {
      setLoading(false);
      setResult(_resToJson);
      onSuccess && onSuccess(_resToJson, body);
    } else {
      setLoading(false);
      setError({
        isError: true,
        errorMsg: _resToJson?.error,
      });
      onError && onError(_resToJson);
      setTimeout(() => setError((prev) => ({ ...prev, isError: false })), 1500);
    }
  };

  return {
    error,
    loading,
    result,
    mutate,
  };
};
