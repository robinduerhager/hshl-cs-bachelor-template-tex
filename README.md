<h1 align="center">HSHL Computer Science Bachelor Thesis Template</h1>

## Getting Started

This project uses `XeLaTeX` which automatically sets `utf-8` as its encoding.
If you wish to use `pdflatex` however, feel free to modify this template as you like for your own needs.
Please keep in mind that this template is build for thesis which are written in german. Therefore the `_main.tex` file includes for example `ngerman` and german quotes for citing in its documentclass.
There might be an english version as well in the future but for now you'd have to manually adjust this template if you want to write in a different language then german.
#### Prerequisites
1. Install [LaTeX](https://www.latex-project.org/) (The Project has been tested with [TexLive](https://tug.org/texlive/) but [MiKTex](https://miktex.org/) might be a valid option as well)
2. Install [VSCode](https://code.visualstudio.com/)
   1. Install [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
   2. Insert the configurations from `./vscode-settings-extension.json` into your `settings.json` vscode file (`CTRL + Shift + P` / `CMD + Shift + P` -> `Preferences: Open Settings (JSON)`)
3. Start writing your thesis :)

## Project Structure

#### The Root Directory `./`
```
╮
├── TEMPLATE/                       # The Folder which holds the actual Template for creating a Bachelor thesis
├── EXAMPLE/                        # The Folder which incorporates an example of how the template can be used
├── .gitignore                      # When using git, this file excludes any temporary and generated TeX related files when commiting changes into a Repository
├── vscode-settings-extension.json  # A code snippet of useful VSCode LaTeX Workshop configurations
├── README.md                       # Readme, basic info for getting started
├── LICENSE.md                      # License for use of this project
╯
```

#### The Template Folder `./TEMPLATE`
Note that the `EXAMPLE` and `TEMPLATE` folder have the same structure. Therefore only the `TEMPLATE` Structure gets described.

```
./TEMPLATE/
├── _submission/            # Should include your final submission
├── chapters/               # Should include the different chapters / .tex Files of your main work
│  ├── ch1_XY/              # Example folder of how the Project can be structured
│  ╰── _index.tex           # The .tex file which will be included in _main.tex. Your chapters from the ch folders should be included in here
├── lecture/                # A folder to store your lectures which are important for your work
├── reading_samples/        # Collection of reading samples for the professor
├── misc/                   # Miscellaneous more or less important tex files for the affidavit, appendix, etc.
│  ├── custom/              # Holds custom tex algorithms / extensions for LaTeX
│  │  ├── convexpath.tex    # Lets you draw a convex shape around TikZ Nodes
│  │  ╰── figurelegend.tex  # Used to create Legends for your figures
│  ├── glossary/            # Folder for Glossary and Acronym entries
│  │  ├── acrentries.tex    # Actual .tex file for creating Acronyms
│  │  ├── glentries.tex     # Actual .tex file for creating Glossary entries
│  │  ╰── _index.tex        # Exists only for technical purposes, will be loaded into _main.tex, so just one input call is needed there
│  ├── _appendix.tex        # File for defining everything you want to have in your appendix
│  ├── _cover.tex           # .tex file for defining the cover of the thesis
│  ╰── _affidavit.tex       # .tex file for creating the affidavit of the thesis
├── res/                    # The Ressources folder for all your e.g.: graphics, code and statistical data
│  ├── code/                # Folder for placing all of your program code you want to include into your thesis
│  ├── img/                 # Graphics / images folder
│  ╰── data/                # The folder which should include all of your statistical / parseable data
├── _main.pdf               # The output file of LaTeX
├── _main.tex               # The main file which LaTeX should read. All configurations of packages etc. are written down here. You main content should be stored in chapters/ though
├── .gitignore              # When using git, this file excludes any temporary and generated TeX related files when commiting changes into a Repository
├── latexmkrc               # A configuration file for latexmk for also generating the glossary and acronym entries when a .tex file is saved
╰── literature.bib          # The file which will be read by biber to generate the bibliography of your thesis
```
