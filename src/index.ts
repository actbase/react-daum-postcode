import app from './app';

const { name, version, homepage } = require('../package.json');
console.log(`
   ___  ______________  ___   ________
  / _ |/ ___/_  __/ _ )/ _ | / __/ __/
 / __ / /__  / / / _  / __ |_\\ \\/ _/  
/_/ |_\\___/ /_/ /____/_/ |_/___/___/ 
 
${name} ${version} :: Actbase Opensources.
Contact us -> project@actbase.io
> https://actbase.io/opensource
> ${homepage}
`);

export const Postcode = app;

export default Postcode;
