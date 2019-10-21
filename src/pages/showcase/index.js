import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import withBaseUrl from '@docusaurus/withBaseUrl';

function Showcase() {
  return (
    <Layout title="Showcase">
      <div class="hero hero--primary">
        <div class="container">
          <div class="row">
            <div class="col col--5 margin-bottom--sm">
              <h1 class="hero__title">Showcase</h1>
              <p class="hero__subtitle">See how MBT Bundle work before start using it. Use <b>admin/admin</b> as credentials.</p>
              <div class="row">
                <div class="col">
                  <Link
                    class="button button--lg button--success"
                    to="http://demo.mbtbundle.org"
                    target="_blank"
                    >
                    Demo
                  </Link>
                  &nbsp;
                  <Link
                    class="button button--lg button--secondary"
                    to="https://github.com/tienvx/mbt-examples"
                    target="_blank"
                    >
                    Source code
                  </Link>
                  &nbsp;
                  <Link
                    class="button button--lg button--secondary"
                    to="https://github.com/tienvx/mbt-examples/archive/v1.13.0.zip">
                    Download
                  </Link>
                </div>
              </div>
            </div>
            <div class="col col--7">
              <img src={withBaseUrl('img/showcase.png')} alt="Mockup" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
