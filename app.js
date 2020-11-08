const { arg } = require('./config/yargs');
let addDescription = require('./to-do/to-do')

const command = arg._[0]

switch (command) {


    case 'create':
        let homework = addDescription.addDescription(arg.d);
        break;


    case 'list':


        let list = addDescription.listHomeworks();
        for (let homework of list) {
            console.log("=========homework========");
            console.log("name:", homework.description);
            console.log("complete:", homework.complete);
            console.log("=========================");
        }
        break;


    case 'uptade':
        let uptadeFunction = addDescription.uptadeHomeworks(arg.d, arg.complete);


        if (uptadeFunction) {
            console.log("uptaded correctly");

        } else {
            console.log("not exist the homework")
        }



        break;

    case 'delete':

        let eliminate = addDescription.deleteHomework(arg.h);
        if (eliminate) {
            console.log("eliminated correctly");
        }
        break;


    default:
        console.log("command not recognized");
}