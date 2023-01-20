export interface OnCompleteParams {
  /**
   * 국가기초구역번호. 2015년 8월 1일부터 시행될 새 우편번호.
   */
  zonecode: string;

  /**
   * 기본 주소
   * (검색 결과에서 첫줄에 나오는 주소, 검색어의 타입(지번/도로명)에 따라 달라집니다.)
   */
  address: string;

  /**
   * 기본 영문 주소
   */
  addressEnglish: string;

  /**
   * 검색된 기본 주소 타입: R(도로명), J(지번)
   */
  addressType: 'R' | 'J';

  /**
   * 검색 결과에서 사용자가 선택한 주소의 타입
   */
  userSelectedType: 'R' | 'J';

  /**
   * 연관 주소에서 "선택 안함" 부분을 선택했을때를 구분할 수 있는 상태변수
   */
  noSelected: 'Y' | 'N';

  /**
   * 검색 결과에서 사용자가 선택한 주소의 언어 타입: K(한글주소), E(영문주소)
   */
  userLanguageType: 'K' | 'E';

  /**
   * 도로명 주소
   * (지번:도로명 주소가 1:N인 경우에는 데이터가 공백으로 들어갈 수 있습니다.
   * - 아래 autoRoadAddress의 자세한 설명 참고)
   */
  roadAddress: string;

  /**
   * 영문 도로명 주소
   */
  roadAddressEnglish: string;

  /**
   * 지번 주소
   * (도로명:지번 주소가 1:N인 경우에는 데이터가 공백으로 들어갈 수 있습니다.
   * - 아래 autoJibunAddress의 자세한 설명 참고)
   */
  jibunAddress: string;

  /**
   * 영문 지번 주소
   */
  jibunAddressEnglish: string;

  /**
   * '지번주소'에 매핑된 '도로명주소'가 여러개인 경우, 사용자가 '선택안함' 또는 '지번주소'를 클릭했을 때 연관된 도로명 주소 중 임의로 첫번째 매핑 주소를 넣어서 반환합니다.
   * (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
   */
  autoRoadAddress: string;

  /**
   * autoRoadAddress의 영문 도로명 주소
   */
  autoRoadAddressEnglish: string;

  /**
   * '도로명주소'에 매핑된 '지번주소'가 여러개인 경우, 사용자가 '선택안함' 또는 '도로명주소'를 클릭했을 때 연관된 지번 주소 중 임의로 첫번째 매핑 주소를 넣어서 반환합니다.
   * (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
   */
  autoJibunAddress: string;

  /**
   * autoJibunAddress의 영문 지번 주소
   */
  autoJibunAddressEnglish: string;

  /**
   * 건물관리번호
   */
  buildingCode: number;

  /**
   * 건물명
   */
  buildingName: string;

  /**
   * 공동주택 여부
   * (아파트,연립주택,다세대주택 등)
   */
  apartment: 'Y' | 'N';

  /**
   * 도/시 이름
   */
  sido: string;

  /**
   * 도/시 이름의 영문
   */
  sidoEnglish: string;

  /**
   * 시/군/구 이름
   */
  sigungu: string;

  /**
   * 시/군/구 이름의 영문
   */
  sigunguEnglish: string;

  /**
   * 시/군/구 코드
   * (5자리 구성된 시/군/구 코드입니다.)
   */
  sigunguCode: string;

  /**
   * 도로명 코드, 7자리로 구성된 도로명 코드입니다. 추후 7자리 이상으로 늘어날 수 있습니다.
   */
  roadnameCode: string;

  /**
   * 법정동/법정리 코드
   */
  bcode: string;

  /**
   * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명" 값이 들어갑니다.(건물번호 제외)
   */
  roadname: string;

  /**
   * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명의 영문" 값이 들어갑니다.(건물번호 제외)
   */
  roadnameEnglish: string;

  /**
   * 법정동/법정리 이름
   */
  bname: string;

  /**
   * 법정동/법정리 이름의 영문
   */
  bnameEnglish: string;

  /**
   * 법정리의 읍/면 이름
   * ("동"지역일 경우에는 공백, "리"지역일 경우에는 "읍" 또는 "면" 정보가 들어갑니다.)
   */
  bname1: string;

  /**
   * 법정리의 읍/면 이름의 영문
   * ("동"지역일 경우에는 공백, "리"지역일 경우에는 "읍" 또는 "면" 정보가 들어갑니다.)
   */
  bname1English: string;

  /**
   * 법정동/법정리 이름
   */
  bname2: string;

  /**
   * 법정동/법정리 이름의 영문
   */
  bname2English: string;

  /**
   * 행정동 이름, 검색어를 행정동으로 검색하고, 검색결과의 법정동과 검색어에 입력한 행정동과 다른 경우에 표시하고, 데이터를 내립니다.
   */
  hname: string;

  /**
   * 사용자가 입력한 검색어
   */
  query: string;
}

export interface PostcodeTheme {
  /**
   * 바탕 배경색
   */
  bgColor?: string;

  /**
   * 검색창 배경색
   */
  searchBgColor?: string;

  /**
   * 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
   */
  contentBgColor?: string;

  /**
   * 페이지 배경색
   */
  pageBgColor?: string;

  /**
   * 기본 글자색
   */
  textColor?: string;

  /**
   * 검색창 글자색
   */
  queryTextColor?: string;

  /**
   * 우편번호 글자색
   */
  postcodeTextColor?: string;

  /**
   * 강조 글자색
   */
  emphTextColor?: string;

  /**
   * 테두리
   */
  outlineColor?: string;
}

