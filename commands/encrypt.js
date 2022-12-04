import boxen from 'boxen';
import chalk from 'chalk'
import {abc,sga} from './utils.js'
import terminalImage from 'terminal-image';
//import { getInstalledPath } from "get-installed-path";

const encrypt = async sentence => {
    const words = sentence.split(" ");
    let encodedSentence = "";
    words.forEach(word => {
        for(let c of word){
            let index = abc.indexOf(c.toLowerCase());
            encodedSentence += sga[index];
        }
        encodedSentence += " ";
    })
    //const installedPath = await getInstalledPath("mctranslate-cli");
    console.log(await terminalImage.gifFile(('/usr/lib/node_modules/mctranslate-cli/enchantmentTable.gif'), {width: '65%', height: '65%'}));
    console.log("\n" + boxen(chalk.green("\n" + encodedSentence + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
}

export default encrypt;