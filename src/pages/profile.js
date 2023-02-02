"use client";
import UploadIcon from "@/assets/svgs/UploadIcon";
import Card from "@/components/atoms/Card";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import Router from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUserData(data);
    } else {
      Router.push("/signin");
    }
  }, []);

  return (
    <>
      <div id="profile">
        <Card className="profileInfoCard">
          <div>
            <p>Name: {userData?.name}</p>
            <p>Role: {userData?.role}</p>
            <p>Email: {userData?.email}</p>
          </div>
          <SecondaryButton type="submit">
            <UploadIcon /> Update
          </SecondaryButton>
        </Card>
      </div>
    </>
  );
};

export default Profile;
