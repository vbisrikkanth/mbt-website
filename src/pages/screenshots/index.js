import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import classnames from 'classnames';

function Screenshots() {
  return (
    <Layout title="Screenshots">
      <div className={classnames('container', styles.bulletsSpace)}>
        <AwesomeSlider>
          <div data-src={useBaseUrl('img/screenshots/1.dashboard.png')} />
          <div data-src={useBaseUrl('img/screenshots/2.tasks.png')} />
          <div data-src={useBaseUrl('img/screenshots/3.bugs.png')} />
          <div data-src={useBaseUrl('img/screenshots/4.models.png')} />
          <div data-src={useBaseUrl('img/screenshots/5.predefined-cases.png')} />
          <div data-src={useBaseUrl('img/screenshots/6.users.png')} />
        </AwesomeSlider>
      </div>
    </Layout>
  );
}

export default Screenshots;
