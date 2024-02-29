'use client'
import { Text } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";

interface TransactionProps {
  placeholder: string;
  action: string; 
}

export const Transaction: React.FC<TransactionProps> = ({ placeholder, action }) => {
  const handleSubmit = async () => {
    // Call the API route with the action
    const response = await fetch('/api/submitAction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action }),
    });

    const data = await response.json();
    console.log(data); // Handle the response
  };

  return (
    <div className="flex flex-col">
      <Text color="green">{placeholder}</Text>
      <Button onClick={handleSubmit} color="green">Submit</Button>
    </div>
  );
}