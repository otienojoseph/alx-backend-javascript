import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      if (results.status === 'fulfilled') {
        return {
          status: results.status,
          value: results.values,
        };
      }
      return {
        status: 'rejected',
        value: results.reason,
      };
    });
}
