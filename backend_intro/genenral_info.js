/*

Info about the command npm init -y, creating package.json file


The command npm init -y is used in the context of Node.js 
and npm (Node Package Manager). Here’s a breakdown of what 
it does:

npm: This is the Node Package Manager command-line tool,
which is used to manage JavaScript packages and modules 
for Node.js.

init: This subcommand is used to create a new package.json file.
The package.json file is a JSON file that contains metadata about
your project and its dependencies. It's essential for 
managing project dependencies and scripts.

-y: This is a flag that automatically answers "yes" to all
the prompts that npm init would typically ask.
When you run npm init without the -y flag, 
it will prompt you for various details about your project,
such as the project name, version, description, entry point,
test command, git repository, keywords, author, and license.
The -y flag bypasses these prompts by using default values.

USECASE :=

This command is particularly useful when you want to quickly 
set up a new Node.js project with a package.json file without 
going through the interactive prompts. It’s a time-saver for 
creating boilerplate package.json files with default settings,
 which you can then manually edit if needed.

*/