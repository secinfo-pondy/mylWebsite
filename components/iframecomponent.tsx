import React from 'react';

interface IframeComponentProps {
  src: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  sandbox?: string;
  [key: string]: any;
}

const IframeComponent: React.FC<IframeComponentProps> = ({ 
  src, 
  width = '100%', 
  height = '400px', 
  title = 'Embedded content',
  className = '',
  loading = 'lazy',
  sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups',
  ...props 
}) => {
  if (!src) {
    return (
      <div className={`flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg ${className}`} 
           style={{ width, height }}>
        <p className="text-gray-500">No URL provided</p>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      title={title}
      className={`border-0 rounded-lg ${className}`}
      loading={loading}
      sandbox={sandbox}
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    />
  );
};

export default IframeComponent;