## 1. Presentational Component - Container Component

- 로직을 수행하는 컴포넌트(= `Container Component`)와 UI를 구현하는 마크업(HTML, XML 등) 컴포넌트(= `Presentational Component`)를 분리시키는 패턴
- 기능 담당부와 뷰 담당부를 분리시켜 모듈성, 재사용성이 뛰어난 방식. 담당 역할에 따라 분리되어있기 때문에 당연히 유지보수도 더 쉽다!
    - header와 footer같이 여러 곳에서 반복적으로 쓰이는 디자인 컴포넌트는 `props` 를 통해 다른 컴포넌트로 전달하여 재사용할 수 있다.
- Container Component :
    - 렌더링하고자 하는 데이터를 props에 넣어 다른 컨테이너나 presentation으로 전달한다
- Presentational Component :
    - 데이터 처리 능력이 없고
- but, 로직과 뷰를 모두 분리하는 방식이므로 파일의 수가 늘어난다는 점이 있다.

## 2. Custom hook

- **역할**별로 컴포넌트를 분리하는 것에 집중한 방식
- 따라서 로직이 하는 기능에 따라 분할하기 때문에, 반복적으로 필요한 기능을 가진 로직을 재사용하기 좋다.
- React 함수 내에서, 그리고 최상위에서 호출되어야만 하며, 이름이 “use”로 시작해야 한다는 규칙을 가진다.
- 코드가 간결해진다!

## 3. Atomic

<img src="https://user-images.githubusercontent.com/81505421/233434709-eed8e717-15cc-42ca-ad06-1eed30dc50f0.png"/>


- 가장 작은 컴포넌트를 가장 작은 단위인 Atom으로 삼고, 아톰으로 이루어진 조합으로 상위 컴포넌트가 생기는 패턴이다
- 아톰부터 상위 컴포넌트로 올라가는 단계는 Atom → Molecules → Organisms → 템플릿 → 페이지 순
- 그림과 같이 소입자가 결합체에서 여러번 사용될 수 있기 때문에 재사용성이 높다
- Atom : basic html elements (ex - button, title 등)
- Molecules : 두개 이상의 Atoms로 이뤄지는 상위 단위 (ex- form, nav 등)
- Templates : Atoms, Molecules, Organisms가 어떻게 조합되는지의 설계 구조
- Pages : Templates의 구조를 디벨롭시켜 실제 컨텐츠를 배치해 UI를 완성한 단위
- 다만 계층 구조여서 컴포넌트 간의 상하관계 의존성이 강하기 때문에 에러가 연속적으로 일어날 수 있는 위험성이 있다.

# 어떤 방식을 언제 택해야 좋을지?

- 1번 : 특정 뷰나 로직이 반복되는 경우가 많을 경우
- 2번 : **기능**들이 대체로 반복적으로 사용되는 경우
- 3번 : 컴포넌트의 양이 많고, 특정 컴포넌트만 반복되는 것이 아닌, 전반적으로 얼키고설킨 포함관계를 가질 경우, 최대한 작은 단위로 계속 조각내어 재사용성을 높이면 좋을 것이다. 또 스타일 컴포넌트를 바꿔야할 때 (예를들어 프로젝트 내 사용한 모든 버튼에 적용된 테마 컬러를 일괄 변경하고자 할때) 매우 편리하다.

# 프론트엔드에게 디자인 패턴이란?

지난 과제였던 웹최적화가 프론트엔드 개발자에게 필요한 이유와 비슷하다고 생각한다. 웹최적화도 빠른 렌더링 시간, 향상된 사용자의 경험을 위해 필요하다고 답변했었는데, 프론트엔드 디자인 패턴도 결국 코드의 ‘재사용성’을 높이는 효과를 가져오기 때문에 불필요한 리렌더링을 줄이며 향상된 사용자 경험을 제공할 수 있다고 생각한다. 따라서 사용자를 위해 프로젝트에 최적화된 디자인 패턴을 적절히 잘 적용하는 것이 중요하다고 생각하며, 어떤 프로젝트여도 ‘유지보수’가 정말 중요하기 때문에, 정해진 패턴/규칙에 따라 코드를 잘 **분할**하는 과정은 프론트엔드 개발에 꼭 필요한 것 같다!!