import boxen from 'boxen';
import chalk from 'chalk'
import {abc,sga} from './utils.js'

const encrypt = sentence => {
    const words = sentence.split(" ");
    let encodedSentence = "";
    words.forEach(word => {
        for(let c of word){
            let index = abc.indexOf(c.toLowerCase());
            encodedSentence += sga[index];
        }
        encodedSentence += " ";
    })
    console.log("\n" + boxen(chalk.green("\n" + encodedSentence + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
}

export default encrypt;