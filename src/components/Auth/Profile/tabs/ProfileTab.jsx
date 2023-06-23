import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../../config";
import { useAuth } from "../../../../context/auth-context";
import InputCom from "../../../Helpers/InputCom";
import { Select, Button, Text } from "@mantine/core";
import { Alert } from "@mantine/core";


export default function ProfileTab() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [profile, setProfile] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);

     const [credentials, setCredentials] = useState({
       first_name: profile?.first_name,
       last_name: profile?.last_name,
       email: profile?.email,
       phone_number: profile?.phone_number,
       country: profile?.country,
       town: profile?.town,
       quater: profile?.quater,
       address: profile?.address,
     });

    useEffect( () => {
      axios.get(`${API_URL}auth/user/${user?.user_id}`).then((res) => {
        setProfile(res.data);
        console.log(res.data);
      });
    }, []);

      const handleChange = (prop) => (event) => {
        setCredentials({
          ...credentials,
          [prop]: event.target.value,
        });
      };

      const handleSubmit =  (e) => {
        e.preventDefault();
        setSubmitted(true);
        try {
          const res = axios.patch(`${API_URL}auth/user/${user?.user_id}`, credentials);
          console.log(res);
          setSubmitted(false);
          setSuccessAlert(true);
        } catch (err) {
          console.log(err);
          setSubmitted(false);
        }
      };
  return (
    <>
      <div className="flex space-x-8">
        <div className="w-[570px] ">
          {successAlert && (
            <Alert
              title="Profile Updated!"
              color="green"
              radius="lg"
              variant="filled"
            >
              Email or Password is Incorrect
            </Alert>
          )}
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="First Name*"
                placeholder={profile?.first_name}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.first_name}
                inputHandler={handleChange("first_name")}
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Last Name*"
                placeholder={profile?.last_name}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.last_name}
                inputHandler={handleChange("last_name")}
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Email*"
                placeholder={profile?.email}
                type="email"
                inputClasses="h-[50px]"
                value={credentials.email}
                inputHandler={handleChange("email")}
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Phone Number*"
                placeholder={profile?.phone_number}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.phone_number}
                inputHandler={handleChange("phone_number")}
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Country*"
                placeholder={profile?.country}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.country}
                inputHandler={handleChange("country")}
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Address*"
                placeholder={profile?.address}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.address}
                inputHandler={handleChange("address")}
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Town / City*"
                placeholder={profile?.town}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.town}
                inputHandler={handleChange("town")}
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Quater*"
                placeholder={profile?.quater}
                type="text"
                inputClasses="h-[50px]"
                value={credentials.quater}
                inputHandler={handleChange("quater")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="action-area flex space-x-4 items-center">
        <Button
          type="button"
          className="w-[164px] h-[50px] bg-qblack text-white text-sm"
          onClick={handleSubmit}
          loading={submitted}
        >
          Update Profile
        </Button>
      </div>
    </>
  );
}
