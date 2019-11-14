import React, { useState } from 'react';
import { Button } from 'antd';
import useDebounce from '..';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounce(() => {
    setValue(value + 1);
  }, 500);
  return (
    <div>
      <p
        style={{
          marginTop: 16,
        }}
      >
        {' '}
        Clicked count: {value}{' '}
      </p>
      <Button onClick={run}>Click fast!</Button>
    </div>
  );
};
