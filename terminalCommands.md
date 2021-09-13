# Terminal Commands Excercise
## Source : [Bandit](https://overthewire.org/wargames/bandit/)
- [Shell Command Cheat Sheet](https://www.git-tower.com/learn/cheat-sheets/cli/command-line-cheat-sheet-large01.png)

### Level 0 : SSH
```console
ssh bandit0@bandit.labs.overthewire.org -p 2220
```
- ssh: command to use ssh
- id@address -p portnumber

### Level 0 -> 1 : ls, cd, cat, file, du, find
```console
bandit0@bandit:~$ ls
readme
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
- exit : disconnect ssh
```console
exit
ssh bandit1@bandit.labs.overthewire.org -p 2220
```

### Level 1 -> 2 : dashed file
```console
bandit1@bandit:~$ find
.
./.bashrc
./.profile
./.bash_logout
./-
bandit1@bandit:~$ cd -
-bash: cd: OLDPWD not set
bandit1@bandit:~$ cat ./-
CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9
```
Same to all files starting with dash!
Use './-filename'

### Level 2 -> 3 : spaces in file name
```console
bandit2@bandit:~$ ls
spaces in this filename
bandit2@bandit:~$ cat spaces\ in\ this\ filename 
UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK
```
Use eacape or just tab to auto-fill

### Level 3 -> 4 : hidden file
```console
bandit3@bandit:~$ ls
inhere
bandit3@bandit:~$ cd inhere/
bandit3@bandit:~/inhere$ ls -a
.  ..  .hidden
bandit3@bandit:~/inhere$ cat .hidden 
pIwrPrtPN36QITSp3EQaw936yaFoFgAB
```

### Level 4 -> 5 : human readable file
```console
bandit4@bandit:~$ ls
inhere
bandit4@bandit:~$ cd inhere
bandit4@bandit:~/inhere$ ls
-file00  -file01  -file02  -file03  -file04  -file05  -file06  -file07  -file08  -file09
bandit4@bandit:~/inhere$ file ./-*
./-file00: data
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: data
bandit4@bandit:~/inhere$ cat ./-file07
koReBOKuIDDepwhWk7jZC0RTdopnAYKh
```

### Level 5 -> 6 : check file size and executability
```console
bandit5@bandit:~/inhere$ find . -size 1033c -not -executable
./maybehere07/.file2
bandit5@bandit:~/inhere$ file ./maybehere07/.file2
./maybehere07/.file2: ASCII text, with very long lines
bandit5@bandit:~/inhere$ cat ./maybehere07/.file2
DXjZPULLxYr17uwoI01bNLQbtFemEgo7
```
[!] How to find it is human-readable?

### Level 6 -> 7 : check file owner
???
[!] Not sure... Just read the file name... cheating
```console
bandit6@bandit:~$ cat /../var/lib/dpkg/info/bandit7.password
HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs
```

### Level 7 -> 8 :
