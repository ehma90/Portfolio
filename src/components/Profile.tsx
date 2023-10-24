import { Text, Link } from "@/reusable-components";
import React from "react";

function Profile() {
  return (
    <ul className=" px-3 text-md md:text-lg w-full md:max-w-2xl">
      <li className="leading-7">
        Hi 👋🏽, I&apos;m{" "}
        <span className="text-green-900 font-semibold ">Emmanuel,</span> a
        software engineer that specializes in web and mobile application&apos;s
        front-end.
      </li>
      <li className="leading-7">
        I build side projects 👨🏽‍💻, you can find it in{" "}
        <Link
          href="https://github.com/ehma90"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-green-900 underline decoration-1"
        >
          my Github
        </Link>{" "}
        repository.
      </li>
      <li className="leading-7">
        Available for jobs 🫱🏻‍🫲🏾 and collaborations.
      </li>
      <li>
        Join me on{" "}
        <Link
          href="https://twitter.com/ehmaessieen"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-green-900 underline decoration-1"
        >
          Twitter
        </Link>{" "}
        🕊️, where I share tweets about things I like and memes.
      </li>
      <li>
        Feel free to send an{" "}
        <Link
          href="mailto:ehmaessien@gmail.com"
          target="_blank"
          rel="noreferrer"
          className=" font-semibold text-green-900 underline decoration-1"
        >
          Email
        </Link>{" "}
        📧
      </li>
    </ul>
  );
}

export default Profile;
