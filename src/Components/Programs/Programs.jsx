import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
// import program_icon_1 from '../../assets/program-icon-1.png';
// import program_icon_2 from '../../assets/program-icon-2.png';
// import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs'> 
      <div className='program'>
        <img src={program_1} alt="Solar Farm" className="program-image" />
        <div className="caption">
          {/* <img className="icon" src={program_icon_1} alt="Solar Icon" /> */}
          <p>Solar Farm</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt="Wind Farm" className="program-image" />
        <div className="caption">
          {/* <img className="icon" src={program_icon_2} alt="Wind Icon" /> */}
          <p>Wind Farm</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt="Post Graduation" className="program-image" />
        <div className="caption">
          {/* <img className="icon" src={program_icon_3} alt="Graduation Icon" /> */}
          <p>BioEnergy</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
