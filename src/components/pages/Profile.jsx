import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE_INITIAL_VALUES } from "../../constant/formik-initial-values";
import { UPDATE_PROFILE_VALIDATION } from "../../constant/formik-validation";
import { useUpdateUserProfile } from "../../hooks/userUpdateUserProfile";
import { getChatsState } from "../../redux/actions/chats";
import { getUserProfile } from "../../redux/actions/userProfile";
import Loading from "../common/web/Loading";

const Profile = () => {
  const inputRef = useRef();
  const userProfile = useSelector((state) => state.userProfile);
  const dispach = useDispatch();
  const { mutate, loading } = useUpdateUserProfile({
    path: `https://61f3e09510f0f7001768c6e6.mockapi.io/api/v1/user-profile/${userProfile?.id}`,
    method: "PUT",
    onSuccess: (data, body) => {
      dispach(getUserProfile(data));
    },
  });
  const formik = useFormik({
    initialValues: UPDATE_PROFILE_INITIAL_VALUES(
      userProfile?.name,
      userProfile?.avatar
    ),
    validationSchema: UPDATE_PROFILE_VALIDATION,
    onSubmit: (values) => {
      mutate(values);
    },
    enableReinitialize: true,
  });
  const handleOpenChats = () => dispach(getChatsState(false));
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="p-0 m-0 h-100">
      <div className="p-1 m-0 d-md-none" onClick={handleOpenChats}>
        <FaChevronLeft size={24} className="text-white" />
      </div>
      <div className="p-0 m-0 h-100 profile_content_div__container d-flex align-items-center justify-content-center">
        <form
          onSubmit={formik.handleSubmit}
          className="p-3 m-0 profile_form_div__container"
        >
          <div className="p-0 m-0 mb-2">
            <img
              src={userProfile?.avatar}
              alt=""
              className="sidebar_profile_img__container"
            />
          </div>
          <label className="text-white">Name</label>
          <div className="p-0 m-0 chats_input_div__container">
            <input
              ref={inputRef}
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name..."
              className=""
            />
          </div>
          <div className="p-0 m-0 d-flex justify-content-end">
            {loading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="p-2 profile_form_submit_button__container"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
