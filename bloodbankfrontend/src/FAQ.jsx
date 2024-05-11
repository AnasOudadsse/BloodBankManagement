import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text
  } from '@chakra-ui/react';
  
  export function FAQ() {
    return (
      <Box>
        <Heading mb={4}>Frequently Asked Questions</Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What if I’m afraid of needles?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Many people feel a bit anxious about needles, but the process is usually quick and painless.
            </AccordionPanel>
          </AccordionItem>
  
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Is donating blood safe?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, donating blood is safe. New, sterile equipment is used for each donor.
            </AccordionPanel>
          </AccordionItem>
  
          {/* Add more AccordionItems similar to the above for each question */}
  
        </Accordion>
      </Box>
    );
  }
  
  