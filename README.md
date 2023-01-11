# SB-Website

## When running locally:-

### 1. First time

    a. Create a virtual environment of your choice; I use [venv](https://docs.python.org/3/tutorial/venv.html)

    ```
    py -m venv NameOfVirtualEnvironment /path/to/new/virtual/environment 
    ```

    b. Install django 3.2

    ```
    py -m pip install django==3.2

    ```

    c. Enter the frontEnd directory

    ```
    cd .\frontEnd\
    ```

    d. Install all dependencies

    ```
    npm i --save-dev
    ```

### 2. Afterwards

    a. Run the virtual environment (always)

    ```
    cd .\path\to\new\virtual\environment
    ./activate
    ```

    b. Compile the frontEnd code in its diretory

    ```
    npm run dev
    ```

    c. Run the django server in its directory
    
    ```
    py -m run manage.py
    ```
