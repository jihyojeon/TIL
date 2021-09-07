# [Kor] Guide To Flexbox

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[https://velog.io/@choonghee-lee/번역-A-Complete-Guide-to-Flexbox](https://velog.io/@choonghee-lee/%EB%B2%88%EC%97%AD-A-Complete-Guide-to-Flexbox)

## Background

`Flexbox Layout` (Flexible Box) 모듈은 그 이름("flex")에서 알 수 있듯이, 컨테이너가 사이즈에 상관없이 아이템들의 배치, 정렬, 스페이싱을 효율적으로 할 수 있게 해준다.

flex layout의 메인 아이디어는 컨테이너가 자신의 아이템들을 공간(예: 스크린 사이즈)에 따라 넓이, 높이, 순서 등을 변경하는 것이다. 플렉스 컨테이너는 공간이 남으면 채우고 부족하면 줄여서 공간을 동적으로 활용한다.

일반 레이아웃이 기본적으로 수직방향 일때는 block이고 수평방향일때는 inline인 것과 달리, flexbox layout은 방향에 구애받지 않는다. 일반 레이아웃은 크고 복잡한 어플리케이션에서 방향 전환, 크기 조정 등을 할때 flexbox layout과 달리 유연성(flexibility)이 부족하다.

**Note:** flexbox layout은 컴포넌트 및 소규모 레이아웃에 적합하지만 Grid 레이아웃은 대규모 레이아웃에 적합하다.

## Basic & Terminology

`flexbox`는 모듈이기 때문에 여러가지 많은 속성을 설정할 수 있다. 컨테이너를 위한 속성과 아이템들을 위한 속성으로 나뉜다.

"일반" 레이아웃이 block-inline-flow dirctions 기반이라면, flex layout은 *"flex-flow directions"* 기반이다. 아래의 그림을 보고 flex layout의 메인 아이디어를 알아보자.

![https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

아이템들은 `main-start`에서 `main-end`로 이어지는 `main axis` 또는 `cross-start`에서 `cross-end`로 이어지는 `cross axis`를 따라 배치된다.

- **main axis** - flex container의 main axis는 flex item들이 배치되는 기본 축이다. 반드시 수평일 필요는 없고 `flex-direction` 속성에따라 달라진다 (다음 단락 참조).
- **main-start | main-end** - flex item들은 main-start에서 main-end를 따라 컨테이너 내부에 배치된다.
- **main-size** - flex item의 main axis 방향 사이즈이다. main axis는 `flex-direction` 속성에 따라 달라지므로 해당 아이템의 width 값이 될 수도 있고, height 값이 될 수도 있다.
- **cross axis** - main axis의 수직에 있는 축이 cross axis이다. 역시 main axis에 따라 변화한다.
- **cross-start | cross-end** - main axis 방향으로 아이템들이 채워져 공간이 부족하면 다음 아이템은 cross-start에서 cross-end 방향으로 채워진다.
- **cross-size** - flex item의 cross axis 방향 사이즈이다. cross axis는 `flex-direction` 속성에 따라 달라지므로 해당 아이템의 width 값이 될 수도 있고, height 값이 될 수도 있다.

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled.png)

## Properties for the parent (flex container)

### display

`display` 속성은 flex container를 블록과 인라인 요소 중 어느 쪽으로 처리할 지와 함께, flow, grid, flex 처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정한다.

```css
.container {
  display: flex; /* or inline-flex */
}
```

CSS column들은 flex container에게 영향을 주지 못한다.

### flex-direction

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%201.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%201.png)

main-axis를 설정하며 그에 따라 flex container에 배치되는 flex item들의 방향이 같이 설정된다. Flexbox는 단일 방향 레이아웃이다. flex item들은 기본적으로 가로 행, 세로 열 방향으로 배치된다.

```css
.container {
  flex-direction: row | row-reverse | 	column | column-reverse;
}
```

- `row` (default): `ltr`은 왼쪽에서 오른쪽 방향으로; `rtl`은 오른쪽에서 왼쪽으로
- `row-reverse`: `ltr`은 오른쪽에서 왼쪽으로; `rtl`은 왼쪽에서 오른쪽으로
- `column`: `row`와 마찬가지, 위에서 아래로
- `column-reverse`: `row-reverse`와 마찬가지, 아래서 위로

### flex-wrap

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%202.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%202.png)

기본적으로 flex item들은 하나의 라인에 맞추어지기로 되어있다. `flex-wrap` 속성을 사용해 필요에 따라 item들이 줄 바꿈을 할 수 있다.

