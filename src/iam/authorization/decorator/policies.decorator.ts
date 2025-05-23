import { Policy } from '../policies/interfaces/policy.interface';
import { SetMetadata } from '@nestjs/common';

export const POLICIES_KEY = 'policies';

export const Policies = (...policies: Policy[]) => {
  return SetMetadata(POLICIES_KEY, policies);
};
