# Description
A version of my portfolio in terminal form. There are directories and files you can navigate through, file types, commands, etc... There are features such as error highlighting, pressing the up array to copy your previous command, and auto scrolling when new text appears. It's built using my own [svelte template](https://github.com/matthajec/svelte-template) that uses rollup. 

## Framework(s)/Package(s)
* Svelte

## Challenge(s)
* Creating the file system. In the code, the file tree is represented by a class that can have children of it's own type. Each "node" in the tree can have a type denoted by it's extension which changes it's behavior. Each node except the root has to be the child of another node. Doing it this way, I could relatively easily add the ability to make and delete nodes in the file tree from the terminal.
* Navigating the file system. The current directory is stored as an array of indexes. Instead of trying to explain it I'll give a visual:
  ```
  Root Node
  | Banking
  +--- passwords.txt
  | Homework
  +--- homework.mp4
  ```
  Here, the reference to the ```homework.mp4``` file would be [1,0], because the ```homework``` directory is the in index 1 of root (hence the 1), and the ```homework.mp4``` file is in index 0 of homework. This makes jumping up or down a directory very simple, since all you have to do is delete or append an index the array.
