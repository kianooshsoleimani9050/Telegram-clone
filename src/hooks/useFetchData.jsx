import { useEffect, useState } from "react";
import { ApiCallHandler } from "../utils/common/api-calls-handler";

export const useFetchData = ({
  path,
  query,
  isDataExist = false,
  onSuccess,
  onError,
  fetchDependecy,
}) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ errorMsg: "", isError: false });
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const { status, _resToJson } = await ApiCallHandler(
      "GET",
      path + `${query ? "?" + query : ""}`,
      undefined
    );
    if (status === 200) {
      setLoading(false);
      setResult(_resToJson);
      onSuccess && onSuccess(_resToJson);
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
  useEffect(() => {
    !isDataExist && fetchData();
  }, [!isDataExist, fetchDependecy]);
  const mutate = async () => await fetchData();
  return {
    error,
    loading,
    result,
    mutate,
  };
};
