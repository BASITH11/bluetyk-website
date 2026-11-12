import React from 'react';
import AppShot from './AppShot';
import src from '../../assets/app-dashboard.webp';

export default function DashboardShot(props) {
  return (
    <AppShot
      src={src}
      width={1659}
      height={948}
      alt="Bluetyk dashboard showing today's check-ins, devices online, 7-day attendance chart and recent activity"
      {...props}
    />
  );
}
