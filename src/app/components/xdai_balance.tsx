import { Text } from "@radix-ui/themes";

interface XdaiBalanceProps {
    balance: string;
  }
  
  export const XdaiBalance: React.FC<XdaiBalanceProps> = ({ balance }) => {
    return (
        <div className="flex flex-col">
        <Text> xDai Balance: `${balance}`</Text>
        </div>
    );
}