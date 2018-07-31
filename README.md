
# nuoxiao admin

# 开发环境需要安装步骤及软件
1.官网下砸安装node
2.运行cmd,输入命令node -v ,检测node安装成功后，输入命令npm install -g @angular/cli
3.运行cmd,输入名利ng -v ,检测angular安装成功后，输入命令npm install
4.运行cmd进入到项目文件夹目录最外层，输入命令npm serve
5.打开浏览器输入地址：http://localhost:4200 
6.看到你想看到的页面就成功

# 打包
ng build --prod
首页中要该base 为/nuoxiao/
将httpService 中的公用nuoxiao去掉
ng build --prod --base-href /nuoxiao/

# 打包内存不足问题
解决办法一：
修改目录: my-project/node_modules/.bin  找到 ng.cmd 修改max_old_space_size:
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" --max_old_space_size=8192  "%~dp0\..\._@angular_cli@1.0.0@@angular\cli\bin\ng" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node --max_old_space_size=2048  "%~dp0\..\._@angular_cli@1.0.0@@angular\cli\bin\ng" %*
)
修改目录: my-project/node_modules/.bin  找到 ngc.cmd 修改max_old_space_size:
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" --max_old_space_size=8192  "%~dp0\..\._@angular_compiler-cli@4.0.1@@angular\compiler-cli\src\main.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node --max_old_space_size=2048  "%~dp0\..\._@angular_compiler-cli@4.0.1@@angular\compiler-cli\src\main.js" %*
)
解决办法二：
1、全局安装increase-memory-limit,命令如下：
npm install -g increase-memory-limit

2、进入项目目录，执行下列命令：
increase-memory-limit


# Metronic5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
