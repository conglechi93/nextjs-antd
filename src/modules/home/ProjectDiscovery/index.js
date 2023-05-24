import React, {useState, useEffect} from 'react';
import {Tabs} from 'antd';
import {fetchProjectDiscovery} from 'pages/api/projectDiscovery';
import TabPane from 'antd/es/tabs/TabPane';
import TabPaneContent from './TabPaneContent';

const ProjectForYou = () => {
  const [project, setProject] = useState([]);
  const [currentTabPane, setCurrentTabPane] = useState();
  const [link, setLink] = useState('');
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchProjectDiscovery();
      setProject(resultData.data ?? []);
      setCurrentTabPane(0);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    if (project) {
      const link = project[0]?.code ?? '';
      setLink(link);
    }
  }, [project]);

  const onChange = (key) => {
    setCurrentTabPane(key);
    const link = project[key]?.code ?? '';
    setLink(link);
  };

  return (
    <>
      <section className='project-for-you mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h3 className='text-black mb-0'>KHÁM PHÁ DỰ ÁN</h3>
            <a href={`du-an/${link}`} className='main-co btn-readmore'>
              <span>Xem thêm</span>
            </a>
          </div>
          <div className='var-section-tab d-flex'>
            <div className='var-section-tab-inner'>
              <Tabs defaultActiveKey='1' onChange={onChange} type='card'>
                {project?.map((ele, index) => {
                  const currentProject = ele?.childItems ?? [];
                  return (
                    <TabPane
                      className='nav-tab'
                      tab={ele?.name}
                      tabKey={ele?.code}
                      key={index}
                    >
                      <TabPaneContent
                        keyTabPane={index}
                        currentTabPane={currentTabPane}
                        currentProject={currentProject}
                      />
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectForYou;
