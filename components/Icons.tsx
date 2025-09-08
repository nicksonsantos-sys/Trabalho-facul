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
    <path d="M17 5a3 3 0 0 1 2 5.235V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6.764a3 3 0 0 1 1.824-5.231H17z" />
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
    <path d="M5 2h14l-1.64 16.398A4 4 0 0 1 13.38 22h-2.76a4 4 0 0 1-3.98-3.602L5 2Zm2.51 5l-.3-3h9.58l-.3 3H7.51Zm.2 2l.92 9.199A2 2 0 0 0 10.62 20h2.76a2 2 0 0 0 1.99-1.801L16.29 9H7.71ZM7 22q-.775 0-1.35-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.65 1.275T17 22H7ZM5.225 4L6.55 16h10.9l1.3-12H5.225Z" />
  </BaseIcon>
));

export const AlcoolIcon = createIcon<IconProps>(({ className, title }) => (
  <BaseIcon className={className} title={title}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.975 9H.025a4 4 0 0 1 .902-2.113l1.11-1.33A2 2 0 0 0 2.5 4.275V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.276a2 2 0 0 0 .464 1.28l1.109 1.331A4 4 0 0 1 9.975 9zM10 16v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2h10zm-8-5h6v3H2v-3z" />
  </BaseIcon>
));
