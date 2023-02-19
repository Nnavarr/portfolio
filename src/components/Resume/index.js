import React from "react";
import { saveAs } from 'file-saver';
import myResume from '../../assets/docs/noe_navarro_resume.pdf';

const Resume = () => {
  // download function
  const downloadPDF = () => {
    saveAs(myResume, 'noe_navarro_resume.pdf');
  }

  return(
    <section className='resume'>
      <button
        onClick={downloadPDF}
      >
        Resume
      </button>
    </section>
  )
}

export default Resume;