import { Policy } from './interfaces/policy.interface';
import { Injectable } from '@nestjs/common';
import { PolicyHandler } from './interfaces/policy-handler.interface';
import { PolicyHandlersStorage } from './policy-handlers.storage';
import { ActiveUserData } from '../../interfaces/active-user-data.interface';

export class FrameworkContributorsPolicy implements Policy {
  name = 'FrameworkContributor';
}

@Injectable()
export class FrameworkContributorsPolicyHandler
  implements PolicyHandler<FrameworkContributorsPolicy>
{
  constructor(private readonly policyHandlerStorage: PolicyHandlersStorage) {
    this.policyHandlerStorage.add(FrameworkContributorsPolicy, this);
  }

  async handle(
    policy: FrameworkContributorsPolicy,
    user: ActiveUserData,
  ): Promise<void> {
    const isContributor = user.email.endsWith('@example.com');

    if (!isContributor) {
      throw new Error('User is not a contributor');
    }
  }
}
