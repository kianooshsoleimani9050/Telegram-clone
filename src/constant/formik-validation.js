import * as Yup from "yup";
export const UPDATE_PROFILE_VALIDATION = Yup.object({
  name: Yup.string().required("Required"),
});
