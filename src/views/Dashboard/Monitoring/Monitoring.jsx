import React from 'react';
import MonitoringCard from './MonitoringCard';
import HealthStatus from './HealthStatus';
import ResourcesAlarm from './ResourcesAlarm';

import StorageIcon from '@mui/icons-material/Storage'; // Hal9000
import SettingsIcon from '@mui/icons-material/Settings'; // Optimus
import DnsIcon from '@mui/icons-material/Dns'; // Kitt2

import ClusterCard from './ClusterCard';

import ActiveServers from './ActiveServers';





const Monitoring = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Monitoring</h2>
          <p>Monitor systems and operations in real-time</p>
        </div>
        <button className="export-btn">⬇ Export</button>
      </div>

      {/* Top Cards */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <MonitoringCard
          title="Hal9000"
          description="In the last 7 days, the server health has been <strong style='color:green'>regular</strong> and health was good."
          value={33}
          change="+0.32%"
          color="#4CAF50"
          gaugeColor={['#EA4228', '#FFA500', '#4CAF50']}
          icon={<StorageIcon fontSize="large" />}
        />
        <MonitoringCard
          title="Optimus"
          description="This server has a warning because the load is very high at the moment.
"
          value={90}
          change="+0.32%"
          color="red"
          gaugeColor={['#ba7570', '#c44d45', '#f71202']}
          icon={<SettingsIcon fontSize="large" />}
          
        />
        <MonitoringCard
          title="Kitt2"
          description="The Kitt2 server has a very low load at the moment, similar to last 7 days."
          status="very low"
          bg="blue"
          textColor= "white"
          delta="+3.22%"
          value={63}
          change="+0.32%"
          color="black"
          gaugeColor={['#FFFFFF40', '#FFFFFF80', '	#FFFFFF']}
          icon={<DnsIcon fontSize="large" />}
        />
      </div>

      {/* Bottom Section */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <HealthStatus />
        <ResourcesAlarm />
      </div>

      {/* Cluster Cards */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ClusterCard
            logo="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            title="Mainframe Analytics Cluster for Visitors and Page Views"
            subtitle="Maintained for Netflix Inc."
            status="available"
            hosts={7}
            statusType="available"
          />
          <ClusterCard
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            title="Main Website Sales Monitoring Cluster Database"
            subtitle="Maintained for Google Corp."
            status="provisioning"
            hosts={15}
            statusType="provisioning"
          />
           <ClusterCard
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            title="Main Website Sales Monitoring Cluster Database"
            subtitle="Maintained for Google Corp."
            status="provisioning"
            hosts={15}
            statusType="provisioning"
          />
        </div>
    {/* Below other sections */}
    <ActiveServers />

    </div>
  );
};

export default Monitoring;
