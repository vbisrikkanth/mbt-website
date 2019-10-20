import React from 'react';
import Carousel from 'nuka-carousel';
import Layout from '@theme/Layout';
import withBaseUrl from '@docusaurus/withBaseUrl';

function Screenshots() {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 200);
  return (
    <Layout title="Screenshots">
      <div className="container">
        <Carousel>
          <img src={withBaseUrl('img/screenshots/1.dashboard.png')} />
          <img src={withBaseUrl('img/screenshots/2.tasks.png')} />
          <img src={withBaseUrl('img/screenshots/3.bugs.png')} />
          <img src={withBaseUrl('img/screenshots/4.models.png')} />
          <img src={withBaseUrl('img/screenshots/5.predefined-cases.png')} />
          <img src={withBaseUrl('img/screenshots/6.users.png')} />
        </Carousel>
      </div>
    </Layout>
  );
}

export default Screenshots;
