import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CiCircleMinus } from "react-icons/ci"; // Import the Circle Minus icon
import "./Accordation.css";

const MyAccordion = () => {
  const [expandedPanel, setExpandedPanel] = useState(null); // Initialize state variable

  // Function to handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <>
      <Accordion className='accordation-component' expanded={expandedPanel === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expandedPanel === 'panel1' ? <CiCircleMinus /> : <AddIcon />} // Change expand icon based on accordion state
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id='typo'>Do you offer freelancers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If unhappy with a project, communicate with the freelancer, allow for revisions, and 
            refer to the agreement. Escalate to platform support if needed, considering
            mediation. Review policies, seek collaborative solutions for resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className="divider" />
      <Accordion className='accordation-component' expanded={expandedPanel === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expandedPanel === 'panel2' ? <CiCircleMinus /> : <AddIcon />} // Change expand icon based on accordion state
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography id='typo'>What’s the guarantee that I will be satisfied with the hired talent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Content for second accordion item */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className="divider" />
      <Accordion className='accordation-component' expanded={expandedPanel === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expandedPanel === 'panel3' ? <CiCircleMinus /> : <AddIcon />} // Change expand icon based on accordion state
          aria-controls="panel3a-content"
          id="panel1a-header"
        >
          <Typography id='typo'>Can I hire multiple talents at once??</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If unhappy with a project, communicate with the freelancer, allow for revisions, and 
            refer to the agreement. Escalate to platform support if needed, considering
            mediation. Review policies, seek collaborative solutions for resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className="divider" />
      <Accordion className='accordation-component' expanded={expandedPanel === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={expandedPanel === 'panel4' ? <CiCircleMinus /> : <AddIcon />} // Change expand icon based on accordion state
          aria-controls="panel4a-content"
          id="panel1a-header"
        >
          <Typography id='typo'>Why should I not go to an agency directly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If unhappy with a project, communicate with the freelancer, allow for revisions, and 
            refer to the agreement. Escalate to platform support if needed, considering
            mediation. Review policies, seek collaborative solutions for resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className="divider" />
      <Accordion className='accordation-component' expanded={expandedPanel === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={expandedPanel === 'panel5' ? <CiCircleMinus /> : <AddIcon />} // Change expand icon based on accordion state
          aria-controls="panel5a-content"
          id="panel1a-header"
        >
          <Typography id='typo'>Who can help me pick a right skillset and duration for me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Content for fifth accordion item */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr className="divider" />
    </>
  );
};

export default MyAccordion;
