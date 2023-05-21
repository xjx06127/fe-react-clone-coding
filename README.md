# 멋쟁이 사자처럼 11기 클론코딩 과제 🦁

이번 시간에는 그동안 배운 styled component와 React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.<br/>
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.<br/>
모두 화이팅!
<br/><br/>

# 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!<br/>
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

<br/>

## 어른 사자의 길

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 캡쳐 화면
![image](https://github.com/Likelion-Inha-11/fe-react-clone-coding/assets/111687549/90e16e70-4369-43e6-a957-9dc70eba88a8) <br/>

![image](https://github.com/Likelion-Inha-11/fe-react-clone-coding/assets/111687549/ea35377a-e5a6-4dd3-8781-7acd9857c8cb) <br/>

![image](https://github.com/Likelion-Inha-11/fe-react-clone-coding/assets/111687549/94feb841-7a54-441f-b6fe-0daf0aa72c34) <br/>

## 컴포넌트 계층 구조 정리

# Top
1. TopBar : 전체적인 상단바 틀 잡기
2. Div : 사진과 Album 묶어줌

# Explanation
1. Main : TopBar 밑의 큰 글씨
2. Sup : Main 아래 작은 글씨

# Button
1. BlueButton : 파란색 버튼 구성, hover, active 기능 부여
2. GrayButton : 회색 버튼 구성, hover, active 기능 부여
3. Container : 버튼들 중앙정렬 및 margin 조정

# Album
1. Background : 각 앨범의 전체적인 틀 작성
2. Img : url을 props로 받아옴, 이미지 크기 및 border 조정
3. Content : 이미지 아래 설명들의 margin 조정
4. ViewButton, EditButton : 이미지 아래 들어갈 버튼들, hover 기능 부여
5. Time : 시간 글씨 크기 및 색 부여
6. Div : Buttons와 Time 묶어서 배치

# AlbumWrapper
모든 앨범들 올바르게 배치

# A
앨범 뒤의 배경색 지정