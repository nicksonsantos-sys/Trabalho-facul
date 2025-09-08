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
    <path d="M12 12v8m0-8v1h3a6 6 0 0 0 6-6V6h-3a6 6 0 0 0-6 6m0-2v1H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6" />
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
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </BaseIcon>
));
