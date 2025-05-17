import { Role } from '../../users/enums/role.enums';
import { PermissionType } from '../authorization/permission.type';

export interface ActiveUserData {
  /**
   * The "subject" of the token. the value of this property is what is the user ID
   * that granted this token.
   * */
  sub: number;

  /**
   * The subject's (user) email.
   * */
  email: string;

  /**
   * The subject's (user) role.
   * */
  role: Role;

  permissions: PermissionType[];
}
