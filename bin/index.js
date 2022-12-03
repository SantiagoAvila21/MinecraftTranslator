#! /usr/bin/env node
import encrypt from '../commands/encrypt.js';
import { program } from 'commander';

program
    .command('encrypt <sentence>')
    .description('Encrypt sentence to Minecraft Enchanting language')
    .action(encrypt);

program.parse();