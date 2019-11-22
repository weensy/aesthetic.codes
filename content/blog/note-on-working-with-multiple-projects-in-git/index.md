---
title: Note on working with multiple projects in Git
date: "2019-11-22"
tags: [git, setting, note]
---

If you using git, maybe you were set `user.name` and `user.email`.
But, didn't you set with this construction?

```bash
git config --global user.name [your name]
git config --global user.email [your email]
```

This way is no problem when you develop 1 project.
But if you developing over two projects, will use the same name when committing on all projects.
Here is how to give setting to each individual project.

```bash
git config --local [key] [value]
```

Of course, the priority is local> global, so if exist a local value, use that; if not, use global.
