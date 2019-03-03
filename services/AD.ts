var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://dc.domain.com',
               baseDN: 'dc=DMD,dc=com',
               username: '',
               password: '' }
var ad = new ActiveDirectory(config);

