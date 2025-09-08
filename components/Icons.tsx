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
    <path stroke-linecap="round" stroke-linejoin="round" d="M547 2190q227 2 394-35 41-9 72.5-40.5t48-74 24.5-85.5 8-84v-589q0-156-70-349-17-46-64-112.5T868 700t-80.5-107.5T752 514V139q0-71-12.5-105T692 0H402q-36 0-48 33.5T342 139v375q0 25-35.5 78.5T226 700t-92 120.5T70 933Q0 1114 0 1282v589q0 41 8 83.5t24.5 85.5 47.5 74.5 72 40.5q164 37 395 35zM465 138h162v393q0 47 29 107.5T721.5 751 801 872.5 864 997q62 164 62 280v581q0 75-20 112t-83 48q-132 23-276 23t-276-23q-64-11-84-48t-20-112v-581q0-116 62-280 20-55 62.5-124.5T371 751t65.5-112.5T465 531V138z" />
  </BaseIcon>
));