```
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `no wrap` (기본): 모든 flex item들은 한 라인에 있어야한다.
- `wrap`: flex item들은 위에서 아래로 여러 라인에 배치될 수 있다.
- `wrap-reverse`: flex item들은 아래서 위로 배치될 수 있다.

Demo

[flex-wrap](https://css-tricks.com/almanac/properties/f/flex-wrap/)

### flex-flow

`flex-direction`과 `flex-wrap` 속성을 한 번에 사용할 수 있도록 만든 속성이다. flex cotainer의 main axis와 cross-axis를 정할 수 있다. 기본값은 `row nowrap`이다.

```css
.container {
  flex-flow: column wrap;
}
```

### justify-content

![https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

`justify-content` 속성은 main axis에 따라 정렬하는 방법을 정할 수 있다. 여분의 공간을 남기고 싶을 때 사용할 수 있습니다.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

- `flex-start` (기본): 아이템들이 `flex-direction`의 시작점 쪽으로 모인다.
- `flex-end`: 아이템들이 `flex-direction`의 끝점 쪽으로 모인다.
- `start`: 아이템들이 `writing-mode` 방향의 시작점 쪽으로 모인다.
- `end`: 아이템들이 `writing-mode` 방향의 끝점 쪽으로 모인다.
- `left`: 아이템들이 flex container의 왼쪽 끝으로 모인다.
- `right`: 아이템들이 flex container의 오른쪽 끝으로 모인다.
- `center`: 아이템들이 라인의 중앙으로 모인다.
- `space-between`: 첫번째 아이템은 시작점에, 마지막 아이템은 끝점에 붙고, 남은 공간은 균등하게 나누어진다 (위에 그림 참조).
- `space-around`: 아이템들의 주위로 남은 공간이 균등하게 분배된다. 위의 그림을 보면 ***공간-아이템-공간-공간-아이템-공간-공간-아이템-공간*** 과 같이 분배됨을 알 수 있다.
- `space-evenly`: 모든 아이템 사이에 균등한 공간이 분배된다.

브라우저에 따라서 이러한 속성값들을 지원할 수도 그렇지 않을 수도 있다. 예를 들어, `space-between`은 Edge 브라우저의 여러 버전에서 지원되지 않고 start/end/left/right은 크롬에서 아직 지원되지 않는다 (작성된지 좀 오래된 글이니 지금은 될 것 같다). MDN에서 [자세한 사항](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)을 확인할 수 있다. 가장 안전한 값은 `flex-start`, `flex-end`, `center` 정도이다.

위의 속성값들과 함께 사용되는 `safe`와 `unsafe`라는 키워드가 있다. `safe`는 속성값에 해당하는 포지셔닝을 할 수 있지만, 어떤 요소가 스크린 밖(스크롤이 불가능 한 곳)에서 렌더링되도록 할 수는 없다 - 이를 "data loss"라고 부른다.

 📌 **column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.**

### align-items

![https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

`align-items`는 **cross axis**를 따라 flex item을 어떻게 배치할지 정하는 속성이다. main-axis의 수직 축이 cross axis이다.

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```

- `stretch` (기본값): container를 모두 채운다(min-width / max-width 값은 지킨다).
- `flex-start` / `start` / `self-start`: cross axis의 시작점에 위치한다. 이들 속성의 차이는 미묘한데, `flex-direction` 또는 `writing-mode` 속성값을 지키느냐에 따라 다르다.
- `flex-end` / `end` / `self-end`: cross axis의 끝점에 위치한다. 이들 속성의 차이는 미묘한데, `flex-direction` 또는 `writing-mode` 속성값을 지키느냐에 따라 다르다.
- `center`: cross-axis의 중앙에 위치한다.
- `baseline`: item들이 baseline에 맞춰 정렬된다 (위의 그림 참조).

`safe`와 `unsafe` 키워드는 위의 속성들과 함께 사용되어 질 수 있고 ([브라우저 지원여부](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)에 따라 다름) content가 보이지 않는 곳에서 렌더링되지 않게 해준다.

### align-content

