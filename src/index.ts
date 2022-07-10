import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BankrAqTwZoVvyCLC9jvvkCLKVD9fpYig9Rrb5eefwmP'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'FARmwqYvJnbDGsHYr7DoPiw3ToxBg1rH1SMKHkAXKyEE'
);
