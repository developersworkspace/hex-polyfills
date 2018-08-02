import { interceptFunction } from '../helpers';

function interceptSendFollowedByInterceptOnReadStateChange(): void {
  interceptFunction(XMLHttpRequest.prototype, 'send', {
    after: null,
    before: function() {
      interceptOnReadStateChange(this);
    },
  });
}

function interceptOnReadStateChange(xmlHttpRequest: any): void {
  interceptFunction(xmlHttpRequest, 'onreadystatechange', {
    after: null,
    before: function() {
      if (xmlHttpRequest.readyState === 4) {
        // TODO
      }
    },
  });
}

interceptSendFollowedByInterceptOnReadStateChange();
