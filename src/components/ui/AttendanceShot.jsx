import React from 'react';
import AppShot from './AppShot';
import src from '../../assets/app-attendance.webp';

export default function AttendanceShot(props) {
  return (
    <AppShot
      src={src}
      width={1660}
      height={948}
      alt="Bluetyk Today's Attendance screen with live punches, present, absent and late counts, and a punch log table"
      {...props}
    />
  );
}
