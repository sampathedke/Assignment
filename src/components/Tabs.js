// src/Tabs.js
import React from 'react';
import { Tabs as MuiTabs, Tab, Card, CardContent } from '@mui/material';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Card className="shadow-lg rounded-lg bg-red-700 p-3">
      <CardContent className='bg-zinc-400'>
        <MuiTabs value={selectedTab} onChange={handleTabChange}>
          <Tab  label="About Me" style={{ color: 'white' }} />
          <Tab label="Experiences" style={{ color: 'white' }}/>
          <Tab label="Recommended" style={{ color: 'white' }}/>
        </MuiTabs>
        <div className="mt-4">
          {selectedTab === 0 && <p>About Me content goes here...</p>}
          {selectedTab === 1 && <p>Experiences content goes here...</p>}
          {selectedTab === 2 && <p>Recommended content goes here...</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default Tabs;
