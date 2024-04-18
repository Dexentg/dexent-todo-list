#! /usr/bin/env node
console.log(chalk.cyanBright.bold(`\n \t\t    <<<<<========================================>>>>>`));
console.log(chalk.cyanBright.bold(`<<<<<==========>>>>>  ${chalk.bold.greenBright('WELCOME TO TODO LIST APP - MADE BY DEXENT GAMER  ')}<<<<<==========>>>>>`));
console.log(chalk.cyanBright.bold(`\t\t    <<<<<========================================>>>>>\n`));
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    const action = await inquirer.prompt([
        {
            name: "action1",
            type: "list",
            choices: ["ADD TASK", "EDIT TASK", "DELETE TASK", "EXIT"],
            message: "WHICH ACTION DO YOU WANT TO PERFORM?"
        }
    ]);
    //  FUNCTION FOR ADD TASK IN TODO LIST
    if (action.action1 === "ADD TASK") {
        let addtodos = await inquirer.prompt([
            {
                type: "input",
                name: "TODO",
                message: "WHAT DO YOU WANT TO ADD IN YOUR TODOS?"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "DO YOU WANT TO ADD MORE IN YOUR TODOS?",
                default: true
            },
        ]);
        todos.push(addtodos.TODO);
        condition = addtodos.addmore;
        console.log(chalk.magentaBright.bold("\n\t<<==================>>\n<<======>> YOUR TODO's LIST <<======>>\n\t<<==================>>\n"));
        todos.forEach((input, index) => {
            console.log(`${index + 1}:${input}`);
        });
    }
    //  FUNCTION FOR EDIT TASK IN TODO LIST
    else if (action.action1 === "EDIT TASK") {
        const edit_task = await inquirer.prompt([
            {
                name: "edit",
                type: "list",
                message: "SELECT THE TASK DO YOU WANT TO EDIT?",
                choices: todos
            },
            {
                name: "new",
                type: "input",
                message: "ENTER THE NEW TASK"
            }
        ]);
        const index = todos.indexOf(edit_task.edit);
        if (index !== -1) {
            todos[index] = edit_task.new;
            console.log(chalk.magentaBright.bold("\n<<======>> YOUR TODO's LIST <<======>>\n\t⬇⬇⬇⬇⬇\n"));
            todos.forEach((input, index) => {
                console.log(`${index + 1}:${input}`);
            });
        }
        else
            (console.log('INVALID TASK INDEX'));
    }
    //  FUNCTION FOR DELETE TASK IN TODO LIST
    else if (action.action1 === "DELETE TASK") {
        const delete_task = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: "SELECT THE TASK DO YOU WANT TO DELETE?",
                choices: todos
            }
        ]);
        let deleted_task = todos.splice(delete_task.delete, 1);
        console.log(`\n"${deleted_task}" ${chalk.bold.redBright('this task has been successfully deleted from your todos list')}`);
        console.log(chalk.magentaBright.bold("\n<<======>> YOUR TODO's LIST <<======>>\n\t⬇⬇⬇⬇⬇\n"));
        todos.forEach((input, index) => {
            console.log(`${index + 1}:${input}`);
        });
    }
    else if (action.action1 === "EXIT") {
        condition = false;
    }
}
console.log(chalk.yellowBright('\nTHANK YOU FOR YOUR PRECIOUS TIME\n\t<<======>>  HAVE A NICE DAY <<======>>'));
