import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, provider } from "../db/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/sendMailBoxSlice";
const Login = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center text-center">
      <div className="bg-[#E9EEF6] p-6 rounded-lg">
        <h1 className="text-3xl pb-4 bg">Login</h1>
        <GoogleButton onClick={signInWithGoogle}></GoogleButton>
      </div>
    </div>
  );
};

export default Login;
