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
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-white"> {/* Adjust styles for centering */}
      <div className="flex flex-col w-full p-6"> 
        <div className="flex justify-between items-center mb-6">
          <Text color='green' className="text-2xl font-bold">Loyalty Rewards w/ Safe Smart Account</Text>
          <ClaimPoints />
        </div>
        <Card className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg mx-auto"> {/* Card component wrapping the content */}
          <div className="mb-6">
            <XdaiBalance balance="4.00" />
          </div>
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
  );
}
