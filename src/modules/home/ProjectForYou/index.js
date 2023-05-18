import React, {useState, useEffect} from 'react';
import {Tabs} from 'antd';
import {fetchProjectForYou} from 'pages/api/projectForyou';
import TabPane from 'antd/es/tabs/TabPane';

const ProjectForYou = () => {
  const [project, setProject] = useState([]);
  const [itemGroup, setItemGroup] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchProjectForYou();
      setProject(resultData.data);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const list = [];
    project.forEach((ele, index) => {
      const value = {
        label: ele.realEstateType.name,
        key: index,
        children: ele.posts,
      };
      list.push(value);
    });
    setItemGroup(list);
  }, [project]);

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
  console.log('te', itemGroup);
  return (
    <>
      <section className='project-for-you mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h2 className='vars-title mb-0'>DỰ ÁN DÀNH CHO BẠN</h2>
          </div>
          <div className='var-section-tab'>
            <Tabs defaultActiveKey='1' onChange={onChange}>
              <TabPane tab='1' tabKey='1' key={1}>
                <h2>Tab 1</h2>
              </TabPane>
              <TabPane tab='2' tabKey='2' key={2}>
                <h2>Tab 2</h2>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectForYou;
