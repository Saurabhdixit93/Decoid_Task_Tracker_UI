import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import ChooseGoals from "../../../components/GoalsOnBoard/ChooseGoals";
import FirstStep from "../../../components/OnBoarding/FirstStep";

export default function Login() {
  const [onBoard, setOnBoard] = useState(false);
  const [beforePage, setBeforPage] = useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const IconType = showPassword ? EyeSlash : Eye;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const data = {
        success: true,
        message: "Login successful",
        user: user,
      };
      return data;
    } catch (error) {
      const data = {
        success: false,
        error: error.message,
      };
      return data;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn(formData.email, formData.password);
    if (result.success === true) {
      const user = result?.user;
      document.cookie = `token=${user.accessToken} ;path=/; secure; priority=high; partitionKey=${user.uid}`;
      setOnBoard(true);
    } else {
      setOnBoard(false);
      return alert(result.error);
    }
  };

  return (
    <>
      {onBoard ? (
        <ChooseGoals />
      ) : (
        <>
          {beforePage ? (
            <FirstStep setBeforPage={setBeforPage} />
          ) : (
            <AuthLayout
              heading={"Welcome Back"}
              footerTitle={"Don't have an account ?"}
              socialType={"Signup"}
              toLink={"/signup"}
            >
              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col h-[520px] justify-between"
              >
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-md text-gray-500 " htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full p-3 border-none rounded-lg bg-gray"
                      type="email"
                      placeholder="Enter Email here"
                      id="email"
                      name={"email"}
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-md text-gray-500 capitalize"
                      htmlFor="password"
                    >
                      password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full p-3 border-none  bg-gray rounded-lg"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password here"
                        id="password"
                        name={"password"}
                        onChange={handleInputChange}
                        value={formData.password}
                      />

                      <button
                        type="button"
                        className="bg-gray absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 text-black "
                      >
                        <IconType
                          size={32}
                          weight="regular"
                          color="#7F7F7F"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-start w-full">
                    <Link to={"#"} className="text-lg text-[#7F7F7F] underline">
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <Button title={"Sign in"} type={"submit"} />
              </form>
            </AuthLayout>
          )}
        </>
      )}
    </>
  );
}
