BACKEND
#1-4. Creating a Virtual Environment
mkdir bsdir2
cd bsdir2
pipenv —three
pipenv shell
pipenv install django
pipenv install requests 
> Pipfile                   가상환경에서 추가되는 패키지 자동으로 입력되는 파일
[packages] 
requests = “*” 	추가되는거 확인
django-admin 명령어 실행되는거 확인

#1-6. Creating our Django Project
django-admin startproject 로 프로젝트를 시작해도 되지만
pipenv install cookiecutter
cookiecutter https://github.com/pydanny/cookiecutter-django
프로젝트 정보 입력 ( 정보 순서와 버전은 조금씩 달라짐 )
timezone [UTC]: Asia/Seoul  데이터베이스랑 연결할때 내용이 다르면 오류가 남
불필요한 파일 삭제
README.md 파일 생성

#1-7. Creating the GitHub Repository
저장소 생성 및  연결
git init
git remote add origin {YOUR_GIHTUB_URL}
git pull origin master
git add .
git commit -m "First commmit"
git push origin master

#1-8. Installing the requirements
pipenv --three
pipenv shell
pipenv install -r requirements/local.txt

In case of an error try this:
pip install -U setuptools
pip install -U pip
pipenv install -r requirements/local.txt

 #1-11. Creating the Databases
CREATE DATABASE nomadgram;

 #1-12. Creating the Apps
django-admin startapp images

#1-18. Creating a super user
python manage.py createsuperuser




@@@@@ 혼돈의 버그 픽싱



#1-70 Setting up JWT
pipenv install djangorestframework-jwt
postman 테스트
localhost:8000/api-token-auth > body에 username: password 입력해서 token값을 받아옴
localhost:8000/users/bill > header에 value: JWT 토큰값 붙여넣기 > 가입 정보가 나옴 

#1-72 Signing Up : Logging In
pipenv install django-rest-auth
facebook 로그인 을 위한 패키지 부분이라서 설치만 하고 적용 안함

prontend
** webpack으로 설정하면 오래 결려서 creat react app을 사용한다
Create React App V2 릴리즈! 10분만에 설명해준다. (Create React App V2.0 Explained in 10 min)
https://youtu.be/w9Zf0hpohQM

install
npx create-react-app crav2

sass 사용하게 설정
crv2>src>App.scss 파일명 변경
crv2>src>App.js import app.scss로 변경 이름도 변경 
yarn add node-sass

module css 사용하게 설정
** class의 이름을 랜덤하게 바꿔줘서 class 명을 추적 안해도 되게 해줌
crv2>src> App.module.scss 파일명 변경
crv2>src>App.js  import styles from './App.module.scss';로 변경
yarn add node-sass
App.module.scss 파일 변경
+ class명 첫 글자 소문자로 변경하고 '-' 삭제 

react fragment syntax 적용
뭔지 모르겠고 당장 안필요 할것 같아서 설정안함

#2-4 Using Create React App
에서 부터 다시 보변서 적용



