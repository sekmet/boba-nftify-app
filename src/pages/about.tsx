import { useEffect, useState, Fragment } from 'react';

import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  // const router = useRouter();
  const [blockNumber, setBlockNumber] = useState<number | undefined>(0);
  const { account } = useEthers();
  const { timestamp } = useBlockMeta();
  const blocknumber = useBlockNumber();

  useEffect(() => {
    setBlockNumber(blocknumber);
  }, [blocknumber]);

  return (
    <Dashboard
      auth={true}
      meta={
        <Meta
          title="Boba Nftify"
          description="Allows users on Boba to easily deploy and engage with Arweave via Bundlr, using BOBA tokens"
        />
      }
    >
      <div className="max-w-none prose prose-slate dark:prose-invert">
        <h1 className="text-2xl font-bold">
          Boilerplate code for your NextJS 12.x + Typescript + Ethers v5.x +
          Tailwind CSS v3.x for <i>Web3</i> using <i>Ethereum</i> network.
        </h1>
        <p className="leading-text">
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Next.js Boilerplate is a starter code for your Next js project for
          Web3 by putting developer experience first .<br />
          <span role="img" aria-label="zap">
            ⚡️
          </span>{' '}
          Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
          VSCode, Netlify, PostCSS, Tailwind CSS,and Ethers.
        </p>
        {account && blockNumber && (
          <Fragment>
            <h2 className="-mt-3 mb-1 text-xl font-bold">Block number</h2>
            <h3 className="font-bold">
              <span className="inline-flex relative items-center py-0.5 px-2.5 text-lg font-medium text-green-400 bg-green-100 rounded-md">
                <svg
                  className="mt-1 -ml-0.5 w-6 h-6 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 10 10"
                >
                  <circle cx={4} cy={4} r={2} />
                </svg>
                <span className="inline-flex absolute top-2 left-2.5 w-4 h-4 bg-green-300 rounded-full opacity-75 animate-ping"></span>
                {`📦 ${blockNumber}`}
              </span>
              <br />
              <i className="text-xs">[ {`${timestamp}`} ]</i>
            </h3>
          </Fragment>
        )}
      </div>
    </Dashboard>
  );
};

export default Index;
