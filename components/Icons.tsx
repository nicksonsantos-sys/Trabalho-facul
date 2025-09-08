import React from 'react';

interface IconProps {
  className?: string;
  title?: string;
}

// FIX: Removed trailing comma from generic type parameter list.
const createIcon = <P extends IconProps>(IconComponent: React.FC<P>): React.FC<P> => {
  return (props: P) => <IconComponent {...props} />;
};

const BaseIcon: React.FC<IconProps & { children: React.ReactNode }> = ({ className = 'h-5 w-5', title, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden={!title}
    role={title ? 'img' : 'presentation'}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);

// FIX: Removed trailing comma from generic type argument list.
export const StarIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path fillRule="evenodd" d="M10 1.155l2.49 5.045 5.56.808-4.023 3.92.95 5.538L10 13.497l-4.978 2.97 1.05-5.538L1.95 7.008l5.56-.808L10 1.155z" clipRule="evenodd" />
  </BaseIcon>
));

// FIX: Removed trailing comma from generic type argument list.
export const SoyIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path d="M10 2a8 8 0 00-8 8c0 2.21.9 4.21 2.34 5.66A8 8 0 0010 18a8 8 0 005.66-2.34A8 8 0 0018 10a8 8 0 00-8-8zm-1.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-3-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </BaseIcon>
));

// FIX: Removed trailing comma from generic type argument list.
export const GlutenIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM9 14.5a1.5 1.5 0 01-3 0V12a1.5 1.5 0 013 0v2.5zm1.5-3a1.5 1.5 0 010-3H12V7a1.5 1.5 0 013 0v1.5h-1.5a1.5 1.5 0 010 3z" />
  </BaseIcon>
));

// FIX: Removed trailing comma from generic type argument list.
export const EggIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path d="M19 14.083c0 4.154-2.966 6.74-7 6.917c-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3c3.5.007 7 5.545 7 11.083z" />
  </BaseIcon>
));

// FIX: Removed trailing comma from generic type argument list.
export const MilkIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm4 3a1 1 0 00-1 1v1.586l-1.707 1.707a1 1 0 001.414 1.414L9 9.414V11a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414L12 8.586V6a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </BaseIcon>
));

export const AlcoolIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M500 2000q-253 2-394-26q-48-10-77-64T0 1784v-399q0-151 42-291t99-193q60-56 124.5-159T343 592v-20h318v20q13 47 77.5 150T863 901q56 53 96.5 192.5T1000 1385v399q0 73-27.5 127t-74.5 63q-141 28-398 26zM394 0h217q17 0 26 3t16.5 18.5T661 66v386H343V66q0-29 7.5-44.5t17-18.5T394 0z" />
  </BaseIcon>
));
