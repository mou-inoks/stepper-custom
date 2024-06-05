import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline() {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    return (
        <Timeline>
            <TimelineItem>
            Facility
            <button onClick={() => {
                    setSecond(false)
                    setFirst(true)
                    setThird(false)
                }}>  <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator></button>
                {first && <TimelineContent>
                    this is {first ? "true": "false"}
                </TimelineContent>}

            </TimelineItem>
            <TimelineItem>
            Facility
                <button onClick={() => {
                    setSecond(true)
                    setFirst(false)
                    setThird(false)
                }}>  <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator></button>
              
                {second &&<TimelineContent>
                    this is {second ? "True" : "False"}
                </TimelineContent> }
                
            </TimelineItem>
            <TimelineItem>
            Facility
            <button onClick={() => {
                    setSecond(false)
                    setFirst(false)
                    setThird(true)
                }}>  <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator></button>
                {third && <TimelineContent>
                    this is {third ? "True" : "False"}
                </TimelineContent>}
                
            </TimelineItem>
        </Timeline>
    );
}