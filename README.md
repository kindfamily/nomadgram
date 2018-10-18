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