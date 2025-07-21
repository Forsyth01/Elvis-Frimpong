import React from 'react';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';

const Skills = () => {
  return (
    <div id='skills' className='space-y-2  w-[85%] m-auto'>
      <div className="">
        <h1 className="text-center text-3xl font-semibold tracking-tighter">Skills</h1>
      </div>
      <div className="flex item text-sm justify-center">
      <TechnicalSkills/>
      <SoftSkills/>
      </div>
    </div>
  );
};

export default Skills;