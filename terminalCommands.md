# Bandit
- [Shell Command Cheat Sheet](https://www.git-tower.com/learn/cheat-sheets/cli/command-line-cheat-sheet-large01.png)

### Level 0 : SSH
```shell
ssh bandit0@bandit.labs.overthewire.org -p 2220
```
- ssh: command to use ssh
- id@address -p portnumber

### Level 0 -> 1 : ls, cd, cat, file, du, find
```Shell
bandit0@bandit:~$ ls
readme
bandit0@bandit:~$ cd readme
-bash: cd: readme: Not a directory
bandit0@bandit:~$ readme
-bash: readme: command not found
bandit0@bandit:~$ file readme 
readme: ASCII text
bandit0@bandit:~$ cat readme 
boJ9jbbUNNfktd78OOpsqOltutMc3MY1
bandit0@bandit:~$ du readme 
4       readme
bandit0@bandit:~$ find readme
readme
bandit0@bandit:~$ find
.
./.bashrc
./.profile
./.bash_logout
./readme
```
- ls : lists of files
- cd : change directory
- cat : output the contents of file
- file : determine file type
- du : print amount of disk usage
- find : find files 
