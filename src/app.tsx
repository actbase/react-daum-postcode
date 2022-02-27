import * as React from 'react';
import { OnCompleteParams, PostcodeProps } from './types';

const getJSApi = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') reject({ message: 'unsupported platform' });
    // @ts-ignore
    const postcodeSDK = window.daum?.Postcode;
    if (postcodeSDK) {
      resolve(postcodeSDK);
      return;
    }

    const jsapi = document.createElement('script');
    jsapi.type = 'text/javascript';
    jsapi.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const s = document.getElementsByTagName('script')[0];
    s?.parentNode?.insertBefore(jsapi, s);
    // @ts-ignore
    jsapi.onload = () => resolve(window.daum.Postcode);
    jsapi.onabort = jsapi.onerror = reject;
  });
};

const Postcode: React.FC<PostcodeProps> = ({ onSelected, jsOptions, style }) => {
  const layer = React.useRef<HTMLDivElement>(null);

  const loadData = React.useCallback(async () => {
    const Postcode = await getJSApi();
    if (Postcode) {
      // @ts-ignore
      new window.daum.Postcode({
        ...jsOptions,
        width: '100%',
        oncomplete: function(data: OnCompleteParams) {
          onSelected(data);
        },
        onclose: function() {
          loadData();
        },
      }).embed(layer.current, { autoClose: false });
    }
  }, [onSelected]);

  React.useEffect(() => {
    loadData().catch(console.warn);
  }, [loadData]);

  // @ts-ignore
  return <div ref={layer} style={style} />;
};

export default Postcode;
