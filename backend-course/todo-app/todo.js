import fs from 'fs';
import readline from 'readline';

const file = 'task.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Load existing tasks from file (if it exists)
let tasks = 'task.json';
if (fs.existsSync(file)) {
    const data = fs.readFileSync(file);
    try {
        tasks = JSON.parse(data);
    } catch (e) {
        tasks = []; // Reset if file is corrupt
    }
}

// 2. Helper function to save tasks to JSON
const saveTasks = () => {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
    console.log('Saved!');
};

// 3. Main Menu Function
const showMenu = () => {
    console.log('\n--- TODO APP ---');
    console.log('1. Add Task');
    console.log('2. List Tasks');
    console.log('3. Delete Task');
    console.log('4. Exit');
    
    rl.question('Select an option (1-4): ', handleInput);
};

// 4. Handle User Input
const handleInput = (option) => {
    switch (option.trim()) {
        case '1': // Add
            rl.question('Enter task description: ', (task) => {
                tasks.push(task);
                saveTasks();
                showMenu();
            });
            break;

        case '2': // List
            console.log('\nYour Tasks:');
            if (tasks.length === 0) console.log(' - No tasks found.');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
            showMenu();
            break;

        case '3': // Delete
            rl.question('Enter task number to delete: ', (num) => {
                const index = parseInt(num) - 1;
                if (index >= 0 && index < tasks.length) {
                    const removed = tasks.splice(index, 1);
                    console.log(`Removed: "${removed}"`);
                    saveTasks();
                } else {
                    console.log('Invalid task number.');
                }
                showMenu();
            });
            break;

        case '4': // Exit
            console.log('Goodbye!');
            rl.close();
            break;

        default:
            console.log('Invalid option, try again.');
            showMenu();
            break;
    }
};

// Start the app
console.log('Welcome to your Todo App!');
showMenu();