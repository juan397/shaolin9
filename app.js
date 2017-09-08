console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();


var argv = require('yargs')
.command('Create','Account creator',function (yargs){
	yargs.options({
		name: {
			demand: true,
			alias: 'n'
			description:'Enter your name here'
			type:'string'
		
		}
	username: {
		demand: true,
		alias: 'u',
		description:'Account username or email'
		type:'string'
	
	}

	password: {
		demand:true,
		alias:'p'
		description:'Account password'
		type:'string'
	},
	masterPassword: {

		demand: true,
		alias: 'm',
		description:'master password',
		type:'string'
	}
	}).help('help');
})
.command('get','Get an existing account',function (yargs){
yargs.options({
		name: {
			demand: true,
			alias: 'n'
			description:'Enter your name here'
			type:'string'
		},
		masterPassword: {

		demand: true,
		alias: 'm',
		description:'master password',
		type:'string'
	}

	
})
.help('help');
.argv;

function createAccount(account){
var accounts = storage.getItemSync('accounts');
if(typeof accounts ==='undefined'){
accounts = [];
//initially when there are no users.

}
accounts.push(account);
storage.setItemSync('accounts', accounts);
return account;
}

function getAccount(accountName){
var accounts = storage.getItemSync('accounts');
var matchedAccount;

accounts.forEach(function(account){
if(account.name === accountName){
	matchedAccount = account;
}

});

return matchedAccount;
}
if(command==='create'){
var createAccount = createAccount({
	//the reason we are creating a var here is so that everythin
	name:argv.name,
	username:argv.username,
	password:argv.password
});
//takes in an account object
}
else if(command==='get'){

}
var facebookAccount = getAccount('Facebook')
console.log(facebookAccount);
});
