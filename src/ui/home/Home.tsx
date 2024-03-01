import React from 'react';

export function Home() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const _val = localStorage.getItem('unload');

    console.log('SSS', value);

    setValue(_val || 'no value');

    const handleLoad = () => {
      console.log('unloaded');
      localStorage.setItem('unload', 'unloaded test');
    };
    window.addEventListener('beforeunload', handleLoad);
    return () => {
      window.removeEventListener('beforeunload', handleLoad);
    };
  }, []);

  return (
    <div>
      <p>SS value: {value}</p>
    </div>
  );
}
