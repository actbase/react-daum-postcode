# @actbase/react-daum-postcode

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20Web-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/@actbase/react-daum-postcode.svg?style=flat-square)](https://www.npmjs.com/package/@actbase/react-daum-postcode)
[![npm](https://img.shields.io/npm/dm/@actbase/react-daum-postcode.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/@actbase/react-daum-postcode)
[![github issues](https://img.shields.io/github/issues/actbase/react-daum-postcode.svg?style=flat-square)](https://github.com/actbase/react-daum-postcode/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/actbase/react-daum-postcode.svg?style=flat-square&colorB=44cc11)](https://github.com/actbase/react-daum-postcode/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/actbase/react-daum-postcode.svg?style=flat-square&colorB=44cc11)](http://github.com/actbase/react-daum-postcode/issues)

다음 우편번호 검색을 React, React-Native 에서 쉽게 사용할 수 있도록 만든 플러그인입니다.<br />
상세 사용방법은 아래 URL을 참고하세요.

https://github.com/daumPostcode/QnA <br />
https://spi.maps.daum.net/postcode/guidessl

## 설치하기

```bash
npm install @actbase/react-daum-postcode

or

yarn add @actbase/react-daum-postcode
```

### React-Native를 사용 시 추가적으로 설치해주세요.

우편번호 찾는 페이지 자체는 Webview를 통해 실행되도록 되어있습니다.<br />
react-native-webview를 설치해야 합니다.

```bash
npm install react-native-webview
npx pod-install
```

---

## 사용하기

```jsx
import Postcode from '@actbase/react-daum-postcode';

const YourView = () => (
  <Postcode
    style={{ width: 200, height: 200 }}
    jsOptions={{ animated: true }}
    onSelected={data => alert(JSON.stringify(data))}
  />
);
```

---

## 속성

###`jsOptions?: JSOptions`

다음 우편번호찾기 속성을 넣습니다.

아래 URL을 참고해주세요.<br />
https://spi.maps.daum.net/postcode/guidessl#attributes

###`onSelected: (data: OnCompleteParams) => void`

다음우편번호찾기 결과 값을 수신합니다.

oncomplete의 항목을 참고해주세요.<br />
https://spi.maps.daum.net/postcode/guidessl#attributes

###`style: ({width, height})`

width, height값을 별도로 줄 수 있습니다.


# Contacts

해당 모듈은 액트베이스(유)에서 개발 및 관리를 진행하고 있습니다. <br>
프로젝트 문의 혹은 제휴가 필요한 경우 project@actbase.io로 연락주세요.

# Changes

- 0.9.3
  - 첫 배포
