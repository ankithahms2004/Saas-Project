import type { User } from '../features/Auth';
/**
 * Retrieves the display name of an admin panel user
 */
declare const getDisplayName: ({ firstname, lastname, username, email }?: Partial<User>) => string;
declare const hashAdminUserEmail: (payload?: User) => Promise<string | null>;
export { getDisplayName, hashAdminUserEmail };
