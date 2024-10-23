import React from "react";
import portrait from "../assets/portrait.png";

function About() {
  return (
    <div className="font-rubik text-customTeal pb-56">
      <h1 className="mb-8 font-bold text-3xl">About Me</h1>
      <div className="flex flex-col sm:flex-row justify-between space-y-10 sm:space-y-0 sm:space-x-16">
        <img
          src={portrait}
          alt="Portrait"
          className="relative w-auto max-w-full h-[30vh] object-contain"
        />
        <p className="text-justify">
          My name is Keith Florence Martin, a recent graduate with a Bachelor’s
          degree in Computer Science from the University of the Philippines Los
          Baños. I have a strong foundation in front-end development and
          hands-on experience in fullstack projects.
          <br />
          <br />I thrive in a growth-oriented environment and am eager to
          continue expanding my technical expertise while contributing to
          innovative digital solutions.
          <br />
          <br />
          When I’m not coding, you can find me diving into worlds of fantasy and
          science fiction books, or catching up with the One Piece anime.
        </p>
      </div>
    </div>
  );
}

export default About;
