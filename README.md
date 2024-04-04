# The Sonic Transducers - DC Rocky Horror

This is the website for the Sonic Trandsducers and is live at [dcrockyhorror.com](https://dcrockyhorror.com/). If you have any quesions or feedback, reach out to Reagan at reaganhenke@gmail.com, or on discord (ifthencreate).

This project is written with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

Deployments occur automatically with [Netlify](https://www.netlify.com/) when a change is commited to the `main` branch. 

## TODO

- [x] Add in 2024 show dates 
- [ ] Add in navigation to the bottom of show date pages to more easily navigate to the previous and next show without needing to go back to the whole calendar - _UNASSIGNED_
- [ ] Make the "BUY TICKETS NOW" button conditional, check if Landmark has added the next show's tickets. If now, replace with something like "SEE UPCOMING SHOWS" and link to the calendar page instead - _UNASSIGNED_
- [ ] Make the calendar state persist in the URL (so people can link to the Oct page, and navigation goes back and forth, etc) - _UNASSIGNED_


## Getting Started

The following is how I work. Some of this will be personal preference, so if you have a different editor or something else you like better, that's ok too!

There are a LOT of code editors out there, but I like [VS Code](https://code.visualstudio.com/). Download that, or pick one you like. You'll also need to use the Terminal app.

### 1. Clone the repository

First, open Terminal. Navigate to the directory that you'd like this repository to be in locally.

Clone the repository by running the following command: 
```
gh repo clone reaganhenke/dcrockyhorror
```

Once you've cloned it, install all the modules by running `npm i`. You may need to install node to do this. You can run the app locally with `npm start`, which creates a local development server on http://localhost:4200/.

### 2. Making changes

You cannot commit directly to the main branch, so you need to create a new branch to do development work. Note that the remote repository may be farther along than your local files, so always pull changes first.

1. Start on the main branch with `git checkout main`. Pull any remote changes with `git pull origin main`. 
2. Create and switch to a new branch with `git checkout -b BRANCH_NAME`, but replace BRANCH_NAME with whatever name you want
3. Make your changes! You can use any text editor, I use [VS Code](https://code.visualstudio.com/). Once you make your changes, save them and run the local development server with `npm start`. If everything looks good, you can move on. 
4. Stage your changes for commit by running `git add -A`.
5. Commit your changes with `git commit -m "DESCRIPTION OF CHANGES"`(change the description of changes to be whatever you changed)
6. Push your changes with `git push`. Terminal will ask you if you want to create a new upstream branch (you do, it'll give you a command like `git push --set-upstream origin BRANCHNAME`, run it!) and will give you a link to open a pull request (do it).
7. On Github, open a pull request from your branch to the main branch. When that is merged in, the deployed site will update automatically. 
