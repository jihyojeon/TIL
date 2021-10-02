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

### Level 7 -> 8 : find line with specific words in txt file
```console
bandit7@bandit:~$ grep "millionth" data.txt
millionth       cvX2JJa4CFALtqS87jk27qwqGhBM9plV
```

### Level 8 -> 9 : unique line
```console
bandit8@bandit:~$ cat data.txt | sort | uniq -u
UsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR
```

### Level 9 -> 10 : 
```console
bandit9@bandit:~$ strings data.txt | grep "=="
========== the*2i"4
========== password
Z)========== is
&========== truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk
```

### Level 10 -> 11 : decode file
```console
bandit10@bandit:~$ base64 -d data.txt
The password is IFukwKGsFW8MOq3IRFqrxE1hxTNEbUPR
```
use -d or -decode

### Level 11 -> 12 : rot 13
```console
bandit11@bandit:~$ cat data.txt 
Gur cnffjbeq vf 5Gr8L4qetPEsPk8htqjhRK8XSP6x2RHh
bandit11@bandit:~$ cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
The password is 5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu
```
Helpful Reading Material : [ROT13](https://en.wikipedia.org/wiki/ROT13#Emacs_and_Vim)

### Level 12 -> 13 : Hex dump
```console
bandit12@bandit:~$ ls
data.txt
bandit12@bandit:~$ head data.txt
00000000: 1f8b 0808 d7d2 c55b 0203 6461 7461 322e  .......[..data2.
00000010: 6269 6e00 013c 02c3 fd42 5a68 3931 4159  bin..<...BZh91AY
00000020: 2653 591d aae5 9800 001b ffff de7f 7fff  &SY.............
00000030: bfb7 dfcf 9fff febf f5ad efbf bbdf 7fdb  ................
00000040: f2fd ffdf effa 7fff fbd7 bdff b001 398c  ..............9.
00000050: 1006 8000 0000 0d06 9900 0000 6834 000d  ............h4..
00000060: 01a1 a000 007a 8000 0d00 0006 9a00 d034  .....z.........4
00000070: 0d1a 3234 68d1 e536 a6d4 4000 341a 6200  ..24h..6..@.4.b.
00000080: 0069 a000 0000 0000 d003 d200 681a 0d00  .i..........h...
00000090: 0001 b51a 1a0c 201e a000 6d46 8068 069a  ...... ...mF.h..
bandit12@bandit:~$ mkdir /tmp/secttp
bandit12@bandit:~$ cp data.txt /tmp/secttp/data.txt
bandit12@bandit:~$ cd /tmp/secttp
bandit12@bandit:/tmp/secttp$ cat data.txt | xxd -r > data
bandit12@bandit:/tmp/secttp$ file data
data: gzip compressed data, was "data2.bin", last modified: Tue Oct 16 12:00:23 2018, max compression, from Unix
bandit12@bandit:/tmp/secttp$
```

First of all, we use the xxd command to do a reverse hex dump and store the file with its original name, data.
After using the file command to fetch the information of data, we know that data is a gzip compressed file.

```console
bandit12@bandit:/tmp/secttp$ mv data data2.gz
bandit12@bandit:/tmp/secttp$ gzip -d data2.gz
bandit12@bandit:/tmp/secttp$ ls
data2  data.txt
bandit12@bandit:/tmp/secttp$ file data2
data: bzip2 compressed data, block size = 900k
bandit12@bandit:/tmp/secttp$ mv data2 data3.bz
bandit12@bandit:/tmp/secttp$ bzip2 -d data3.bz
bandit12@bandit:/tmp/secttp$ ls
data3  data.txt
bandit12@bandit:/tmp/secttp$ file data3
data3: gzip compressed data, was "data4.bin", last modified: Tue Oct 16 12:00:23 2018, max compression, from Unix
bandit12@bandit:/tmp/secttp$
bandit12@bandit:/tmp/secttp$ mv data3 data4.gz
bandit12@bandit:/tmp/secttp$ gzip -d data4.gz
bandit12@bandit:/tmp/secttp$ ls
data4  data.txt
bandit12@bandit:/tmp/secttp$ file data4
data4: POSIX tar archive (GNU)
bandit12@bandit:/tmp/secttp$ mv data4 data5.tar
bandit12@bandit:/tmp/secttp$ tar -xf data5.tar
bandit12@bandit:/tmp/secttp$ ls
data5.bin  data5.tar  data.txt
bandit12@bandit:/tmp/secttp$ file data5.bin
data5.bin: POSIX tar archive (GNU)
bandit12@bandit:/tmp/secttp$ mv data5.bin data6.tar
bandit12@bandit:/tmp/secttp$ tar -xf data6.tar
bandit12@bandit:/tmp/secttp$ ls
data5.tar  data6.bin  data6.tar  data.txt
bandit12@bandit:/tmp/secttp$ file data6.bin
data6.bin: bzip2 compressed data, block size = 900k
bandit12@bandit:/tmp/secttp$ mv data6.bin data7.bz
bandit12@bandit:/tmp/secttp$ bzip2 -d data7.bz
bandit12@bandit:/tmp/secttp$ ls
data5.tar  data6.tar  data7  data.txt
bandit12@bandit:/tmp/secttp$ file data7
data7: POSIX tar archive (GNU)
bandit12@bandit:/tmp/secttp$ mv data7 data8.tar
bandit12@bandit:/tmp/secttp$ tar -xf data8.tar
bandit12@bandit:/tmp/secttp$ ls
data5.tar  data6.tar  data8.bin  data8.tar  data.txt
bandit12@bandit:/tmp/secttp$ file data8.bin
data8.bin: gzip compressed data, was "data9.bin", last modified: Tue Oct 16 12:00:23 2018, max compression, from Unix
bandit12@bandit:/tmp/secttp$ mv data8.bin data9.gz
bandit12@bandit:/tmp/secttp$ gzip -d data9.gz
bandit12@bandit:/tmp/secttp$ ls
data5.tar  data6.tar  data8.tar  data9  data.txt
bandit12@bandit:/tmp/secttp$ file data9
data9: ASCII text
bandit12@bandit:/tmp/secttp$ cat data9
The password is 8ZjyCRiBWFYkneahHwxCv3wb2a1ORpYL
```

### Level 13 -> 14 : SSH private key
```console
bandit13@bandit:~$ ssh bandit14@localhost -i sshkey.private
bandit14@bandit:~$ whoami
bandit14
bandit14@bandit:~$ cat /etc/bandit_pass/bandit14
4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e
```

### Level 14 -> 15 : another port
[Check how Internet works](https://www.youtube.com/watch?v=7_LPdttKXPc)