export interface JSOptions {
  /**
   * 우편번호 찾기 화면에서 애니메이션 효과를 줍니다. 기본값은 false로 설정되어 있습니다.
   */
  animation?: boolean;

  /**
   * 우편번호 찾기가 실행된 후 검색어 입력박스에 focus를 줍니다. 단, PC 플랫폼에서만 동작하며 Mobile 플랫폼은 지원하지 않습니다. (기본값 true)
   * 추가로 focus의 경우 여러 환경적 요인으로 제대로 동작하지 않을 수도 있으니 참고 부탁드립니다.
   */
  focusInput?: boolean;

  /**
   * 기본값은 true로 설정되어 있으며, 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록 합니다. 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에 들어가게 됩니다. 데이터는 oncomplete 인자 중 autoRoadAddress 또는 autoJibunAddress 항목에 첫번째 매핑 주소가 들어갑니다.
   * false로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고, 사용자가 반드시 매핑된 주소들 중 하나를 선택하도록 할 수도 있습니다. 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에, 가급적 사용하지 않기를 권장합니다.
   */
  autoMapping?: boolean;

  /**
   * 검색된 주소와 내려가는 데이터의 '시','도' 부분을 축약 표시합니다(한글 주소만 해당). 기본값은 true로 설정되어 있습니다.
   * (서울특별시 -> 서울, 광주광역시 -> 광주, 전라북도 -> 전북, 단, '세종특별자치시' '제주특별자치도'는 지자체의 요청에 의해 제외)
   */
  shorthand?: boolean;

  /**
   * 검색결과가 많을시 검색바 아래의 가이드 영역을 강조시켜 주는 기능입니다. 기본값은 0(비활성)입니다.
   * 가이드 문구는 첫화면의 가이드 문구와 동일하며, 조합방식과 예시를 설명하여 사용자에게 재검색을 유도할 수 있도록 하는 기능입니다.
   * 입력값으로는 페이지 넘버가 들어가게 되며, 3~20까지 입력 가능합니다.
   */
  pleaseReadGuide?: number;

  /**
   * pleaseReadGuide 옵션과 같이 사용되는 옵션으로 선택사항입니다. 기본값은 1.5(1.5초간 강조)이며 입력하지 않으면 기본값으로 동작합니다.
   * 입력값 설정 단위는 '초'단위로 설정할 수 있으며, 0.1~60까지 입력 가능합니다.
   */
  pleaseReadGuideTimer?: number;

  /**
   * 검색어 입력시 검색바 아래에 뜨는 서제스트의 최대 검색 갯수를 조절할 수 있는 옵션입니다. 기본값은 10개이며 입력하지 않거나 1~10을 벗어나는 수를 입력시 기본값으로 셋팅됩니다.
   */
  maxSuggestItems?: number;

  /**
   * 기본값은 false이며 기존보다 행정동 정보를 좀 더 많이 보여주게 하는 옵션입니다.
   * 해당 기능을 활성화 하면 검색 결과의 행정동과 법정동이 다른 경우 무조건 표시를 하고 데이터를 내리게 됩니다. 그래서 법정동과 행정동이 같은 경우에는 표시하지 않으며, 데이터 또한 내리지 않습니다.
   */
  showMoreHName?: boolean;

  /**
   * 기본값은 false이며 검색 결과의  "지도" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   */
  hideMapBtn?: boolean;

  /**
   * 기본값은 false이며 검색 결과의  "영문 보기" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   */
  hideEngBtn?: boolean;

  /**
   * 기본값은 false이며 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능입니다, 해당 기능 활성화시 "영문보기" 버튼은 감춰집니다.
   * (hideEngBtn 속성의 설정 값보다 우선시 됩니다.)
   */
  alwaysShowEngAddr?: boolean;

  /**
   * 기본값은 true이며 "form submit" 방식을 사용합니다. false로 설정 시 "location replace" 방식을 사용하게 됩니다. 우편번호 서비스로 인해 history 관련 제어가 어려우실 경우 false로 설정하여 이용하시기 바랍니다.
   */
  submitMode?: boolean;

  /**
   * 기본값은 true이며 하단 배너에 "가이드페이지"로 이동하는 링크를 활성화 시킵니다. 링크로 인해 사용성이 저하된다고 생각하신다면 false로 설정하여 이용하시기 바랍니다.
   */
  useBannerLink?: boolean;

  /**
   * 우편번호 찾기 화면의 색상 테마를 변경할 수 있습니다. 기본값은 null입니다.
   */
  theme?: PostcodeTheme;
}

type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

export interface StyleProps {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignItems?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number | string;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number | string;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  display?: 'none' | 'flex';
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  height?: number | string;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: 'visible' | 'hidden' | 'scroll';
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: 'absolute' | 'relative';
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;

  /**
   * @platform ios
   */
  direction?: 'inherit' | 'ltr' | 'rtl';
}

export interface PostcodeProps {
  /**
   * 다음 우편번호 찾기 서비스의 옵션을 설정할 수 있습니다.
   */
  jsOptions?: JSOptions;

  /**
   * 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우, 해당 정보를 받아서 처리할 콜백 함수를 정의하는 부분입니다.(null값 또는 정의하지 않을 시에 검색은 가능하지만, 결과 항목을 클릭하면 아무 일도 일어나지 않습니다.)
   * 이 함수를 정의할때 넣는 인자에는 우편번호 검색 결과 목록에서 사용자가 클릭한 주소 정보가 들어가게 됩니다.
   */
  onSelected: (data: OnCompleteParams) => void;

  /**
   * onSelected 함수에서 오류 발생 시 실행되는 함수입니다.
   */
  onError: (error: unknown) => void;

  style?: StyleProps;
}
