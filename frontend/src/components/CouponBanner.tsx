import React from 'react';
// @ts-ignore
import ScrollVelocity from './ScrollVelocity';
import './CouponBanner.css';

interface CouponBannerProps {
  coupons?: string[];
}

const CouponBanner: React.FC<CouponBannerProps> = ({
  coupons = [
    '🎉 GET 20% OFF YOUR FIRST WASH CODE: SHINE2026'

  ]
}) => {
  return (
    <div className="coupon-banner">
      {/* @ts-ignore */}
      {React.createElement(ScrollVelocity, { texts: coupons })}
    </div>
  );
};

export default CouponBanner;
