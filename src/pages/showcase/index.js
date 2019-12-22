import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Showcase() {
  return (
    <Layout title="Showcase">
      <div className="hero hero--primary">
        <div className="container">
          <div className="row">
            <div className="col col--5 margin-bottom--sm">
              <h1 className="hero__title">Showcase</h1>
              <p className="hero__subtitle">See how MBT Bundle work before start using it. Use <b>admin/admin</b> as credentials.</p>
              <div className="row">
                <div className="col">
                  <Link
                    className="button button--lg button--secondary"
                    to="https://github.com/tienvx/mbt-examples"
                    target="_blank"
                    >
                    Source code
                  </Link>
                  &nbsp;
                  <Link
                    className="button button--lg button--success"
                    to="https://demo.mbtbundle.org"
                    target="_blank"
                    >
                    Demo
                  </Link>
                  &nbsp;
                  <Link
                    className="button button--lg button--secondary"
                    to="https://github.com/tienvx/mbt-examples/archive/v1.13.0.zip">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--7">
              <img src={useBaseUrl('img/showcase.png')} alt="Mockup" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
