"use client";

import { useSession } from "next-auth/react";

const UserWelcomeCard = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-semibold shadow-md">
          {getInitials(user?.name || user?.email || "User")}
        </div>
      </div>
      <p className="font-semibold ml-2 text-gray-800">
        Hi{user?.name ? `, ${user.name}` : ""}
      </p>
    </div>
  );
};

export default UserWelcomeCard;
