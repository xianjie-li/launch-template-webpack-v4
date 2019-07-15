import React, { useState } from 'react';

import Form from '@/components/Form/index';

import createVerify from '@/components/Form/useVerify';

const useVerify = createVerify({
  // language: 'en',
});

const rules = {
  name: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 5,
    },
  },
  desc: {
    presence: true,
    length: {
      minimum: 5,
      maximum: 100,
    },
  },
  time: {
    datetime: {
      latest: '2019-06-04',
    },
  },
};

const Demo = () => {

  let [isCol, setIsCol] = useState(true);

  let [bonus, setField, verify] = useVerify(rules, {
    name: 'l',
  });

  return (
    <div>
      <div>
        <button onClick={() => setIsCol(p => !p)}>切换布局</button>
      </div>

      <Form layout={isCol ? 'col' : 'row'} onSubmit={(e) => {
        e.preventDefault();
        console.log(verify.verify());
      }}>
        <Form.Title title="基本信息" desc="输入您的基本信息，用于xxxxxxxxxxxxxxxxx" />
        <Form.Item
          {...bonus.name}
          hasFeedback
          hasArrow
          label="姓名">
          <input
            type="text"
            value={verify.model.name}   // 如果包含默认值，可以将其配置为受控组件。 * 对于对value类型有特殊要求的组件（如antd的picker需要value为moment对象，直接在初始化时使用defaulValue指定值即可
            onChange={({ target }) => {
              setField('name', target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          {...bonus.desc}
          hasFeedback
          label="简介">
          <input type="text" onChange={({ target }) => {
            setField('desc', target.value);
          }}
          />
        </Form.Item>
        <Form.Item
          {...bonus.time}
          label="出生日期"
          hasFeedback>
          <input type="datetime-local" onChange={({ target }) => {
            setField('time', target.value);
          }}
          />
        </Form.Item>
        <Form.Foot>
          <button type="submit">submit</button>
          <button type="reset">reset</button>
        </Form.Foot>
      </Form>
    </div>
  );
};

export default Demo;