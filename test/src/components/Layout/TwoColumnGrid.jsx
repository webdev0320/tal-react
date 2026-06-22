"use client";
import React from 'react';

const TwoColumnGrid = ({ left, right, reverse = false }) => (
  <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="order-2 md:order-1">{left}</div>
    <div className="order-1 md:order-2">{right}</div>
  </div>
);

export default TwoColumnGrid;
