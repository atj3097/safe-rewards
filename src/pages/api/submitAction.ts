// src/pages/api/submitAction.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Assuming you send the action as a query parameter or in the body
  const { action } = req.body;

  // Call the appropriate function based on the action
  if (action === 'purchaseCoffee') {
    // Call purchaseCoffee function
  } else if (action === 'purchaseBurger') {
    // Call purchaseBurger function
  } 

  res.status(200).json({ message: 'Action submitted successfully' });
}