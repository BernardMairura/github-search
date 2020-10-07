// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"https://api.github.com/users/",
  apiRepos:"/repos?access_token=597ce780a01b7e3e5ce4038396817bedb60d5a0a",
  apiKey:"?access_token=597ce780a01b7e3e5ce4038396817bedb60d5a0a",

  //'https://api.github.com/users/daneden?access_token=' + apiKey
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
