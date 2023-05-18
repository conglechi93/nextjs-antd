import React from 'react';
import {Tabs} from 'antd';

const ProjectArea = () => {
  const items = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <section className='project-for-you mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h2 className='vars-title mb-0'>DỰ ÁN THEO KHU VỰC</h2>
          </div>
          <div className='var-section-tab'>
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectArea;
