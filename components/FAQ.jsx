import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FAQ = () => {
  return (
    <div className="md:mx-10 mx-4">
      <div className="font-bold text-xl">FAQ’S RELATED TO MCQ</div>
      <div>
        <Accordion className="rounded overflow-hidden my-2">
          <AccordionSummary
            className="px-2 bg-zinc-100"
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Q1. MCQQUESTIONS.NET Objective?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MCQQUESTIONS.NET is useful for Students to Practice the MCQ
              Questions with Answers for Government Competitive exams Like UPSC,
              SSC, Banking, Railway and other Exams. Latest MCQ with Answers for
              NCERT Class 12, 11, 10, 9, Aptitude, Reasoning, English, General
              Knowledge, Computer, Engineering - Civil, Electrical, Mechanical,
              Electronics and Communication, ITI Mock Test. The Objective type
              Multiple Choice Questions over here will cover all important
              topics of all the middle and higher education.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="rounded overflow-hidden my-2">
          <AccordionSummary
            className="px-2 bg-zinc-100"
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              Q2. What is the best strategy while answering MCQ Questions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The best strategy to keep in mind while attempting MCQ Questions
              in Any exam is to try reading the question several times. Use the
              method of elimination and answer the question correctly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="rounded overflow-hidden my-2">
          <AccordionSummary
            className="px-2 bg-zinc-100"
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              Q3. Where can I get Multiple Choice Questions and Answers?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are plenty of resources out there MCQQUESTIONS.NET provides
              you MCQ Questions and Answers. However, you can find them on our
              site and direct links to access them are given for your
              convenience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="rounded overflow-hidden my-2">
          <AccordionSummary
            className="px-2 bg-zinc-100"
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> Q4. How do you write a MCQ Questions?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MCQ Questions are asked to know the depth of knowledge of the
              subject or topic. It includes the correct option of an answer or
              close to that question. To write an MCQ Question first you need to
              know the intent of the invigilator and then write your answer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
