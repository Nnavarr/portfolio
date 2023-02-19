import React from "react";
import { saveAs } from 'file-saver';

const Resume = () => {
  // download function
  const downloadPDF = () => {
    const pdfPath = 'src/assets/docs/noe_navarro_resume.pdf'
    const pdfUrl = new URL(pdfPath, window.location.origin).href;
    saveAs(pdfUrl, 'noe_navarro_resume.pdf');
  }

  return(
    <section className='resume'>
      <h2><a href={pdf}>Resume</a></h2>
    </section>
  )
}

export default Resume;