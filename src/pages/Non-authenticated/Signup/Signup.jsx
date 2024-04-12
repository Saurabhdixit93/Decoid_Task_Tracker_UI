import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import Button from "../../../components/buttons/Button";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "firebase/auth";
const INPUTS_FIELDS = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name here",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Enter Last Name here",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter Email here",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter Password here",
  },
];
export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = formData;
    const displayName = `${firstName} ${lastName}`;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName,
        password,
      });

      await createUserDataInFirestore(userCredential, displayName, email);
    } catch (error) {
      return;
    }
  };

  // create user account
  const createUserDataInFirestore = async (
    userCredential,
    displayName,
    email,
    downloadURL
  ) => {
    const uid = userCredential.user.uid;
    await setDoc(doc(db, "users", uid), {
      uid,
      displayName,
      email,
      photoURL: downloadURL,
    });
  };

  return (
    <AuthLayout
      heading={"Create an account"}
      footerTitle={"Already have an account ?"}
      socialType={"Login"}
      toLink={"/login"}
    >
      <form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-col h-[520px] justify-between"
      >
        <div className="w-full flex flex-col gap-4">
          {INPUTS_FIELDS.map((inputItem, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 w-full">
                <label
                  className="text-md text-gray-500 "
                  htmlFor={inputItem.id}
                >
                  {inputItem.label}
                </label>
                <input
                  autoComplete="off"
                  className="w-full p-3 border-none rounded-lg bg-gray"
                  type={inputItem.type}
                  placeholder={inputItem.placeholder}
                  id={inputItem.id}
                  name={inputItem.name}
                  value={formData[inputItem.name]}
                  onChange={handleInputChange}
                />
              </div>
            );
          })}

          <div className="w-full items-center justify-start flex">
            <input type="checkbox" className="w-6 h-6" id="rememberMe" />
            <label className="text-md text-[#7F7F7F] ml-2" htmlFor="rememberMe">
              By proceeding, I agree to all{" "}
              <Link to={"#"} className="text-blue-700 underline">
                T&C {""}
              </Link>
              and {""}
              <Link to={"#"} className="text-blue-700 underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        <Button title={"Create an Account"} type={"submit"} />
      </form>
    </AuthLayout>
  );
}
