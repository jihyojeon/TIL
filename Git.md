# Git

## Get git

### Git 설정하기

- Git 버전 확인하는 법

    ```bash
    $ git --version
    ```

- Login

    ```bash
    $ git config --global user.name "username"
    $ git config --global user.email "youremail@example.com"
    ```

### 저장소 Repository

- 저장소 생성하기

```bash
$ mkdir hello-world // 새 폴더 생성하기
$ cd hello-world // 폴더 탐색
$ git init //initialized empty Git repository
```

```bash
$ git status
$ ls // 폴더에 있는 항목들의 리스트 보기
```

### Commit

```bash
저장소에서 변경사항의 상태 확인하기
$ git status

파일들의 변경사항 보기 (현재 vs. 커밋된 것)
$ git diff

특정 파일의 변경사항 추가하기
$ git add <filename>

모든 파일의 변경사항 추가하기
$ git add .

변경사항을 설명한 짦은 메세지를 포함하여 추가된 변경사항 커밋하기
$ git commit -m "<msg>"
```

### Remote Control

```bash
리모트 연결 추가하기
$ git remote add <remote 이름: origin> <url>

리모트에 url 설정하기
$ git remote set-url <remote 이름: origin> <url>

변경 풀 해오기
$ git pull <remote 이름> <branch 이름>

리모트 주소 보기
$ git remote -v

변경 푸시하기
$ git push <remote 이름: origin> <branch 이름:master>
```

### Clone

```bash
$ git clone <url>

리모트 추가하기
$ git remote add <리모트이름: upstream> <url>

리모트 url 변경하기
$ git remote set-url <리모트이름> <url>

리모트 연결들 보기
$ git remote -v
```

### 브랜치 Branch

```bash
브랜치 생성하기
$ git branch <브랜치이름>

브랜치로 이동하기
$ git checkout <브랜치이름>

브랜치를 생성하고 그 브랜치로 이동하기
$ git checkout -b <브랜치이름>

브랜치 리스트보기
$ git branch

현재 브랜치 이름 변경하기
$ git branch -m <새브랜치이름>

작업하고 있는 브랜치 확인하기
$ git status
```

### Collaborator 추가하기

https://github.com/유저이름/레포이름/settings/access

### 다른 리모트 브랜치

```bash
깃 상태 체크하기
$ git status

리모트 브랜치로부터 변경 풀해오기
$ git pull <리모트이름> <현재 브랜치이름>

풀해오기 전에 리모트 변경들 보기
$ git fetch --dry-run
```

### 브랜치 다루기

```bash
어떤 브랜치를 현재 브랜치에 머지하기
$ git merge <브랜치이름>

작업하고 있는 브랜치 변경하기
$ git checkout <브랜치이름>

로컬 브랜치 삭제하기
$ git branch -d <브랜치이름>

리모트 브랜치 삭제하기
$ git push <리모트이름 ex.origin> -d <브랜치이름>
$ git push <리모트이름 ex.origin> --delete <브랜치이름>
```

### Collaborate

## Checklist

* 형상관리 시스템은 왜 나오게 되었을까요?
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
* git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
* git과 GitHub은 어떻게 다를까요?
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
