import React, {useState, useEffect} from 'react';
import {Tabs} from 'antd';
import {fetchProjectForYou} from 'pages/api/projectForyou';
import TabPane from 'antd/es/tabs/TabPane';
import TabPaneContent from './TabPaneContent';

const ProjectForYou = () => {
  const [project, setProject] = useState([]);
  const [currentTabPane, setCurrentTabPane] = useState();
  const [link, setLink] = useState('');
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchProjectForYou();
      setProject(resultData.data ?? []);
      setCurrentTabPane(0);
    };
    fetchAPI();
  }, []);

  const onChange = (key) => {
    setCurrentTabPane(key);
    const link = project[key]?.realEstateType?.metadata ?? '';
    setLink(link);
    // console.log('link', project[key].realEstateType.metadata);
  };

  return (
    <>
      <section className='project-for-you mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h2 className='vars-title mb-0'>DỰ ÁN DÀNH CHO BẠN</h2>
          </div>
          <div className='var-section-tab d-flex'>
            <div className='var-section-tab-inner'>
              <Tabs defaultActiveKey='1' onChange={onChange}>
                {project?.map((ele, index) => {
                  const currentProject = ele?.posts ?? [];
                  return (
                    <TabPane
                      tab={ele?.realEstateType?.name}
                      tabKey={ele?.realEstateType?.code}
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
            <a href={`du-an/${link}`} className='main-co text-readmore'>
              <span>Xem thêm</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.93994 13.2797L10.2866 8.93306C10.7999 8.41973 10.7999 7.57973 10.2866 7.06639L5.93994 2.71973'
                  stroke='#D1132A'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectForYou;
