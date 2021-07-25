/**
 * title: Default usage
 * desc: The function is called right after the component mount.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */

import { useMount, useToggle } from 'ahooks';
import { message } from 'antd';
import React from 'react';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle(false);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
