import { BehaviorSubject } from 'rxjs';

import { users } from '../data/users';

const usersSubject = new BehaviorSubject(users);
const searchTermSubject = new BehaviorSubject('');

export const users$ = usersSubject.asObservable();
export const searchTerm$ = searchTermSubject.asObservable();

export const setSearchTerm = (searchTerm) => {
  searchTermSubject.next(searchTerm);
};
