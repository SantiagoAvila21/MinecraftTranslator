import boxen from 'boxen';
import chalk from 'chalk'
import {abc,sga} from './utils.js'
import terminalImage from 'terminal-image';
import { getInstalledPath } from "get-installed-path";


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
    const installedPath = await getInstalledPath("mctranslate-cli");
    console.log(installedPath);
    console.log(await terminalImage.gifFile((installedPath + '/enchantmentTable.gif'), {width: '50%', height: '50%'}));
    console.log("\n" + boxen(chalk.green("\n" + encodedSentence + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
}

export default encrypt;