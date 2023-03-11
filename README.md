# SB-Website

## When running locally:-

### 1. First time

a. Create a virtual environment of your choice; I use [venv](https://docs.python.org/3/tutorial/venv.html)

``` shell
py -m venv NameOfVirtualEnvironment /path/to/new/virtual/environment 
```

b. Install django 3.2

``` shell
py -m pip install django==3.2

```

c. Enter the frontEnd directory

``` shell
cd .\frontEnd\
```

d. Install all dependencies

``` shell
npm i --save-dev
```

### 2. Afterwards

a. Run the virtual environment (always)

``` shell
cd .\path\to\new\virtual\environment
./activate
```

b. Compile the frontEnd code in its diretory

``` shell
npm run dev
```

c. Run the django server in its directory

``` shell
py -m manage.py runserver
```
