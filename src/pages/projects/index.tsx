import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React, { useState } from "react";
import myData from "@/data/porfolioDatas";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <Layout title="My projects">
        <div className="mt-12 md:mt-32 px-4 md:px-0 w-full">
          <Title width="w-[85px] md:w-[200px]" />
          <motion.div
            
            animate={{ x: 0 }}
            initial={{ x: 200 }}
            className="mt-7 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
          >
            {myData
              .map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.header}
                  slug={item.slug}
                />
              ))
              .reverse()}
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;