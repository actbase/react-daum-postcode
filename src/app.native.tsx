import * as React from 'react';

import WebView from 'react-native-webview';
import { PostcodeProps } from './types';
import { Linking } from 'react-native';

const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<style> 
	  * { box-sizing: border-box }
	  html, body { width: 100%; height: 100%; margin:0px; padding: 0px; background-color: #ececec; } 
	  #layer iframe { overflow-y: auto !important; }
  </style>
</head>
<body>
	<div id="layer" style="width:100%; height: 100%; border:2px solid #f00; overflow-y: auto;"></div>
	<script type="text/javascript">
    function callback() {
			var element_layer = document.getElementById('layer');
      new daum.Postcode({
        ...window.options,
        oncomplete: function(data) {
          window.ReactNativeWebView.postMessage(JSON.stringify(data));
        },
        // onresize: function(size) {
        //   document.getElementById('layer').style.height = size.height + 'px';
        // },
        onclose: function(state) {
          callback();
        },
        width : '100%',
        height: '100%',
      }).embed(element_layer);
    }
		function initOnReady(options) {
    	window.options = options;
			var s = document.createElement('script');
			s.type = 'text/javascript'; s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
			s.onreadystatechange = callback; s.onload = callback;
			var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
	</script>
</body>
</html>
`;

const Postcode: React.FC<PostcodeProps> = (props: PostcodeProps) => {
  const { jsOptions, onSelected, onError, style, ...otherProps } = props;
  const injectedJavaScript = React.useMemo(() => `initOnReady(${JSON.stringify(jsOptions)});void(0);`, [jsOptions]);

  const onMessage = React.useCallback(
    ({ nativeEvent }) => {
      try {
        nativeEvent.data && onSelected && onSelected(JSON.parse(nativeEvent.data));
      } catch (e) {
        onError(e);
      }
    },
    [onSelected],
  );

  return (
    <WebView
      mixedContentMode={'compatibility'}
      androidLayerType="hardware"
      renderToHardwareTextureAndroid={true}
      useWebKit={true}
      {...otherProps}
      source={{ html, baseUrl: 'https://postcode.map.daum.net' }}
      style={style}
      onMessage={onMessage}
      injectedJavaScript={injectedJavaScript}
      onShouldStartLoadWithRequest={request => {
        const isPostcode =
          !request.url?.startsWith('https://postcode.map.daum.net/guide') &&
          (!request.url?.startsWith('http') ||
            request.url?.startsWith('https://postcode.map.daum.net') ||
            request.url?.startsWith('http://postcode.map.daum.net'));
        if (!isPostcode) {
          Linking.openURL(request.url);
          return false;
        } else {
          return true;
        }
      }}
    />
  );
};

export default Postcode;
