# Pesto Exercises Repository

- This repository contains exercises.
- The branches are named using the convention **DAY**-**SEGMENT**. For example, `day-4-segment-2`
- You can see all the branches using `git branch -a`

## How to do the exercises

- Click on 'Fork' and make an repository in your account.
- Clone your version of the exercise repository.
  ```
    git clone <link to forked repo>
  ```
- Install all dependencies
  ```
    yarn
  ```
- To do the exercises in branch `day-2-segment-1`
  ```
    git checkout day-2-segment-1
  ```
- Do all the questions of a particular segment and make sure that all the tests pass.
- For example, if the folder name is `your-name`, then it will contain one file `yourName.test.js`. 
- You need to create another file `yourName.js`. (**Make sure that the filename is correct.**)
- Make the required function or class and export it. **Don't use default exports. Only named exports are allowed.**
- Do your work and then push to the branch
  ```
    git add .
    git commit -m "your commit message"
    git push origin segment-1
  ```
- The commit message should be in the format 
```
Complete Day 3 Segment 1
```
- Push your code to your version of the exercise repository.
- Make a Pull Request to the original repository. **Ensure that you are setting up the correct base.**
