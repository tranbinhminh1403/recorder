"use client";
import React from "react";
import { motion } from "framer-motion";
const Animation = () => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        className="square"
        initial={{ scale: 0, x: 0, y: 0 }}
        animate={{ scale: 1, x: 100, y: 100 }}
        transition={{ duration: 2 }}

      ></motion.div>
    </div>
  );
};

export default Animation;
