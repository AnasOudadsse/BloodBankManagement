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
      <Box mb={10}>
        <Heading mb={4}>Frequently Asked Questions</Heading>
        <Accordion  allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
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
                <Box flex="1" textAlign="left" fontWeight='bold'>
                  Is donating blood safe?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, donating blood is safe. New, sterile equipment is used for each donor.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
                  Is donating blood safe?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, donating blood is safe. New, sterile equipment is used for each donor.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
                Will it hurt?                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Most people report feeling just a quick pinch when the needle is inserted and nothing during the donation itself. We make every effort to ensure your donation experience is comfortable            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
                What if I need my blood later?                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Your body quickly replenishes the blood components it loses during donation, typically within 24 to 48 hours. We ensure your health is not compromised.            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
                Will I feel sick after I donate?                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
           Most people feel fine after donating blood. It’s important to eat well and stay hydrated before and after your donation. If you feel light-headed, we have a resting area where you can relax until you feel better.            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight='bold'>
                Can I give blood if I received a COVID-19 vaccine?                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Yes, you can donate blood after receiving a COVID-19 vaccine, as long as you are symptom-free and meet all other donation eligibility requirements.            </AccordionPanel>
          </AccordionItem>
  
  
        </Accordion>
      </Box>
    );
  }
  
  