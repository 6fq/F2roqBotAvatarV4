const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const imageTable = new ascii("image Commands");
const ownerTable = new ascii("owner Commands");

imageTable.setHeading("Command", "Load status");
ownerTable.setHeading("Command", "Load status");

module.exports = client => {
  const imageCommands = [];
  const ownerCommands = [];
  
  readdirSync("./commands/").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file =>
      file.endsWith(".js")
    );

    for (let file of commands) {
      let cmd = require(`../commands/${dir}/${file}`);

      if (cmd.name && typeof cmd.name === "string") {
       if (dir === "image") imageCommands.push([file, "✅"]);
  else if (dir === "Owner") ownerCommands.push([file, "✅"]);
        
        client.commands.set(cmd.name, cmd);
      } else {
if (dir === "image") imageCommands.push([file, "❌  -> missing a help.name, or help.name is not a string."]);
else if (dir === "Owner") ownerCommands.push([file, "❌  -> missing a help.name, or help.name is not a string."]);

        continue;
      }
      if (cmd.aliases && Array.isArray(cmd.aliases))
        cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name));
    }
  });
  

imageCommands.forEach((cmd) => imageTable.addRow(cmd));
 ownerCommands.forEach((cmd) => ownerTable.addRow(cmd));

  console.log(imageTable.toString());
  console.log(ownerTable.toString());


};