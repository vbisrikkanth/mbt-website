/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Test Early</>,
    imageUrl: 'img/undraw_under_construction.svg',
    description: (
      <>
        Stop waiting for the code to be available to be able to create test cases.
        Start creating models from your business logic, let us generate test cases for you.
      </>
    ),
  },
  {
    title: <>Focus on Your Business</>,
    imageUrl: 'img/undraw_design_sprint.svg',
    description: (
      <>
        All you need to do is designing your models, we&apos; ll take care the rest, from generating test cases,
        to reporting bug to external places (Slack, Email).
      </>
    ),
  },
  {
    title: <>Time Saving</>,
    imageUrl: 'img/undraw_time_management.svg',
    description: (
      <>
        MBT Bundle can test multiple models at the same time. Don&apos; t worry if you created a lot of models.
      </>
    ),
  },
];

const steps = [
  {
    title: <>Build Model</>,
    imageUrl: 'img/build_model.gif',
    description: (
      <>
        Build models from your system. You can either choose from:
        <ul>
          <li>State Machine (for simple logic)</li>
          <li>Workflow (for complex logic)</li>
          <li>Combine them (for very complex logic)</li>
        </ul>
      </>
    ),
    position: 'left'
  },
  {
    title: <>Create Task</>,
    imageUrl: 'img/create_task.gif',
    description: (
      <>
        Provide information so that MBT Bundle can test the system for you. All
        it need are:
        <ul>
          <li>Title (describe your task)</li>
          <li>Model (created above)</li>
          <li>Generator (how to test your system)</li>
          <li>Reducer (how to reduce the reproduce steps)</li>
          <li>Reporter (do you want to notify the bug if found?)</li>
          <li>Take Screenshot (do you want screenshot for each step?)</li>
        </ul>
      </>
    ),
    position: 'right'
  },
  {
    title: <>Manage Bug</>,
    imageUrl: 'img/manage_bug.gif',
    description: (
      <>
        You can verify the bug that MBT Bundle found before reporting it. These
        action are here to help you:
        <ul>
          <li>Edit (the title)</li>
          <li>Capture Screenshots</li>
          <li>Reduce (make the reproduce steps even shorter)</li>
          <li>Report (notify if it is actually a bug)</li>
          <li>Close</li>
          <li>Re-open</li>
        </ul>
      </>
    ),
    position: 'left'
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Step({imageUrl, title, description, position}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
      <>
        {position === 'left' && (
          <div className="row">
            <div className="col col--7">
              <div className="text--center">
                <img src={imgUrl} alt={title} />
              </div>
            </div>
            <div className="col col--4 col--offset-1 padding-vert--xl">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
        {position === 'right' && (
          <div className="row">
            <div className="col col--4 padding-vert--xl">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="col col--7 col--offset-1">
              <div className="text--center">
                <img src={imgUrl} alt={title} />
              </div>
            </div>
          </div>
        )}
      </>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Home Page`}
      description={siteConfig.tagline}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col padding-top--lg">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/beginner/start-examples-project')}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col text--center">
              <img alt="Hero Logo" src="img/undraw_user_flow_vr6w.svg" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {steps && steps.length && (
          <section className={styles.steps}>
            <div className="container">
              {steps.map((props, idx) => (
                <Step key={idx} {...props} />
              ))}
            </div>
          </section>
        )}
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
