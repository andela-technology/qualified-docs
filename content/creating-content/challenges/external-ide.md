---
title: "Labs: External IDE"
order: 10
private: true
---

# External IDE

_External IDE_ is an experimental feature in the Qualified Labs that uses a small node terminal app to synchronize files
from your file system back to Qualified’s web IDE. This allows developers to work in their own IDE without needing to
set up or get an application running in their own system.

:::warning Experimental Labs Feature
External IDE is an experimental feature, and may be discontinued.

It is intended as additional functionality on top of the Web IDE, with the Web IDE being the primary, supported way of taking Qualified Assessments.

[See other limitations at the bottom of the document.](#limitations)
:::

## The External IDE Developer Experience

Here’s how developers are prompted to select their own IDE at the outset of taking a Qualified challenge.

![Challenge Intro Screen](/images/creating-content/external-ide/challenge-start.png)

If they choose to complete the challenge using their IDE, they will then be asked to follow the steps outlined below.

![Use Your Own IDE Screen](/images/creating-content/external-ide/welcome-screen.png)

Once these setup steps are completed, developers can work on Qualified challenges in the comfort of their own development environment.

### The Qualified `attach` Application

The desktop client is a command line application called `attach`. This is what is used to connect the filesystem to the Web IDE.

It is installed as a global Node package, so your developers will need to have Node and NPM installed. They will need to be comfortable installing packages and running a command line application. For users who are not comfortable with these situations, we do not recommend using Attach unless you are also able to provide guidance and support.

## Enabling External IDE

External IDE is premium feature not available to all teams. You may need to contact your sales representative to gain access. Once enabled, you'll need to turn the feature on in [the Qualified Labs section of your account](https://www.qualified.io/hire/account/labs).

If you want to allow developers to use their External IDE, you can enable or disable the feature team-wide. The global setting can also be overridden for any given challenge, inside the Challenge Config dialog.

This feature only works with Project Code Challenges, where the value of working in your own IDE is that much more significant, and there is often many files to work with.

## Developing Content with External IDE in Mind

### Preparing Developers

You'll likely want to include special instructions for external IDE users within your challenge. You may also want to prepare them for using it before they begin the challenge experience, based on their expected experience level with Node & NPM and command-line tools.

The desktop client does *not* save the files directly, but instead works through the web client, which **must remain open**. This ensures stronger security by keeping it in a single place. It also allows developers to continue to use our advanced code runner and inline web-preview without having to set up or other programs locally.

### IDE Code Completion & Running Code

Content developed for use with an External IDE must also be aware that not everything will be available locally. For example, not all libraries that are installed on the server are going to be available for the developer. Their IDE may not be able to provide the level of autocompletion that is usually available for normal projects.

For the same reason, developers will also likely not be able to run the project locally, unless special effort is made during challenge design and providing additional instructions.

### Working with Local Files

The "source of truth" for the files will remain the Web IDE. No matter what happens to the files locally, the web client will not allow deleting special files, or creating unsupported files.

While the External IDE and Project Challenges combine to create the appearance of full file system support, the data being stored is a map of file paths and text. Project Challenges are not intended to support binary files or large file trees, as they are first-and-foremost intended to be solved in the Web IDE.

Note that certain types of files can cause issues, such as very large files, binary files (not supported by project challenges), and dynamic links. The desktop client ignores common problem directories, such as `.git` and `node_modules`, but it's best to avoid creating any complex files that wouldn't be created within the Web IDE.

:::tip Excluding Files from the Desktop Client

You can use one of the following two ways to ignore files created locally. This could be helpful if you want to enable the student to have build files, local IDE files, or other files that should not be stored in the solution.

* Anything in `.gitignore` is ignored. You can include these as part of the original Challenge, which could help in getting students working faster (by excluding, for example, `.vscode/`).
  
* If you have things you’d like to include in `git`, but not include as part of the solution, we’ve added a special `.attachignore` file. It has the same format as `.gitignore`, and can be used to provide additional filtering before saving solution files.
:::

## Common User Issues

The following are suggestions you might provide your developers.

### Desktop Client Won't Run

* Ensure that Node and NPM are both installed correctly. If these haven't been set up previously, the terminal might need to be restarted to see the changes.
* Start from a clean directory. If the desktop client ran before, but now doesn't, delete the project directory and start fresh.
* Try updating the desktop client by running:

  ```bash
  npm install -g @qualified/attach
  ```

### Web IDE - Desktop not Synchronized

The desktop client will do it's best to synchronize with the Web IDE, but there are many situations that can lead to issues outside the programs control. Its primary goal is to allow editing of simple text files on the desktop, not provide a one-to-one experience with desktop application development.

Because the files are copied to their local computer, developers will have the ability to modify, move, and delete files that may have been locked within the Web IDE. These files will remain in place within the Web IDE, which can lead to a situation where their file system does not match the actual solution. In these situations, it's good to explain this ahead of time, and recommend that the developer leave special files alone.

:::tip Resetting the Directory

If the directories get out of date, the best course of action for the developer is to do the following:
  
1. Stop the desktop client
2. Delete their local copy of all files
3. Restart the desktop client
:::

## Limitations

* Qualified is not currently able to provide direct support to users who are having problems installing the Attach application.
* The External IDE is intended for technically proficient users. If your users are not used to working with the Node ecosystem, they may have difficulty installing and running the application.
* External IDE only works with Project Code Challenges.
* Code written in an External IDE will not be subject to detailed code playback. You can still use our code playback feature, but it will be limited to when the developer saves code.
* External IDE is best suited to letting developers work independently. You can’t launch an interactive session with a candidate if they’re using their own IDE, but you can still review the code that they’ve written with them via a pair-programming session thereafter.
* External IDE is an experimental feature, and may be discontinued. It is intended as additional functionality on top of the Web IDE, with the Web IDE being the primary, supported way of taking Qualified Assessments.
* As an experimental feature, External IDE may not be able to support certain styles of challenges.
* Working directories that utilize files outside of the scope of what is supported by the project code challenge are not supported. You will need to ensure that you ignore them using either `.gitignore` or `.attachignore`. This includes binary files, such as images.
* The Attach application handles running user code on Qualified's servers. It does not handle installing required dependencies on the user's machine and as such, is not responsible for ensuring that auto complete works within external IDEs. End users are responsible for installing any dependencies on their own.


