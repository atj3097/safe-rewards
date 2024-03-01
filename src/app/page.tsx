import React from 'react';
import { Transaction } from './components/transaction';
import { XdaiBalance } from './components/xdai_balance';
import TopUpCheckbox from './components/top_up_checkbox';
import GetAirdropTokens from './components/get_airdrop_tokens';
import ClaimPoints from './components/claim_points';
import { purchaseOptions } from './point_actions';
import { Text } from '@radix-ui/themes';
import { Card } from '@radix-ui/themes';

const renderOptions = purchaseOptions.map((option) => {
  return (
    <div key={option.task} className="mb-4"> {/* Add margin-bottom for spacing */}
      <Transaction
        placeholder={option.task}
        action={option.action}
      />
    </div>
  );
});

export default function Home() {
  return (
    <>
      <div className="w-full p-4 fixed top-0 left-0 bg-white z-10 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between ">
          <Text color='green' className="text-2xl font-bold">Loyalty Rewards w/ Safe Smart Account</Text>
          <div className="flex items-center justify-between w-1/3">
            <XdaiBalance balance="4.00" />
            <ClaimPoints />
          </div>
        </div>
      </div>
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-white"> 
      <div className="flex flex-col w-full p-6"> 
        <Card className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg mx-auto"> 
          <div className="mb-6"> 
            <TopUpCheckbox />
          </div>
          <div className="flex flex-col w-full mb-6">
            {renderOptions}
          </div>
          <div className="w-full p-6"> 
            <GetAirdropTokens />
          </div>
        </Card>
      </div>
    </main>
    </>
  );
}
