# COVID LIVE 팀 해커톤

## 개요
사회적 이슈가 되는 코로나의 확진자의 매일 새로운 데이터를 전국, 시도 별로 보여주는 페이지를 만드는 해커톤. 부가적으로 해당 데이터로 막대 그래프를 그리는 페이지 추가

## 팀원
  조장 : 백승일,
  조원 : 배준선 도지현
  
## 역할
  백승일 : API선정, 프로젝트 총괄,chart.js를 이용하여 현재 시도별 감염자를 차트로 그리기, 지도 클릭시 해당 지역 감염정보 보여주는 이벤트
  
  도지현 : 차트그리기, 지도 클릭 이벤트
  
  배준선 : 로그인
  
## 파일 구조
![src1](https://user-images.githubusercontent.com/54830773/90244426-b5bab300-de6b-11ea-82cf-6cacde5309c7.png)


## 사용 라이브러리
1. react
2. react-router-dom
3. react-redux
4. redux-saga
5. axios
6. antd
7. antd-icon
8. eslint-plugin-react-hooks@next
9. node-sass
10. error-boundary
11. devtools-extension
12. connected-react-router
13. react-thunk
14. react-actions
15. http-proxy-middleware
16. react-scripts
17. svgr

## 실행 방법
1. 클론 후 npm ci
2. npm start 혹은 yarn start

## 결과
![image](https://user-images.githubusercontent.com/54830773/97266458-d5a72380-186b-11eb-989e-b5f942d60e1d.png)
![image](https://user-images.githubusercontent.com/54830773/97266524-ed7ea780-186b-11eb-83c8-748032f7575c.png)

## 배운점
- module.scss를 사용함으로 이전의 웹팩 번들링을 하면서 생긴 문제들을 피해갈 수 있었다.
- chart.js와 svg를 이용하여 데이터 시각화를 통해 다양한 인터렉티브 웹을 만들수 있다는 것을 느꼈다.
- 공공API를 사용하게 되면서 Document를 꼼꼼히 읽고 이해하는 시간을 가짐으로 무리없이 사용했지만, 데이터의 직관성이 떨어지는 것을 느꼈다.