![https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

cross axis를 따라 남은 공간이 있을 때 container의 line들을 어떻게 정렬할 것 인지에 관한 내용이다.

**Note**: flex items들이 하나의 line만 이루고 있다면 효과가 없는 속성이다.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```

- `flex-start` / `start`: 아이템들이 컨테이너의 시작점 쪽으로 모인다. (더 많이 지원되는) `flex-start`는 `flex-direction`을 존중하고 `start`는 `writing-mode` 방향을 존중한다.
- `flex-end` / `end`: 아이템들이 컨테이너의 끝점 쪽으로 모인다. (더 많이 지원되는) `flex-end`는 `flex-direction`을 존중하고 `end`는 `writing-mode` 방향을 존중한다.
- `center`: 아이템들이 컨테이너 중앙으로 모인다.
- `space-between`: 첫줄은 시작점으로 마지막줄은 끝점으로 모이고, 나머지 공간이 균등하게 분배된다.
- `space-around`: 아이템들이 라인주위로 분배된다. (위의 그림 참조)
- `space-evenly`: 아이템들이 주위에 동일한 공간을 가지고 분배된다.
- `stretch` (기본값): 라인들이 남은 공간을 채우기위해 알아서 늘어난다.

`safe`와 `unsafe` 키워드는 위의 속성들과 함께 사용되어 질 수 있고 ([브라우저 지원여부](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)에 따라 다름) content가 보이지 않는 곳에서 렌더링되지 않게 해준다.

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%203.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%203.png)

## Properties for the Children (flex items)

### order

기본적으로, flex item들은 선언된 순서대로 배열된다. 하지만 `order` 속성을 이용하여 아이템들의 순서를 변경할 수 있다.

```css
.item {
  order: 5; /* default is 0 */
}
```

### flex-grow

필요하면 flex item이 늘어날 수 있도록하는 속성이다. 단위(px, em등)가 없는 값을 지정하며(숫자만 적음) 이는 비율을 의미한다. 해당 flex item이 flex container 내부에서 얼마만큼의 공간을 차지해야 하는지 나타낸다.

만약 모든 아이템의 `flex-grow` 속성이 1로 되어 있다면, 컨테이너의 공간은 아이템들에게 똑같이 분배될 것 이다. 만약 하나의 아이템이 2로 설정되어 있으면, 다른 아이템들 보다 2배의 공간을 차지한다 (최소한 그럴려고 할 것이다).

```css
.item {
  flex-grow: 4; /* default 0 */
}
```

음수는 사용 불가능하다.

### flex-shrink

flex item이 공간을 적게 차지했으면 싶을때 사용한다. `flex-grow`의 반대 개념이다.

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

음수는 사용 불가능하다.

### flex-basis

남은 공간이 분배되기전 요소의 기본 사이즈를 정하는 속성이다. 길이(e.g. 20%, 5rem, etc.) 또는 키워드로 설정이 가능하다. `auto` 키워드는 "width와 height 속성"을 의미한다 (deprecated 될때 까지 `main-size` 키워드가 대신했었다.). `content` 키워드는 "item의 content의 사이즈"를 의미한다. - 아직 브라우저에서 잘 지원되지 않아서 테스트가 어렵고 같은 종류의 키워드인 `max-content`, `min-content`, `fit-content`가 무엇을 의미하는지 아는 것은 더욱 어렵다.

```css
.item {
  flex-basis:  | auto; /* default auto */
}
```

값이 0이면, content 주위에 공간을 설정하지 않는다. 값이 `auto`라면 아이템의 `flex-grow` 값에 따라 공간이 설정될 것이다. 아래 참조.

![https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg)

### flex

`flex-grow`, `flex-shrink`, `flex-basis`를 합쳐 한 줄에 작성할 수 있는 속성이다. 두번째와 세번째 파라미터 (`flex-shrink`, `flex-basis`)는 필수가 아니다. 기본값은 `0 1 auto`이다.

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

**각각의 속성을 따로 설정하는 것 보다 짧게 한줄로 작성하는 것이 좋다.** 값들을 좀 더 읽기 편하고 스마트하게 작성할 수 있다.

### align-self

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%204.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%204.png)

이 속성은 각 flex item들의 기본 alignment 값(또는 `align-items` 속성 값)을 덮어쓴다

`align-items` 에 대해 알고 있어야 설정값을 이해할 수 있다.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

`float`, `clear`, `vertical-align`은 flex item에게 전혀 영향을 주지 못한다는 것을 기억하자.

## Practice

[Flexbox Froggy](https://flexboxfroggy.com/#ko)

![%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%205.png](%5BKor%5D%20Guide%20To%20Flexbox%20f15368972af249e489b70ec1cdcf95d3/Untitled%205.png)
