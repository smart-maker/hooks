/**
 * title: Default usage
 * desc: Observe if the element is visible.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 监听元素是否在可见区域内
 */

import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';

export default () => {
  const ref = useRef();
  const [inViewPort] = useInViewport(ref);
  return (
    <div>
      <div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
        scroll here
        <div style={{ height: 800 }}>
          <div
            ref={ref}
            style={{
              border: '1px solid',
              height: 100,
              width: 100,
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            observer dom
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, color: inViewPort ? '#87d068' : '#f50' }}>
        inViewPort: {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};
